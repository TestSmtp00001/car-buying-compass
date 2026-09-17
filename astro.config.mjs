import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://example.com",
  // React is only for opt-in interactive islands (src/components/ui) — no
  // component ships JS unless a page actually hydrates it with client:*.
  integrations: [react(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
