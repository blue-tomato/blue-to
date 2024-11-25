import { Button } from "@/components";
import type { Meta } from "@storybook/react/*";

export default {
	title: "components/Button",
	component: Button,
	args: {
		children: "Button",
		disabled: false,
		icon: undefined,
		loading: false,
		variant: "primary",
	},
};

export const Default: Meta<typeof Button> = {};

export const WithIcon: Meta<typeof Button> = {
	args: {
		icon: "flag.at",
	},
};
