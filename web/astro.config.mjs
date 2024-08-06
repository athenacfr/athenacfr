import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://athenacfr.github.io",
  redirects: {
    "/": "/en",
  },
});
