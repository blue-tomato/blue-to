import { Icon } from "@/components";
import type { Meta } from "@storybook/react";

const Docs: Meta<typeof Icon> = {
	title: "BLUETO/components/Icon",
	component: Icon,
	args: {
		icon: "flag.at",
	},
	argTypes: {
		icon: { control: "text" },
	},
	parameters: {
		links: {
			confluence: "AQBCHg",
			figma: "4BjT8a6YN5icL5bpEfsszx/Foundation?node-id=3-6",
		},
	},
};

const Default: Meta<typeof Icon> = {};

export default Docs;
export { Default };
