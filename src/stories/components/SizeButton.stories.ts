import { SizeButton } from "@/components";
import type { Meta } from "@storybook/react/*";

export default {
	title: "components/SizeButton",
	component: SizeButton,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
};

export const Default: Meta<typeof SizeButton> = {
	args: {
		active: false,
		children: "46",
		disabled: false,
	},
};
