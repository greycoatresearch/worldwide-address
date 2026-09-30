/**
 * Converts Shopify/worldwide YAML into the worldwide-address-data schema (v1)
 * and writes it to worldwide-address-data/data/v1/ as ES modules.
 *
 * Each data file is `export default <data>;`. Index modules map keys to loaders with literal
 * `import()` specifiers, so bundlers can split chunks without resolving variable paths.
 *
 * Usage: pnpm generate [--force-fetch]
 */
import { execFileSync } from "node:child_process";
import { mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { parse } from "yaml";
import { prettifyError, type ZodType } from "zod";
import {
  CountriesFile,
  FIELD_NAMES,
  LabelsFile,
  LocalizedZonesFile,
  MetaFile,
  SCHEMA_VERSION,
  ZonesFile,
  type Country,
  type FieldLabel,
  type FieldName,
  type Zone,
} from "@greycoatresearch/worldwide-address-data/schema";
import { fetchUpstream, readPinnedSha } from "./fetch.ts";

// Resolve the output path through the declared dependency rather than a relative path
const DATA_PACKAGE_ROOT = dirname(
  fileURLToPath(import.meta.resolve("@greycoatresearch/worldwide-address-data/package.json")),
);
const OUT_DIR = join(DATA_PACKAGE_ROOT, "data", `v${SCHEMA_VERSION}`);

/** worldwide label key (snake_case) → schema field name */
const LABEL_KEY_TO_FIELD: Record<string, FieldName> = {
  country: "country",
  first_name: "firstName",
  last_name: "lastName",
  company: "company",
  address1: "address1",
  address2: "address2",
  city: "city",
  province: "province",
  zip: "zip",
  phone: "phone",
};

// ── YAML ─────────────────────────────────────────────────────

/**
 * Parses as YAML 1.2 (core schema).
 *
 * worldwide is read by Ruby (Psych), and npm `yaml`'s 1.1 mode treats more scalars as booleans than Psych:
 * - npm yaml 1.1: y/n/yes/no/on/off → boolean, which breaks AR zone codes `Y` (Jujuy), `N` (Misiones)
 *   and CA zip prefixes `Y`, `N`
 * - Psych: only yes/no/on/off/true/false (y/n stay strings)
 * - 1.2 core: only true/false
 * Values that Psych would turn into booleans (e.g. Ontario's 'ON') are already quoted upstream,
 * so 1.2 is the closest match.
 */
function readYaml(path: string): any {
  return parse(readFileSync(path, "utf8"));
}

/**
 * For values that must be strings (codes, prefixes, names).
 * A boolean (Y/N) or number (unquoted 0573 → 573) means the value is already corrupted, so fail.
 */
function str(v: unknown): string {
  if (typeof v === "string") return v;
  throw new Error(`expected string, got ${typeof v}: ${JSON.stringify(v)}`);
}
const sortedDir = (path: string) => readdirSync(path).sort();

// ── countries.js + zones/{CC}.js ───────────────────────────

function parseLayout(edit: string, cc: string): FieldName[][] {
  return edit.split("_").map((line) =>
    [...line.matchAll(/\{(\w+)\}/g)].map(([, token]) => {
      if (!token || !(FIELD_NAMES as readonly string[]).includes(token)) {
        throw new Error(`${cc}: unknown field "${token}" in format.edit`);
      }
      return token as FieldName;
    }),
  );
}

type Region = {
  code: string;
  country: Country;
  zones: ZonesFile; // empty when hasZones is false
};

function buildRegion(raw: any): Region {
  const cc = str(raw.code);
  if (!raw.format?.edit) throw new Error(`${cc}: missing format.edit`);

  const layout = parseLayout(raw.format.edit, cc);
  const inLayout = (f: FieldName) => layout.some((line) => line.includes(f));

  // ignore_provinces: zones exist but are staged before launch, so treat them as absent
  const rawZones: any[] = raw.ignore_provinces ? [] : (raw.zones ?? []);
  const hasZones = inLayout("province") && rawZones.length > 0;
  if (inLayout("province") && rawZones.length === 0) {
    throw new Error(`${cc}: layout has {province} but no zones`);
  }

  const zones: ZonesFile = hasZones
    ? rawZones.map((z): Zone => {
        const code = str(z.code);
        const zone: Zone = {
          code,
          iso: str(z.iso_code ?? `${cc}-${code}`),
          name: str(z.name),
        };
        if (z.code_alternates?.length) zone.aliases = z.code_alternates.map(str);
        if (z.zip_prefixes?.length) zone.zipPrefixes = z.zip_prefixes.map(str);
        return zone;
      })
    : [];

  // Follows worldwide's address_validator.rb, limited to fields in the layout
  const zipRequired = raw.zip_requirement
    ? raw.zip_requirement === "required"
    : Boolean(raw.zip_regex);
  const required: FieldName[] = ["country"];
  if (inLayout("city")) required.push("city");
  if (inLayout("zip") && zipRequired) required.push("zip");
  if (hasZones && !raw.province_optional) required.push("province");

  const country: Country = { layout, required, hasZones };
  if (inLayout("zip")) {
    country.zip = {};
    if (raw.zip_regex) country.zip.regex = str(raw.zip_regex);
    if (raw.zip_example) country.zip.example = str(raw.zip_example);
  }
  if (hasZones && raw.province_optional) country.provinceOptional = true;

  return { code: cc, country, zones };
}

// ── locales/{locale}/zones/{CC}.js ───────────────────────────

/** Same as the gem's cldr_code: 2 letters → uppercase (territories key), else lowercase without hyphens (subdivisions key) */
function cldrKey(iso: string): string {
  return iso.length === 2 ? iso.toUpperCase() : iso.toLowerCase().replaceAll("-", "");
}

function buildLocalizedZones(
  subdivisions: Record<string, unknown>,
  zones: ZonesFile,
): LocalizedZonesFile {
  const out: LocalizedZonesFile = [];
  for (const z of zones) {
    // 2-letter ISO codes (US territories) live in CLDR territories, not here; the loader falls back to zone.name
    const name = subdivisions[cldrKey(z.iso)];
    if (typeof name === "string") out.push([z.code, name]);
  }
  return out;
}

// ── locales/{locale}/labels.js ───────────────────────────────

function toFieldLabels(addresses: any): Partial<Record<FieldName, FieldLabel>> {
  const out: Partial<Record<FieldName, FieldLabel>> = {};
  for (const [key, value] of Object.entries<any>(addresses ?? {})) {
    const field = LABEL_KEY_TO_FIELD[key];
    if (!field || !value?.label) continue;
    const label: FieldLabel = {};
    if (value.label.default) label.label = str(value.label.default);
    if (value.label.optional) label.optionalLabel = str(value.label.optional);
    if (Object.keys(label).length) out[field] = label;
  }
  return out;
}

/**
 * Output files are collected in memory, validated, and written only if every file passes.
 * A failed run leaves the previous output untouched.
 */
class Output {
  private files = new Map<string, string>();
  private errors: string[] = [];

  /** A data module (`export default <data>;`) validated against its schema */
  module<T>(relPath: string, schema: ZodType<T>, data: T) {
    const result = schema.safeParse(data);
    if (!result.success) this.errors.push(`${relPath}\n${prettifyError(result.error)}`);
    // Serialize the original value, not result.data: parsing may reorder keys.
    // Indented for reviewable diffs.
    this.text(relPath, `export default ${JSON.stringify(data, null, 2)};\n`);
  }

  text(relPath: string, content: string) {
    this.files.set(relPath, content);
  }

  write(outDir: string) {
    if (this.errors.length) {
      throw new Error(
        `schema validation failed for ${this.errors.length} file(s), nothing written:\n\n` +
          this.errors.join("\n\n"),
      );
    }
    rmSync(outDir, { recursive: true, force: true }); // start fresh so removed files do not linger
    for (const [relPath, content] of this.files) {
      const path = join(outDir, relPath);
      mkdirSync(dirname(path), { recursive: true });
      writeFileSync(path, content);
    }
    return this.files.size;
  }
}

const GENERATED = "// Generated by worldwide-address-generator. Do not edit.\n";

/** `{ "KEY": () => import("./KEY.js"), ... }` */
function loaderMap(entries: [key: string, specifier: string][]): string {
  const lines = entries.map(
    ([key, specifier]) => `  ${JSON.stringify(key)}: () => import(${JSON.stringify(specifier)}),`,
  );
  return `{\n${lines.join("\n")}\n}`;
}

// Declarations stay untyped on purpose: the package source casts them to the schema types,
// so the generated output never depends on where the types live.
const LOADER_DTS = "type Loader<T> = () => Promise<{ default: T }>;\n";
const DATA_DTS = "declare const data: unknown;\nexport default data;\n";

export function generate({ forceFetch = false } = {}) {
  const upstream = fetchUpstream({ force: forceFetch });
  const regionsDir = join(upstream, "data", "regions");
  const cldrDir = join(upstream, "data", "cldr", "locales");

  const out = new Output();

  // 1) countries.js, zones/{CC}.js
  const regions: Region[] = [];
  for (const file of sortedDir(regionsDir)) {
    if (!file.endsWith(".yml")) continue;
    const raw = readYaml(join(regionsDir, file));
    if (!raw?.code || raw.deprecated) continue; // dissolved regions (e.g. AN)
    regions.push(buildRegion(raw));
  }

  const countries: CountriesFile = {};
  for (const r of regions) {
    countries[r.code] = r.country;
    if (r.country.hasZones) out.module(`zones/${r.code}.js`, ZonesFile, r.zones);
  }
  out.module("countries.js", CountriesFile, countries);
  out.text("countries.d.ts", DATA_DTS);
  const withZones = regions.filter((r) => r.country.hasZones);
  out.text(
    "zones/index.js",
    GENERATED + `export default ${loaderMap(withZones.map((r) => [r.code, `./${r.code}.js`]))};\n`,
  );
  out.text(
    "zones/index.d.ts",
    LOADER_DTS + "declare const zones: Record<string, Loader<unknown>>;\nexport default zones;\n",
  );

  // 2) locales/{locale}/zones/{CC}.js  (CLDR subdivision names, translated entries only)
  const zoneLocales: string[] = [];
  for (const locale of sortedDir(cldrDir)) {
    const path = join(cldrDir, locale, "subdivisions.yml");
    if (!existsSync(path)) continue;
    const doc = readYaml(path);
    const subdivisions = (Object.values(doc)[0] as any)?.subdivisions ?? {};
    const written: string[] = [];
    for (const r of withZones) {
      const localized = buildLocalizedZones(subdivisions, r.zones);
      if (localized.length) {
        out.module(`locales/${locale}/zones/${r.code}.js`, LocalizedZonesFile, localized);
        written.push(r.code);
      }
    }
    if (written.length) {
      out.text(
        `locales/${locale}/zones/index.js`,
        GENERATED + `export default ${loaderMap(written.map((cc) => [cc, `./${cc}.js`]))};\n`,
      );
      zoneLocales.push(locale);
    }
  }

  // 3) locales/{locale}/labels.js  (_default + per-country overrides)
  const labelLocales: string[] = [];
  for (const file of sortedDir(join(regionsDir, "_default"))) {
    if (!file.endsWith(".yml")) continue;
    const locale = file.slice(0, -".yml".length);
    const def = readYaml(join(regionsDir, "_default", file));
    const labels: LabelsFile = {
      default: toFieldLabels(def?.[locale]?.worldwide?._default?.addresses),
      countries: {},
    };
    for (const r of regions) {
      const path = join(regionsDir, r.code, file);
      if (!existsSync(path)) continue;
      const overrides = toFieldLabels(readYaml(path)?.[locale]?.worldwide?.[r.code]?.addresses);
      if (Object.keys(overrides).length) labels.countries[r.code] = overrides;
    }
    out.module(`locales/${locale}/labels.js`, LabelsFile, labels);
    labelLocales.push(locale);
  }

  out.text(
    "locales/index.js",
    GENERATED +
      `export const labels = ${loaderMap(labelLocales.map((l) => [l, `./${l}/labels.js`]))};\n\n` +
      `export const zoneNames = ${loaderMap(zoneLocales.map((l) => [l, `./${l}/zones/index.js`]))};\n`,
  );
  out.text(
    "locales/index.d.ts",
    LOADER_DTS +
      "export declare const labels: Record<string, Loader<unknown>>;\n" +
      "export declare const zoneNames: Record<string, Loader<Record<string, Loader<unknown>>>>;\n",
  );

  // 4) meta.js
  const meta: MetaFile = {
    schemaVersion: SCHEMA_VERSION,
    upstream: {
      repo: "Shopify/worldwide",
      sha: readPinnedSha(),
      committedAt: execFileSync("git", ["log", "-1", "--format=%cI"], {
        cwd: upstream,
        encoding: "utf8",
      }).trim(),
    },
    locales: { zones: zoneLocales, labels: labelLocales },
  };
  out.module("meta.js", MetaFile, meta);
  out.text("meta.d.ts", DATA_DTS);

  // The data is derived from worldwide (MIT) and CLDR (Unicode License); ship both notices with it
  out.text("LICENSE.md", readFileSync(join(upstream, "LICENSE.md"), "utf8"));
  const fileCount = out.write(OUT_DIR);

  console.log(
    `[generate] ${regions.length} countries (${withZones.length} with zones), ` +
      `${zoneLocales.length} zone locales, ${labelLocales.length} label locales, ` +
      `${fileCount} files → ${OUT_DIR}`,
  );
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  generate({ forceFetch: process.argv.includes("--force-fetch") });
}
