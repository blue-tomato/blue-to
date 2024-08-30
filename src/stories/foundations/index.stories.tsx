import type { Meta, StoryObj } from "@storybook/react";
import BreakpointsStory from "./BreakpointsStory";
import ColorsStory from "./ColorsStory";
import ResponsiveExampleStory from "./ResponsiveExampleStory";
import SpacingStory from "./SpacingStory";

const Breakpoints: StoryObj = { render: BreakpointsStory };
const Colors: StoryObj = { render: ColorsStory };
const ResponsiveExample: StoryObj = { render: ResponsiveExampleStory };
const Spacing: StoryObj = { render: SpacingStory };

const meta: Meta = {
	title: "Foundations",
};

export default meta;
export { Breakpoints, Colors, ResponsiveExample, Spacing };
