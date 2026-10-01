# worldwide-address

Address form data for every country, generated from [Shopify/worldwide](https://github.com/Shopify/worldwide)
and published to npm as a static package.

It gives a storefront what it needs to build a shipping address form: per-country field layout,
required fields, zip rules, zones (provinces/states) with the zone codes Shopify APIs accept,
localized zone names and field labels.

**Demo:** <https://greycoatresearch.github.io/worldwide-address/> ([source](packages/example-form))

## Packages

| Package                                                                        | Description                                                                                             |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------- |
| [`packages/worldwide-address-data`](packages/worldwide-address-data)           | Published package: generated data (`data/v1/`), loaders and Zod schemas                                 |
| [`packages/worldwide-address-generator`](packages/worldwide-address-generator) | Private: fetches upstream and generates the data                                                        |
| [`packages/example-form`](packages/example-form)                               | Private: React example of a localized address form (`pnpm --filter @greycoatresearch/example-form dev`) |

The generator imports the schemas from the data package, validates every output file, and writes
to `packages/worldwide-address-data/data/v1/` only if all files pass. The generated data is
committed, so data changes show up as reviewable diffs.

## Development

Requires Node 24 (`.node-version`) and pnpm (version pinned in `packageManager`).
TypeScript runs directly on Node through type stripping; there is no transpile step except the
package build.

```sh
pnpm install

pnpm generate      # fetch the pinned upstream and regenerate data/v1
pnpm test          # schema and data invariant tests
pnpm test:smoke    # pack, install into a temp project, import it
pnpm build         # build the data package to dist/ and the example
pnpm typecheck
pnpm lint
pnpm format
```

### Updating upstream

The upstream commit is pinned in
[`packages/worldwide-address-generator/upstream.sha`](packages/worldwide-address-generator/upstream.sha).
To update, replace it with a newer full commit SHA from Shopify/worldwide, run `pnpm generate`,
review the data diff, and commit both. The checkout is cached in
`packages/worldwide-address-generator/.cache/` (`pnpm generate --force-fetch` to refetch).

Review removed or renamed zone codes carefully: saved addresses and form rules may depend on them.

### CI

[GitHub Actions](.github/workflows/ci.yml) runs format, lint and type checks, regenerates the data
and fails if it differs from the committed data, runs the tests, then installs the packed
tarball on Node 22 and 24.

## License

[MIT](LICENSE). The data is derived from Shopify/worldwide (MIT) and the Unicode CLDR
(Unicode License); the full texts are in
[`packages/worldwide-address-data/data/v1/LICENSE.md`](packages/worldwide-address-data/data/v1/LICENSE.md).
