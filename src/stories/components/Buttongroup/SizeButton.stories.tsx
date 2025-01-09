import { SizeButton } from "@/components";
import type { Meta } from "@storybook/react";
import styles from "./SizeButton.stories.module.scss";

const Docs: Meta<typeof SizeButton> = {
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
	},
	parameters: {
		links: {
			confluence: "CACDL",
			figma: "rUIq4O2W7nCzofq3nFoURP/BLUETO-Components?node-id=420-52",
		},
	},
};

const Default: Meta<typeof SizeButton> = {};

export default Docs;
export { Default };
