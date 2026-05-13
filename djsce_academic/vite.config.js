import tailwindcss from "@tailwindcss/postcss";
import { defineConfig } from "vite";

export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  server: {
    port:5183,
    host: true,
    proxy: {
      "/api": "http://127.0.0.1:8000",
    },
  },
});