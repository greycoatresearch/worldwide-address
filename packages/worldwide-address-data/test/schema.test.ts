/** The schemas must reject data that breaks single-file invariants. */
import assert from "node:assert/strict";
import { test } from "node:test";
import { Country, LocalizedZonesFile, ZonesFile, type Country as CountryT } from "../src/schema.ts";

const valid: CountryT = {
  layout: [["country"], ["city", "province", "zip"]],
  required: ["country", "city", "province", "zip"],
  zip: { regex: "^\\d{5}$", example: "12345" },
  hasZones: true,
};

test("accepts a valid country", () => {
  assert.ok(Country.safeParse(valid).success);
});

const invalidCountries: [string, unknown][] = [
  ["duplicate layout field", { ...valid, layout: [["country", "city"], ["city"]] }],
  ["layout without country", { ...valid, layout: [["city", "province", "zip"]], required: [] }],
  ["required field outside layout", { ...valid, required: [...valid.required, "phone"] }],
  [
    "hasZones without province in layout",
    { ...valid, layout: [["country", "zip"]], required: ["country"] },
  ],
  ["province in layout without zones", { ...valid, hasZones: false, required: ["country"] }],
  [
    "provinceOptional without zones",
    {
      ...valid,
      layout: [["country"]],
      required: ["country"],
      zip: undefined,
      hasZones: false,
      provinceOptional: true,
    },
  ],
  ["zip in layout but no zip object", { ...valid, zip: undefined }],
  ["regex that does not compile", { ...valid, zip: { regex: "(" } }],
  ["example that does not match", { ...valid, zip: { regex: "^\\d{5}$", example: "1234" } }],
  ["unknown key", { ...valid, extra: 1 }],
];
for (const [name, data] of invalidCountries) {
  test(`rejects country: ${name}`, () => {
    assert.equal(Country.safeParse(data).success, false);
  });
}

test("rejects zone code given as a boolean", () => {
  assert.equal(ZonesFile.safeParse([{ code: true, iso: "AR-Y", name: "Jujuy" }]).success, false);
});

test("rejects duplicate zone codes", () => {
  const zone = { code: "A", iso: "XX-A", name: "A" };
  assert.equal(ZonesFile.safeParse([zone, zone]).success, false);
});

test("rejects an alias that collides with another zone's code", () => {
  const zones = [
    { code: "A", iso: "XX-A", name: "A" },
    { code: "B", iso: "XX-B", name: "B", aliases: ["A"] },
  ];
  assert.equal(ZonesFile.safeParse(zones).success, false);
});

test("rejects an empty localized name", () => {
  assert.equal(LocalizedZonesFile.safeParse([["A", ""]]).success, false);
});
