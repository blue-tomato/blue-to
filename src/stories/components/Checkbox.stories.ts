import { Checkbox } from "@/components";
import type { StoryMeta } from "@/types";

const Docs: StoryMeta<typeof Checkbox> = {
	title: "BLUETO/components/Checkbox",
	component: Checkbox,
	args: {
		children: "Checkbox",
		error: undefined,
	},
	argTypes: {
		error: { control: "text" },
	},
	parameters: {
		links: {
			confluence: "NwA0L",
			figma: "rUIq4O2W7nCzofq3nFoURP/BLUETO-Components?node-id=167-125",
		},
	},
};

const Default: StoryMeta<typeof Checkbox> = {};

const WithError: StoryMeta<typeof Checkbox> = {
	args: {
		error: "Error",
	},
};

export default Docs;
export { Default, WithError };
