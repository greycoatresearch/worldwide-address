/**
 * worldwide-address-data output schema (v1)
 *
 * data/v1/  (each file is an ES module: `export default <data>;`)
 *   meta.js                          MetaFile
 *   countries.js                     CountriesFile
 *   zones/{CC}.js                    ZonesFile             (countries with zones only)
 *   locales/{locale}/labels.js       LabelsFile            (worldwide label locales)
 *   locales/{locale}/zones/{CC}.js   LocalizedZonesFile    (CLDR subdivision locales, translated entries only)
 *
 * Principles
 * - Field names are API-neutral camelCase. Mapping to API-specific names (zoneCode, provinceCode, ...)
 *   is up to the consumer.
 * - No locale fallback. Only translations present upstream are included.
 * - Zones keep upstream order. Sorting is up to the consumer.
 *
 * Each schema checks the invariants that can be decided from a single file.
 * Cross-file invariants (e.g. hasZones ⇔ zones/{CC}.js exists) are covered by test/data.test.ts.
 */
import { z } from "zod";

export const SCHEMA_VERSION = 1;

/** Fields that appear in the form layout (format.edit) */
export const FIELD_NAMES = [
  "country",
  "firstName",
  "lastName",
  "company",
  "address1",
  "address2",
  "city",
  "province",
  "zip",
  "phone",
] as const;
export const FieldName = z.enum(FIELD_NAMES);
export type FieldName = z.infer<typeof FieldName>;

/** ISO 3166-1 alpha-2 (mostly matches Shopify CountryCode; worldwide is authoritative for exceptions) */
export const CountryCode = z.string().regex(/^[A-Z]{2}$/);
export type CountryCode = z.infer<typeof CountryCode>;

/** Shopify zone code (e.g. "AGS", "KR-11", "ON", "Q ROO") */
export const ZoneCode = z.string().min(1);
export type ZoneCode = z.infer<typeof ZoneCode>;

/** BCP 47 language tag, kept as upstream spells it (zone names: CLDR, labels: worldwide) */
export const Locale = z.string().regex(/^[A-Za-z]{2,3}(-[A-Za-z0-9]{2,8})*$/);
export type Locale = z.infer<typeof Locale>;

// ── meta.json ────────────────────────────────────────────────

export const MetaFile = z.strictObject({
  schemaVersion: z.literal(SCHEMA_VERSION),
  upstream: z.strictObject({
    repo: z.literal("Shopify/worldwide"),
    sha: z.string().regex(/^[0-9a-f]{40}$/),
    /** Upstream commit time (ISO 8601). Generation time is omitted to keep diffs clean */
    committedAt: z.iso.datetime({ offset: true }),
  }),
  locales: z.strictObject({
    /** Locales that have locales/{locale}/zones/ */
    zones: z.array(Locale),
    /** Locales that have locales/{locale}/labels.json */
    labels: z.array(Locale),
  }),
});
export type MetaFile = z.infer<typeof MetaFile>;

// ── countries.json ───────────────────────────────────────────

export const Country = z
  .strictObject({
    /** Form layout. Outer array = rows, inner array = fields on one row */
    layout: z.array(z.array(FieldName).min(1)).min(1),
    /**
     * Only fields whose requirement is derivable from worldwide data
     * (country always / city if in layout / zip: zip_requirement or regex presence /
     * province: hasZones && !provinceOptional).
     * Name, company and phone requirements are store settings and are not included.
     */
    required: z.array(FieldName),
    /**
     * Present only when the layout has zip.
     * Some countries have no regex (show the field, skip format validation).
     */
    zip: z
      .strictObject({
        regex: z.string().min(1).optional(),
        example: z.string().min(1).optional(),
      })
      .optional(),
    /** If true, zones/{CC}.json and locales/{locale}/zones/{CC}.json exist */
    hasZones: z.boolean(),
    /** Countries where province is optional (currently NZ) */
    provinceOptional: z.literal(true).optional(),
  })
  .check((ctx) => {
    const c = ctx.value;
    const issue = (message: string, path: PropertyKey[] = []) =>
      ctx.issues.push({ code: "custom", message, input: c, path });

    const fields = c.layout.flat();
    const inLayout = new Set(fields);
    if (inLayout.size !== fields.length) issue("layout has duplicate fields", ["layout"]);
    if (!inLayout.has("country")) issue("layout must include country", ["layout"]);

    if (new Set(c.required).size !== c.required.length) {
      issue("required has duplicate fields", ["required"]);
    }
    for (const f of c.required) {
      if (!inLayout.has(f)) issue(`required field "${f}" is not in layout`, ["required"]);
    }
    if (!c.required.includes("country")) issue("country must be required", ["required"]);

    if (inLayout.has("province") !== c.hasZones) {
      issue("hasZones must match whether layout has province", ["hasZones"]);
    }
    if (c.provinceOptional && !c.hasZones) {
      issue("provinceOptional requires hasZones", ["provinceOptional"]);
    }
    if (inLayout.has("zip") !== (c.zip !== undefined)) {
      issue("zip must be present iff layout has zip", ["zip"]);
    }

    if (c.zip?.regex !== undefined) {
      let re: RegExp | undefined;
      try {
        re = new RegExp(c.zip.regex);
      } catch {
        issue("zip.regex does not compile", ["zip", "regex"]);
      }
      if (re && c.zip.example !== undefined && !re.test(c.zip.example)) {
        issue("zip.example does not match zip.regex", ["zip", "example"]);
      }
    }
  });
