import { Icon } from "@/components";
import type { Meta } from "@storybook/react";

export default {
	title: "components/Icon",
	component: Icon,
	args: {
		icon: "flag.at",
	},
};

export const Default: Meta<typeof Icon> = {};
