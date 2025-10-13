import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import preload from "vite-plugin-preload";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    preload({
      mode: "preload",
      includeCss: true,
      includeJs: true,
      format: "es",
      shouldPreload: (file) => {
        const path = typeof file === "string" ? file : file?.file;
        if (!path) return false;
        return path.includes("gsap") || path.includes("main");
      },
      generatePreloadManifestJsonPath: "dist/preload-manifest.json",
    }),
  ],
  server: {
    host: true,
    port: 5178,
  },
});
