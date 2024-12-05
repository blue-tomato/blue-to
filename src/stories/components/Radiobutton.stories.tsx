import { RadioButton } from "@/components";
import type { Meta } from "@storybook/react";

export default {
	title: "components/RadioButton",
	component: (props: React.ComponentProps<typeof RadioButton>) => (
		<form>
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

export const Default: Meta<typeof RadioButton> = {};

export const WithError: Meta<typeof RadioButton> = {
	args: {
		error: "Error",
	},
};
