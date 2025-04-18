// @ts-check
import { defineConfig } from "astro/config";

import robotsTxt from "astro-robots-txt";

import sitemap from "@astrojs/sitemap";

import compressor from "astro-compressor";

// https://astro.build/config
export default defineConfig({
	i18n: {
		defaultLocale: "es",
		locales: ["es", "en"],
		fallback: {
			en: "es",
		},
	},

	site: "https://jackbello.deno.dev",
	base: "/",
	output: "static",
	trailingSlash: "always",
	compressHTML: true,

	vite: {
		server: {
			watch: {
				ignored: ["main.ts"],
			},
		},
		build: {
			rollupOptions: {
				external: ["main.ts"],
			},
		},
	},

	integrations: [
		robotsTxt(),
		sitemap(),
		compressor({ gzip: true, brotli: true }),
	],
});
