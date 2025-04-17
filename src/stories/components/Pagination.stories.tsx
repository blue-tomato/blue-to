import { Pagination } from "@/components";
import type { StoryMeta } from "@/types";

const Docs: StoryMeta<typeof Pagination> = {
	title: "BLUETO/components/Pagination",
	component: Pagination,
	args: {
		disableNextButton: false,
		disablePreviousButton: true,
		infoText: "Showing 20 of 353 items",
		mainText: "Page 1 of 18",
		progressBar: 0.06,
	},
	parameters: {
		links: {
			confluence: "iwCMLw",
			figma: "rUIq4O2W7nCzofq3nFoURP/BLUETO-Components?node-id=424-89",
		},
	},
};

const Default: StoryMeta<typeof Pagination> = {};

const Minimum: StoryMeta<typeof Pagination> = {
	args: {
		infoText: undefined,
		progressBar: undefined,
	},
};

export default Docs;
export { Default, Minimum };
