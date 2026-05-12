import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "node:path";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/test/setup.ts",
    include: [
      "content/**/*.test.ts", // ← 同時跑 content/ 的測試
      "src/**/*.test.{ts,tsx}",
    ],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@content": path.resolve(__dirname, "content"),
    },
  },
});
