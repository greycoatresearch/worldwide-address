import react from "@vitejs/plugin-react";
import { defaultClientConditions, defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    // Monorepo only: resolve the workspace data package to its src/*.ts so no build is needed.
    // Apps installing the package from npm need no resolve config.
    conditions: ["@greycoatresearch/source", ...defaultClientConditions],
  },
});
