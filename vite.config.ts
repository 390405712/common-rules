import { defineConfig } from "vite";
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    lib: {
      entry: ['./lib/index.ts', './lib/list.ts'],
      name: 'element-plus-generator',
      formats: ['es'],
      // "commonjs" | "esm" | "module" | "systemjs"
      fileName: (format, entryName) => `${entryName}.js`,
    },
  },
  plugins: [dts()],
});