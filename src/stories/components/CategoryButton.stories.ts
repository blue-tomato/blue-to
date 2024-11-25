import { CategoryButton } from "@/components";
import type { Meta } from "@storybook/react/*";

export default {
	title: "components/CategoryButton",
	component: CategoryButton,
	args: {
		active: false,
		children: "CategoryButton",
		color: "white",
		size: "large",
	},
};

export const Default: Meta<typeof CategoryButton> = {};
