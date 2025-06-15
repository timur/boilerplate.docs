import { defineConfig } from "vitepress";

export default defineConfig({
	title: "Rails Boilerplate",
	description: "object oriented view components in Ruby.",
	sitemap: { hostname: "https://www.phlex.fun" },
	lastUpdated: true,
	themeConfig: {
		search: {
			provider: "local",
		},

		editLink: {
			pattern: "https://github.com/timur/boilerplate.docs/edit/main/:path",
		},

		nav: [
			{ text: "Home", link: "/" },
			{ text: "Docs", link: "/introduction" },
		],

		sidebar: [
			{
				text: "Introduction",
				collapsed: false,
				items: [{ text: "Overview", link: "/introduction/" }],
			},
			{
				text: "CSS",
				collapsed: false,
				items: [
					{ text: "Allgemein", link: "/css/csszero" },
					{ text: "Farben", link: "/css/colors" },
				],
			},
			{
				text: "Components",
				collapsed: false,
				items: [
					{ text: "Rendering", link: "/components/rendering" },
					{ text: "Yielding", link: "/components/yielding" },
					{ text: "Kits", link: "/components/kits" },
					{ text: "Caching", link: "/components/caching" },
					{ text: "Fragments", link: "/components/fragments" },
					{ text: "Streaming", link: "/components/streaming" },
					{ text: "Snippets", link: "/components/snippets" },
					{ text: "Testing", link: "/components/testing" },
				],
			},
		],

		footer: {
			copyright: "Made by Timur Yalcin",
		},
	},
});
