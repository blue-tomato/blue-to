import { Button } from "@/components";
import type { StoryMeta } from "@/types";
import styles from "./Button.stories.module.scss";

const Docs: StoryMeta<typeof Button> = {
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
	parameters: {
		links: {
			confluence: "3ArPKQ",
			figma: "rUIq4O2W7nCzofq3nFoURP/BLUETO-Components?node-id=19-2",
		},
	},
};

const Default: StoryMeta<typeof Button> = {};

const WithIcon: StoryMeta<typeof Button> = {
	args: {
		icon: "flag.at",
	},
};

const WithLongText: StoryMeta<typeof Button> = {
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
