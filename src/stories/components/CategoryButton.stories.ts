import { CategoryButton } from "@/components";
import type { Meta } from "@storybook/react/*";

export default {
	title: "components/CategoryButton",
	component: CategoryButton,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
};

export const Default: Meta<typeof CategoryButton> = {
	args: {
		active: false,
		children: "CategoryButton",
		color: "white",
		size: "large",
	},
};
