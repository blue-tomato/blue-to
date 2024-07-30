import type { Meta, StoryObj } from "@storybook/react";
import BreakpointsStory from "./BreakpointsStory";
import ColorsStory from "./ColorsStory";

const Breakpoints: StoryObj = { render: BreakpointsStory };
const Colors: StoryObj = { render: ColorsStory };

const meta: Meta = {
	title: "Foundations",
};

export default meta;
export { Breakpoints, Colors };
