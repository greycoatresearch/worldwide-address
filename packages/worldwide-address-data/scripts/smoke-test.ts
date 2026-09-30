/**
 * Packs the package, installs the tarball into a temporary project, and imports it there
 * the way a consumer would. Catches what in-repo tests cannot: missing files, broken exports,
 * and build output that does not run on the supported Node versions.
 *
 * Usage: pnpm test:smoke [path/to/package.tgz]
 * Without a tarball it packs the package first. CI packs once and passes the tarball,
 * so the consumer can run on Node versions the workspace itself does not support.
 */
import { execFileSync } from "node:child_process";
import { mkdtempSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { basename, join, resolve } from "node:path";

const PACKAGE_ROOT = join(import.meta.dirname, "..");

const CONSUMER = `
import assert from "node:assert/strict";
import { countries, loadLabels, loadZoneNames, loadZones, meta } from "@greycoatresearch/worldwide-address-data";
import { CountriesFile } from "@greycoatresearch/worldwide-address-data/schema";

assert.equal(meta.schemaVersion, 1);
assert.ok(CountriesFile.safeParse(countries).success, "countries pass the schema");
assert.equal((await loadZones("KR"))?.length, 17);
assert.deepEqual((await loadZoneNames("ko", "KR"))?.find(([code]) => code === "KR-11"), ["KR-11", "서울특별시"]);
assert.ok((await loadLabels("ko"))?.default, "ko labels");
assert.equal(await loadZones("XX"), undefined);
`;

const work = mkdtempSync(join(tmpdir(), "worldwide-address-smoke-"));
try {
  let tarball = process.argv[2] && resolve(process.argv[2]);
  if (!tarball) {
    execFileSync("pnpm", ["pack", "--pack-destination", work], {
      cwd: PACKAGE_ROOT,
      stdio: "inherit",
    });
    const packed = readdirSync(work).find((f) => f.endsWith(".tgz"));
    if (!packed) throw new Error("pnpm pack produced no tarball");
    tarball = join(work, packed);
  }

  writeFileSync(join(work, "package.json"), JSON.stringify({ private: true, type: "module" }));
  writeFileSync(join(work, "consumer.js"), CONSUMER);
  execFileSync("npm", ["install", "--no-audit", "--no-fund", tarball], {
    cwd: work,
    stdio: "inherit",
  });
  execFileSync("node", ["consumer.js"], { cwd: work, stdio: "inherit" });
  console.log(`[smoke] ${basename(tarball)} OK on Node ${process.version}`);
} finally {
  rmSync(work, { recursive: true, force: true });
}
