import react from "@vitejs/plugin-react";
import { defaultClientConditions, defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  // Relative asset URLs, so the build works under any path (e.g. GitHub Pages /worldwide-address/)
  base: "./",
  resolve: {
    // Monorepo only: resolve the workspace data package to its src/*.ts so no build is needed.
    // Apps installing the package from npm need no resolve config.
    conditions: ["@greycoatresearch/source", ...defaultClientConditions],
  },
});
