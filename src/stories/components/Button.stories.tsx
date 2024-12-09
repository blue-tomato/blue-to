import { Button } from "@/components";
import type { Meta } from "@storybook/react";
import styles from "./Button.stories.module.scss";

const Docs: Meta<typeof Button> = {
	title: "BLUETO/components/Button",
	component: Button,
	args: {
		children: "Button",
		disabled: false,
		icon: undefined,
		loading: false,
		variant: "primary",
	},
	argTypes: {
		icon: { control: "text" },
	},
};

const Default: Meta<typeof Button> = {};

const WithIcon: Meta<typeof Button> = {
	args: {
		icon: "flag.at",
	},
};

const WithLongText: Meta<typeof Button> = {
	render: (props) => (
		<div className={styles.longText}>
			<Button {...props} />
		</div>
	),
	args: {
		children: "Button long text",
	},
};

export default Docs;
export { Default, WithIcon, WithLongText };
