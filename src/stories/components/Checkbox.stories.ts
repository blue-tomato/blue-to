import { Checkbox } from "@/components";
import type { Meta } from "@storybook/react";

const Docs: Meta<typeof Checkbox> = {
	title: "BLUETO/components/Checkbox",
	component: Checkbox,
	args: {
		children: "Checkbox",
		error: undefined,
	},
	argTypes: {
		error: { control: "text" },
	},
};

const Default: Meta<typeof Checkbox> = {};

const WithError: Meta<typeof Checkbox> = {
	args: {
		error: "Error",
	},
};

export default Docs;
export { Default, WithError };
