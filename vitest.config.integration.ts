import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  test: {
    include: ["tests/**/*.spec.ts"],
    setupFiles: ["tests/integration.setup.ts"],
    threads: false,
  },
  plugins: [tsconfigPaths()],
});
