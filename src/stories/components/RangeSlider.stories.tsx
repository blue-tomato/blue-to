import { RangeSlider } from "@/components";
import type { StoryMeta } from "@/types";

const Docs: StoryMeta<typeof RangeSlider> = {
	title: "BLUETO/components/RangeSlider",
	component: RangeSlider,
	args: {
		count: 230,
		handleCountUpdate: () => 160,
		max: 200,
		min: 10,
		placeholderMax: "max",
		placeholderMin: "min",
		range: "to",
		symbol: "€",
	},
	parameters: {
		links: {
			confluence: "ioAwL",
			figma: "rUIq4O2W7nCzofq3nFoURP/BLUETO-Components?node-id=167-127",
		},
	},
};

const Default: StoryMeta<typeof RangeSlider> = {};

const Empty: StoryMeta<typeof RangeSlider> = {
	args: {
		count: undefined,
		handleCountUpdate: undefined,
		max: undefined,
		min: undefined,
		symbol: undefined,
	},
};

export default Docs;
export { Default, Empty };
