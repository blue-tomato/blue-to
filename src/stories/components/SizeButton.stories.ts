import { SizeButton } from "@/components";
import type { Meta } from "@storybook/react";

export default {
	title: "components/SizeButton",
	component: SizeButton,
	args: {
		active: false,
		children: "46",
		disabled: false,
	},
};

export const Default: Meta<typeof SizeButton> = {};
