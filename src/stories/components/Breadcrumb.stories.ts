import { Breadcrumb } from "@/components";
import type { StoryMeta } from "@/types";

const Docs: StoryMeta<typeof Breadcrumb> = {
	title: "BLUETO/components/Breadcrumb",
	component: Breadcrumb,
	args: {
		breadcrumbs: [
			{ href: "https://www.blue-tomato.com/en-AT/men/", text: "Men" },
			{ href: "blue-tomato.com/test", text: "Patagonia" },
			{ href: "blue-tomato.com/test/123", text: "Streetwear" },
			{ href: "blue-tomato.com/test/123/456", text: "T-Shirt" },
			{ href: "blue-tomato.com/test/123/456/789", text: "New" },
		],
	},
	parameters: {
		links: {
			confluence: "GoCQLw",
			figma: "rUIq4O2W7nCzofq3nFoURP/BLUETO-Components?node-id=388-44",
		},
	},
};

const Default: StoryMeta<typeof Breadcrumb> = {};

const Wrapped: StoryMeta<typeof Breadcrumb> = {
	args: {
		breadcrumbs: [
			{ href: "https://www.blue-tomato.com/en-AT/women/", text: "Women" },
			{ href: "blue-tomato.com/test", text: "Patagonia" },
			{ href: "blue-tomato.com/test/1", text: "Snowboard" },
			{ href: "blue-tomato.com/test/123", text: "Snowboard Shop" },
			{ href: "blue-tomato.com/test/123", text: "Snowboard Equipment" },
			{
				href: "blue-tomato.com/test/123/456",
				text: "Avalanche Safety Equipment",
			},
			{
				href: "blue-tomato.com/test/123/456/789",
				text: "Avalanche Transceivers",
			},
			{ href: "blue-tomato.com/test/123/456/789/999", text: "New" },
		],
	},
};

export default Docs;
export { Default, Wrapped };
