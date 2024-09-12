import { Button } from "@/components";
import type { Meta } from "@storybook/react/*";

export default {
	title: "components/Button",
	component: Button,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
};

export const Default: Meta = {
	args: {
		primary: false,
		children: "Button",
	},
};
