import { TextArea } from "@/components";
import type { StoryMeta } from "@/types";

const Docs: StoryMeta<typeof TextArea> = {
	title: "BLUETO/components/TextInput/TextArea",
	component: TextArea,
	args: {
		error: undefined,
		helperText: "This is a helper text",
		label: "Label",
		optionalText: "(optional)",
		placeholder: "Placeholder",
	},
	argTypes: {
		error: { control: "text" },
	},
	parameters: {
		links: {
			confluence: "jQDiNQ",
			figma: "rUIq4O2W7nCzofq3nFoURP/BLUETO-Components?node-id=826-37",
		},
	},
};

const Default: StoryMeta<typeof TextArea> = {};

const WithError: StoryMeta<typeof TextArea> = {
	args: {
		error: "This is a error text",
	},
};

const WithErrorAndNoText: StoryMeta<typeof TextArea> = {
	args: {
		error: true,
	},
};

export default Docs;
export { Default, WithError, WithErrorAndNoText };
