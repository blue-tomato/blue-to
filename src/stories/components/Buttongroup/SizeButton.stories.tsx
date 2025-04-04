import { SizeButton } from "@/components";
import type { StoryMeta } from "@/types";
import styles from "./SizeButton.stories.module.scss";

const Docs: StoryMeta<typeof SizeButton> = {
	title: "BLUETO/components/Buttongroup/SizeButton",
	render: (props) => (
		<div className={styles.wrapper}>
			<SizeButton {...props} />
			<SizeButton {...props} />
			<SizeButton  {...props} />

		</div>
	),
	args: {
		active: false,
		children: "46",
		disabled: false,
	},
	parameters: {
		links: {
			confluence: "CACDL",
			figma: "rUIq4O2W7nCzofq3nFoURP/BLUETO-Components?node-id=420-52",
		},
	},
};

const Default: StoryMeta<typeof SizeButton> = {};

const WithIconRight: StoryMeta<typeof SizeButton> = {
  args: {
    withIconRight: true,
  },
};

const WithIconLeft: StoryMeta<typeof SizeButton> = {
  args: {
    WithIconLeft: true,
  },
};
export default Docs;
export { Default , WithIconRight, WithIconLeft};
