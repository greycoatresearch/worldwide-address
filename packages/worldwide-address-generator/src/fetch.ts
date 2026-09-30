import { execFileSync } from "node:child_process";
import { existsSync, readFileSync, rmSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const REPO_URL = "https://github.com/Shopify/worldwide.git";

const SPARSE_PATTERNS = ["/LICENSE.md", "/data/regions/", "/data/cldr/locales/*/subdivisions.yml"];

const PACKAGE_ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
export const UPSTREAM_DIR = join(PACKAGE_ROOT, ".cache", "worldwide");
const SHA_FILE = join(PACKAGE_ROOT, "upstream.sha");

export function readPinnedSha(): string {
  const sha = readFileSync(SHA_FILE, "utf8").trim();
  if (!/^[0-9a-f]{40}$/.test(sha)) {
    throw new Error(`upstream.sha must contain a full 40-char commit SHA, got: "${sha}"`);
  }
  return sha;
}

function git(args: string[], cwd?: string): string {
  return execFileSync("git", args, {
    cwd,
    encoding: "utf8",
    stdio: ["ignore", "pipe", "inherit"],
  }).trim();
}

function currentSha(): string | null {
  if (!existsSync(join(UPSTREAM_DIR, ".git"))) return null;
  try {
    return git(["rev-parse", "HEAD"], UPSTREAM_DIR);
  } catch {
    return null;
  }
}

function sparsePatternsMatch(): boolean {
  try {
    const current = git(["sparse-checkout", "list"], UPSTREAM_DIR).split("\n").filter(Boolean);
    return (
      current.length === SPARSE_PATTERNS.length && SPARSE_PATTERNS.every((p) => current.includes(p))
    );
  } catch {
    return false;
  }
}

/** Checks out upstream at the pinned SHA and returns the checkout path. */
export function fetchUpstream({ force = false } = {}): string {
  const sha = readPinnedSha();

  if (!force && currentSha() === sha && sparsePatternsMatch()) {
    console.log(`[fetch] up to date (${sha.slice(0, 12)})`);
    return UPSTREAM_DIR;
  }

  console.log(`[fetch] checking out Shopify/worldwide@${sha.slice(0, 12)}`);
  rmSync(UPSTREAM_DIR, { recursive: true, force: true });
  mkdirSync(dirname(UPSTREAM_DIR), { recursive: true });

  // blob:none fetches commits and trees only; checkout downloads just the blobs it needs
  git(["clone", "--quiet", "--filter=blob:none", "--no-checkout", REPO_URL, UPSTREAM_DIR]);
  git(["sparse-checkout", "set", "--no-cone", ...SPARSE_PATTERNS], UPSTREAM_DIR);
  git(["checkout", "--quiet", "--detach", sha], UPSTREAM_DIR);

  if (currentSha() !== sha) {
    throw new Error(`checkout failed: expected ${sha}, got ${currentSha()}`);
  }
  console.log(`[fetch] done → ${UPSTREAM_DIR}`);
  return UPSTREAM_DIR;
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  fetchUpstream({ force: process.argv.includes("--force") });
}
