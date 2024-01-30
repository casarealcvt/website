import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel/serverless";
import { sanityIntegration } from "@sanity/astro";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  site: "https://www.casarealvt.com",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
  integrations: [
    tailwind(),
    sitemap(),
    sanityIntegration({
      projectId: 'yisnxk8n',
      dataset: 'production',
      useCdn: false,
      studioBasePath: "/admin",
    }),
    react(),
  ],
});
