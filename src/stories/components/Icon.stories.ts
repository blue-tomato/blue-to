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
};

const Default: Meta<typeof Icon> = {};

export default Docs;
export { Default };
