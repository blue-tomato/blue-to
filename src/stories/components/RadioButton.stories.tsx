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
};

const Default: Meta<typeof RadioButton> = {};

const WithError: Meta<typeof RadioButton> = {
	args: {
		error: "Error",
	},
};

export default Docs;
export { Default, WithError };
