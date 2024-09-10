import type { Meta, StoryObj } from "@storybook/react";
import BrandLogoStory from "./BrandLogoStory";
import BreakpointsStory from "./BreakpointsStory";
import ColorsStory from "./ColorsStory";
import ResponsiveExampleStory from "./ResponsiveExampleStory";
import SpacingStory from "./SpacingStory";

const BrandLogo: StoryObj = { render: BrandLogoStory };
const Breakpoints: StoryObj = { render: BreakpointsStory };
const Colors: StoryObj = { render: ColorsStory };
const ResponsiveExample: StoryObj = { render: ResponsiveExampleStory };
const Spacing: StoryObj = { render: SpacingStory };

const meta: Meta = {
	title: "Foundations",
};

export default meta;
export { BrandLogo, Breakpoints, Colors, ResponsiveExample, Spacing };
