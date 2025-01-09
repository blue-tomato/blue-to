import { RadioButton } from "@/components";
import type { Meta } from "@storybook/react";
import styles from "./RadioButton.stories.module.scss";

const Docs: Meta<typeof RadioButton> = {
	title: "BLUETO/components/RadioButton",
	render: (props: React.ComponentProps<typeof RadioButton>) => (
		<form className={styles.wrapper}>
			<RadioButton
				inputProps={{ name: "radio-button", value: "1" }}
				{...props}
			/>
			<RadioButton
				inputProps={{ name: "radio-button", value: "2" }}
				{...props}
			/>
		</form>
	),
	args: {
		children: "RadioButton",
		error: undefined,
	},
	argTypes: {
		error: { control: "text" },
	},
	parameters: {
		links: {
			confluence: "sAAnL",
			figma: "rUIq4O2W7nCzofq3nFoURP/Components?node-id=167-126",
		},
	},
};

const Default: Meta<typeof RadioButton> = {};

const WithError: Meta<typeof RadioButton> = {
	args: {
		error: "Error",
	},
};

export default Docs;
export { Default, WithError };
