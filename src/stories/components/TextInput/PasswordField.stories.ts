import { PasswordField } from "@/components";
import type { StoryMeta } from "@/types";

const Docs: StoryMeta<typeof PasswordField> = {
	title: "BLUETO/components/TextInput/PasswordField",
	component: PasswordField,
	args: {
		label: "Password*",
		placeholder: "Placeholder",
	},
	parameters: {
		links: {
			confluence: "jQDiNQ",
			figma: "rUIq4O2W7nCzofq3nFoURP/BLUETO-Components?node-id=826-37",
		},
	},
};

const Default: StoryMeta<typeof PasswordField> = {};

export default Docs;
export { Default };
