import type { Meta, StoryObj } from "@storybook/react";
import BrandlogosStory from "./BrandlogosStory";
import BreakpointsStory from "./BreakpointsStory";
import ColorsStory from "./ColorsStory";
import ResponsiveExampleStory from "./ResponsiveExampleStory";
import SpacingStory from "./SpacingStory";
import TypographyStory from "./TypographyStory";

const BrandLogo: StoryObj = { render: BrandlogosStory };
const Breakpoints: StoryObj = { render: BreakpointsStory };
const Colors: StoryObj = { render: ColorsStory };
const ResponsiveExample: StoryObj = { render: ResponsiveExampleStory };
const Spacing: StoryObj = { render: SpacingStory };
const Typography: StoryObj = { render: TypographyStory };

const meta: Meta = {
	title: "Foundations",
};

export default meta;
export {
	BrandLogo,
	Breakpoints,
	Colors,
	ResponsiveExample,
	Spacing,
	Typography,
};
