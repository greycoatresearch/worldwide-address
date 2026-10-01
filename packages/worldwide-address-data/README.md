# @greycoatresearch/worldwide-address-data

Address form data for every country, derived from [Shopify/worldwide](https://github.com/Shopify/worldwide):
form layouts, required fields, zip rules, zones (provinces/states) with their Shopify zone codes,
localized zone names, and field labels.

Zone `code` is the value Shopify APIs expect (`zoneCode` in the Customer Account API,
`provinceCode` in the Storefront API). It is not always the ISO 3166-2 code; the ISO code is in `iso`.

## Install

```sh
npm install @greycoatresearch/worldwide-address-data
```

ES modules only. Works in Node 22+ and modern bundlers.

## Usage

```ts
import {
  countries,
  loadLabels,
  loadZoneNames,
  loadZones,
} from "@greycoatresearch/worldwide-address-data";

const kr = countries.KR;
kr.layout; // [["country"], ["company"], ["lastName", "firstName"], ["zip"], ["province", "city"], ...]
kr.required; // ["country", "city", "zip", "province"]

await loadZones("KR"); // [{ code: "KR-26", iso: "KR-26", name: "Busan", zipPrefixes: [...] }, ...]
await loadZoneNames("ko", "KR"); // [["KR-26", "부산광역시"], ...]
await loadLabels("ko"); // { default: { ... }, countries: { KR: { province: { label: "시/도" } } } }
```

- `countries` and `meta` are bundled with the entry point.
- Everything else is loaded on demand as separate chunks: zones one module per country, zone
  names and labels one module per locale. A browser only downloads what you request.
- Loaders return `undefined` when there is no data for the key.
- Locale tags match exactly as listed in `meta.locales` (CLDR tags for zone names, worldwide tags
  for labels). No fallback is applied.
- Zones keep upstream order. Sort with `Intl.Collator` if needed.
- Only `country`, `city`, `zip` and `province` appear in `required`. Whether name, company or phone
  are required is a store setting.

### Schemas

Zod schemas for every file are available from a separate entry point, for validating data you
fetch or store yourself:

```ts
import { CountriesFile, ZonesFile } from "@greycoatresearch/worldwide-address-data/schema";
```

The main entry point does not import Zod.

## Data source

Generated from a pinned commit of Shopify/worldwide (`meta.upstream`). Shopify Developer Support
has confirmed that worldwide's `data/regions/*.yml` can be treated as the source of truth for
Customer Account API zone codes.

## License

MIT. The data is derived from Shopify/worldwide (MIT) and the Unicode CLDR (Unicode License);
see [LICENSE](./LICENSE) and `data/v1/LICENSE.md`.
