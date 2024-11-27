import { Checkbox } from "@/components";
import type { Meta } from "@storybook/react";

export default {
	title: "components/Checkbox",
	component: Checkbox,
	args: {
		children: "Checkbox",
		error: "",
	},
};

export const Default: Meta<typeof Checkbox> = {};

export const WithError: Meta<typeof Checkbox> = {
	args: {
		error: "Error",
	},
};