export type Country = z.infer<typeof Country>;

export const CountriesFile = z.record(CountryCode, Country);
export type CountriesFile = z.infer<typeof CountriesFile>;

// ── zones/{CC}.json ──────────────────────────────────────────

export const Zone = z.strictObject({
  /** Shopify zone code. The value sent as zoneCode/provinceCode */
  code: ZoneCode,
  /** ISO 3166-2. US territories (AS, GU, PR, ...) use their ISO 3166-1 country code */
  iso: z.string().regex(/^[A-Z]{2}(-[A-Z0-9]{1,3})?$/),
  /** Upstream worldwide name (English). Final fallback when no locale has a translation */
  name: z.string().min(1),
  /** code_alternates: alternate codes Shopify accepts and normalizes to code. Omitted if none */
  aliases: z.array(ZoneCode).min(1).optional(),
  /** Zip prefixes that belong to this zone. Omitted if none */
  zipPrefixes: z.array(z.string().min(1)).min(1).optional(),
});
export type Zone = z.infer<typeof Zone>;

/** Upstream order */
export const ZonesFile = z
  .array(Zone)
  .min(1)
  .check((ctx) => {
    // Codes and aliases share one namespace: Shopify normalizes an alias to its zone's code,
    // so an alias that collides with another zone's code or alias would be ambiguous.
    const owner = new Map<string, string>();
    for (const [i, zone] of ctx.value.entries()) {
      for (const key of [zone.code, ...(zone.aliases ?? [])]) {
        const prev = owner.get(key);
        if (prev !== undefined) {
          ctx.issues.push({
            code: "custom",
            message: `"${key}" of zone ${zone.code} collides with zone ${prev}`,
            input: ctx.value,
            path: [i],
          });
        } else {
          owner.set(key, zone.code);
        }
      }
    }
  });
export type ZonesFile = z.infer<typeof ZonesFile>;

// ── locales/{locale}/zones/{CC}.json ─────────────────────────

/**
 * [code, name] list. Upstream order, translated entries only.
 * Tuples instead of an object: JS objects do not preserve the order of integer-like keys.
 */
export const LocalizedZonesFile = z
  .array(z.tuple([ZoneCode, z.string().min(1)]))
  .min(1)
  .check((ctx) => {
    const codes = ctx.value.map(([code]) => code);
    if (new Set(codes).size !== codes.length) {
      ctx.issues.push({ code: "custom", message: "duplicate zone code", input: ctx.value });
    }
  });
export type LocalizedZonesFile = z.infer<typeof LocalizedZonesFile>;

// ── locales/{locale}/labels.json ─────────────────────────────

export const FieldLabel = z.strictObject({
  label: z.string().min(1).optional(),
  /** Label shown when the field is optional */
  optionalLabel: z.string().min(1).optional(),
});
export type FieldLabel = z.infer<typeof FieldLabel>;

export const FieldLabels = z.partialRecord(FieldName, FieldLabel);
export type FieldLabels = z.infer<typeof FieldLabels>;

export const LabelsFile = z.strictObject({
  default: FieldLabels,
  /** Per-country overrides only. Merging with default is the loader's job */
  countries: z.record(CountryCode, FieldLabels),
});
export type LabelsFile = z.infer<typeof LabelsFile>;
