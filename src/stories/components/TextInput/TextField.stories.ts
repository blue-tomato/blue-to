import { TextField } from "@/components";
import type { StoryMeta } from "@/types";

const Docs: StoryMeta<typeof TextField> = {
	title: "BLUETO/components/TextInput/TextField",
	component: TextField,
	args: {
		label: "Label",
		optionalText: "(optional)",
		placeholder: "Placeholder",
	},
	parameters: {
		links: {
			confluence: "jQDiNQ",
			figma: "rUIq4O2W7nCzofq3nFoURP/BLUETO-Components?node-id=826-37",
		},
	},
};

const Default: StoryMeta<typeof TextField> = {};

export default Docs;
export { Default };
