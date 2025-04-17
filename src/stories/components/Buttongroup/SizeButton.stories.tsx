import { SizeButton } from "@/components";
import type { StoryMeta } from "@/types";
import styles from "./SizeButton.stories.module.scss";

const Docs: StoryMeta<typeof SizeButton> = {
	title: "BLUETO/components/Buttongroup/SizeButton",
	render: (props) => (
		<div className={styles.wrapper}>
			<SizeButton {...props} />
			<SizeButton {...props} />
		</div>
	),
	args: {
		active: false,
		children: "46",
		disabled: false,
		iconLeft: undefined,
		iconRight: undefined,
	},
	argTypes: {
		iconLeft: { control: "text" },
		iconRight: { control: "text" },
	},
	parameters: {
		links: {
			confluence: "CACDL",
			figma: "rUIq4O2W7nCzofq3nFoURP/BLUETO-Components?node-id=420-52",
		},
	},
};

const Default: StoryMeta<typeof SizeButton> = {};

const WithIconLeft: StoryMeta<typeof SizeButton> = {
	args: {
		iconLeft: "support.bellBlack",
	},
};

const WithIconRight: StoryMeta<typeof SizeButton> = {
	args: {
		iconRight: "support.bellBlack",
	},
};

export default Docs;
export { Default, WithIconLeft, WithIconRight };
