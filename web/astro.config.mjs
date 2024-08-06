import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://athenacfr.github.io",
  base: "athenacfr",
  redirects: {
    "/": "/athenacfr/en",
  },
});
