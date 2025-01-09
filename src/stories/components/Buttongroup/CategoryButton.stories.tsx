import { CategoryButton } from "@/components";
import type { Meta } from "@storybook/react";
import styles from "./CategoryButton.stories.module.scss";

const Docs: Meta<typeof CategoryButton> = {
	title: "BLUETO/components/Buttongroup/CategoryButton",
	render: (props) => (
		<div className={styles.wrapper}>
			<CategoryButton {...props} />
			<CategoryButton {...props} />
		</div>
	),
	args: {
		active: false,
		children: "CategoryButton",
		color: "white",
		size: "large",
	},
	parameters: {
		links: {
			confluence: "B4B6L",
			figma: "rUIq4O2W7nCzofq3nFoURP/BLUETO-Components?node-id=420-52",
		},
	},
};

const Default: Meta<typeof CategoryButton> = {};

export default Docs;
export { Default };
