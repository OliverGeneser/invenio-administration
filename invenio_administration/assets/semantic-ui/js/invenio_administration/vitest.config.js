import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Vite 8 (Oxc) only parses JSX in .jsx/.tsx files by default
  oxc: {
    include: /\.[jt]sx?$/,
    exclude: /node_modules/,
    lang: "jsx",
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./setupTests.js",
  },
});
