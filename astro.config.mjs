import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        ...(import.meta.env.PROD
          ? { "react-dom/server": "react-dom/server.edge" }
          : {}),
      },
    },
  },

  integrations: [react()],

  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
    routing: "manual",
  },

  output: "server",
  adapter: netlify({
    edgeMiddleware: true,
  }),
});
