import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.tsx"],
  format: ["esm", 'cjs'],
  dts: true,
  sourcemap: true,
  clean: true,
  external: ["react", "react-dom"],
  outExtension: ({ format }) => ({ js: format === "esm" ? ".mjs" : ".cjs" })
});
