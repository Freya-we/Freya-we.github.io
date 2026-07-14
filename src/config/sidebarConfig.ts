import type { SidebarLayoutConfig } from "../types/config";

export const sidebarLayoutConfig: SidebarLayoutConfig = {
	properties: [
		{
			type: "profile",
			position: "top",
			class: "onload-animation",
			animationDelay: 0,
		},
		{
			type: "categories",
			position: "sticky",
			class: "onload-animation",
			animationDelay: 100,
			responsive: { collapseThreshold: 5 },
		},
		{
			type: "tags",
			position: "top",
			class: "onload-animation",
			animationDelay: 150,
			responsive: { collapseThreshold: 20 },
		},
		{
			type: "card-toc",
			position: "sticky",
			class: "onload-animation",
			animationDelay: 200,
		},
		{
			type: "site-stats",
			position: "top",
			class: "onload-animation",
			animationDelay: 100,
		},
	],
	components: {
		left: ["profile", "categories", "tags", "card-toc"],
		right: ["site-stats"],
		drawer: ["profile", "categories", "tags"],
	},
	defaultAnimation: {
		enable: true,
		baseDelay: 0,
		increment: 50,
	},
	responsive: {
		breakpoints: {
			mobile: 768,
			tablet: 1280,
			desktop: 1280,
		},
	},
};
