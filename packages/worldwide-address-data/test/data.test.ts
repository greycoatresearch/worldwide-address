/**
 * Invariants and reference values for the generated data/v1, read through the public loaders.
 * Per-file invariants live in the schemas; this file checks that every module passes its schema
 * plus the invariants that span several modules.
 */
import assert from "node:assert/strict";
import { readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, test } from "node:test";
import { labels, zoneNames } from "../data/v1/locales/index.js";
import zoneLoaders from "../data/v1/zones/index.js";
import { countries, loadLabels, loadZoneNames, loadZones, meta } from "../src/index.ts";
import {
  CountriesFile,
  LabelsFile,
  LocalizedZones,
  LocalizedZonesFile,
  MetaFile,
  SCHEMA_VERSION,
  ZonesFile,
} from "../src/schema.ts";

const DATA_DIR = join(import.meta.dirname, "..", "data", `v${SCHEMA_VERSION}`);

const countryCodes = Object.keys(countries);
const withZones = countryCodes.filter((cc) => countries[cc]!.hasZones);

const zones = new Map<string, ZonesFile>();
for (const cc of countryCodes) {
  const z = await loadZones(cc);
  if (z) zones.set(cc, ZonesFile.parse(z));
}
const zoneCodes = (cc: string) => new Set(zones.get(cc)?.map((z) => z.code));

/** locale → country → names, for every module listed in the indexes */
const names = new Map<string, Map<string, LocalizedZones>>();
for (const locale of meta.locales.zones) {
  const byCountry = new Map<string, LocalizedZones>();
  for (const cc of withZones) {
    const n = await loadZoneNames(locale, cc);
    if (n) byCountry.set(cc, LocalizedZones.parse(n));
  }
  names.set(locale, byCountry);
}

describe("top-level modules", () => {
  test("meta and countries pass their schemas", () => {
    MetaFile.parse(meta);
    CountriesFile.parse(countries);
  });
});

describe("indexes", () => {
  test("indexes list exactly the meta locales", () => {
    assert.deepEqual(Object.keys(labels), meta.locales.labels);
    assert.deepEqual(Object.keys(zoneNames), meta.locales.zones);
  });

  test("every data module on disk is reachable from an index", () => {
    const expected = new Set([
      ...Object.keys(zoneLoaders).map((cc) => `zones/${cc}.js`),
      ...meta.locales.labels.map((l) => `locales/${l}/labels.js`),
      ...meta.locales.zones.map((l) => `locales/${l}/zones.js`),
    ]);
    const onDisk = readdirSync(DATA_DIR, { recursive: true, encoding: "utf8" })
      .map((p) => p.replaceAll("\\", "/"))
      .filter((p) => p.endsWith(".js") && !p.endsWith("index.js"))
      .filter((p) => p !== "countries.js" && p !== "meta.js");
    assert.deepEqual(new Set(onDisk), expected);
  });

  test("unknown keys load as undefined, including prototype keys", async () => {
    assert.equal(await loadZones("XX"), undefined);
    assert.equal(await loadZones("constructor"), undefined);
    assert.equal(await loadZoneNames("xx", "KR"), undefined);
    assert.equal(await loadZoneNames("ko", "toString"), undefined);
    assert.equal(await loadLabels("__proto__"), undefined);
  });
});

describe("zones", () => {
  test("hasZones ⇔ zones exist", () => {
    assert.deepEqual([...zones.keys()], withZones);
  });
});

describe("locales", () => {
  test("zone name files pass the schema and only cover countries with zones", async () => {
    for (const locale of meta.locales.zones) {
      const file = LocalizedZonesFile.parse((await zoneNames[locale]!()).default);
      for (const cc of Object.keys(file)) assert.ok(countries[cc]?.hasZones, `${locale}: ${cc}`);
    }
  });

  for (const [locale, byCountry] of names) {
    test(`${locale}: zone names refer to existing zones`, () => {
      assert.ok(byCountry.size > 0, "locale listed without any zone names");
      for (const [cc, list] of byCountry) {
        const codes = zoneCodes(cc);
        for (const [code] of list) assert.ok(codes.has(code), `${cc}: unknown zone "${code}"`);
      }
    });
  }

  for (const locale of meta.locales.labels) {
    test(`${locale}: labels pass the schema and refer to existing countries`, async () => {
      const l = LabelsFile.parse(await loadLabels(locale));
      for (const cc of Object.keys(l.countries)) assert.ok(countries[cc], `unknown "${cc}"`);
    });
  }
});

describe("reference values", () => {
  test("KR: 17 zones, KR-11 has its Korean name", () => {
    assert.equal(zones.get("KR")?.length, 17);
    assert.deepEqual(
      names
        .get("ko")
        ?.get("KR")
        ?.find(([code]) => code === "KR-11"),
      ["KR-11", "서울특별시"],
    );
  });

  test("MX: AGS has ISO MX-AGU and alias AGU", () => {
    const ags = zones.get("MX")?.find((z) => z.code === "AGS");
    assert.equal(ags?.iso, "MX-AGU");
    assert.deepEqual(ags?.aliases, ["AGU"]);
  });

  test("AR: zone codes Y and N stay strings (YAML 1.1 regression)", () => {
    const codes = zoneCodes("AR");
    assert.ok(codes.has("Y"));
    assert.ok(codes.has("N"));
  });

  test("GB, TR: ignore_provinces means no zones", () => {
    assert.equal(countries.GB?.hasZones, false);
    assert.equal(countries.TR?.hasZones, false);
  });

  test("NZ: province is optional", () => {
    assert.equal(countries.NZ?.provinceOptional, true);
    assert.ok(!countries.NZ?.required.includes("province"));
  });

  test("US: GU keeps its upstream name", () => {
    assert.equal(zones.get("US")?.find((z) => z.code === "GU")?.name, "Guam");
  });
});
