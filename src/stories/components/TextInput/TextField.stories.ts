import { TextField } from "@/components";
import type { StoryMeta } from "@/types";

const Docs: StoryMeta<typeof TextField> = {
	title: "BLUETO/components/TextInput/TextField",
	component: TextField,
	args: {
		error: {
			enable: false,
			text: "This is a error text",
		},
		helperText: "This is a helper text",
		label: "Label",
		optionalText: "(optional)",
		placeholder: "Placeholder",
		tooltip: "Tooltip",
	},
	argTypes: {
		slots: { table: { disable: true } },
	},
	parameters: {
		links: {
			confluence: "jQDiNQ",
			figma: "rUIq4O2W7nCzofq3nFoURP/BLUETO-Components?node-id=826-37",
		},
	},
};

const Default: StoryMeta<typeof TextField> = {};

const WithError: StoryMeta<typeof TextField> = {
	args: {
		error: {
			enable: true,
			text: "This is a error text",
		},
	},
};

export default Docs;
export { Default, WithError };
