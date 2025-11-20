import type { StoryMeta } from "@/types";
import BrandlogosStory from "./BrandlogosStory";
import BreakpointsStory from "./BreakpointsStory";
import ColorsStory from "./ColorsStory";
import IconsStory from "./IconsStory";
import ResponsiveExampleStory from "./ResponsiveExampleStory";
import SpacingStory from "./SpacingStory";
import TypographyStory from "./TypographyStory";

const Docs: StoryMeta<typeof BrandlogosStory> = {
	title: "BLUETO/foundations",
	tags: ["!autodocs"],
};

const Brandlogos: StoryMeta<typeof BrandlogosStory> = {
	render: BrandlogosStory,
	parameters: {
		links: {
			confluence: "UAA6Hg",
			figma: "4BjT8a6YN5icL5bpEfsszx/Foundation?node-id=3-2",
		},
	},
};

const Breakpoints: StoryMeta<typeof BreakpointsStory> = {
	render: BreakpointsStory,
	parameters: {
		links: {
			confluence: "nADjH",
		},
	},
};

const Colors: StoryMeta<typeof ColorsStory> = {
	render: ColorsStory,
	parameters: {
		links: {
			confluence: "mwCtGw",
			figma: "4BjT8a6YN5icL5bpEfsszx/Foundation?node-id=3-4",
		},
	},
};

const Icons: StoryMeta<typeof IconsStory> = {
	render: IconsStory,
	parameters: {
		links: {
			confluence: "AQBCHg",
			figma: "4BjT8a6YN5icL5bpEfsszx/Foundation?node-id=3-6",
		},
	},
};

const ResponsiveExample: StoryMeta<typeof ResponsiveExampleStory> = {
	render: ResponsiveExampleStory,
};

const Spacing: StoryMeta<typeof SpacingStory> = {
	render: SpacingStory,
	parameters: {
		links: {
			confluence: "h4CyGw",
			figma: "4BjT8a6YN5icL5bpEfsszx/Foundation?node-id=3-8",
		},
	},
};

const Typography: StoryMeta<typeof TypographyStory> = {
	render: TypographyStory,
	parameters: {
		links: {
			confluence: "1QDnH",
			figma: "4BjT8a6YN5icL5bpEfsszx/Foundation?node-id=3-9",
		},
	},
};

export default Docs;
export { Brandlogos, Breakpoints, Colors, Icons, ResponsiveExample, Spacing, Typography };
