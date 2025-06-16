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
				items: [{ text: "Flash", link: "/components/flash" }],
			},
			{
				text: "Claude",
				collapsed: false,
				items: [
					{ text: "Calendar", link: "/claude/calendar" },
					{ text: "Month Calendar", link: "/claude/monthcalendar" },
				],
			},
			{
				text: "Help",
				collapsed: false,
				items: [{ text: "Markdown", link: "/help/markdown" }],
			},
		],

		footer: {
			copyright: "Made by Timur Yalcin",
		},
	},
});
