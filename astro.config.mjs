// @ts-check
import cloudflare from "@astrojs/cloudflare";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  site: "https://zocorestaurant.es",
  image: {
    service: {
      entrypoint: "astro/assets/services/noop"
    },
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
  experimental: {
    fonts: [{
      provider: fontProviders.google(),
      name: 'Playfair',
      cssVariable: '--font-playfair',
    },
    {
      provider: fontProviders.google(),
      name: 'Nunito Sans',
      cssVariable: '--font-nunito-sans',
    }
  ]
  }
});
