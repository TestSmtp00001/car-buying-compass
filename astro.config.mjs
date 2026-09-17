import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";

export default defineConfig({
  site: "https://example.com",
  // React is only for opt-in interactive islands (src/components/ui) — no
  // component ships JS unless a page actually hydrates it with client:*.
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
