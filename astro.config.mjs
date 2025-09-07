// @ts-check
import { defineConfig } from "astro/config";
import partytown from "@astrojs/partytown";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import cloudflare from "@astrojs/cloudflare";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  site: "https://zocorestaurant.es",
  
  image: {
    service: "compile",
  },

  i18n: {
    locales: ["es", "en"],
    defaultLocale: "es",
  },

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        "@/components": path.resolve(__dirname, "src/components"),
        "@/layouts": path.resolve(__dirname, "src/layouts"),
        "@/pages": path.resolve(__dirname, "src/pages"),
        "@/i18n": path.resolve(__dirname, "src/i18n"),
        "@/styles": path.resolve(__dirname, "src/styles"),
      },
    },
  },

  integrations: [
    partytown({ config: { forward: ["dataLayer.push", "gtag"] } }),
    sitemap(),
  ],

  adapter: cloudflare(),
});
