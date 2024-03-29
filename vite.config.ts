// <reference types="vite/client" />
// <reference types="vitest" />

import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    // Vitest configurations
    globals: true,
    environment: "jsdom",
    include: ["**/*.spec.tsx"],
  },
});
