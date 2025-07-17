import { useId } from "react";
import { Button, Tooltip } from "@/components";
import type { StoryMeta } from "@/types";
import styles from "./Tooltip.stories.module.scss";

const Docs: StoryMeta<typeof Tooltip> = {
	title: "BLUETO/components/Tooltip",
	render: (props: React.ComponentProps<typeof Tooltip>) => {
		const id = useId().slice(1, -1);

		return (
			<>
				<Button id={id} className={styles.button}>
					Hover me!
				</Button>
				<Tooltip anchorSelect={`#${id}`} {...props} />
			</>
		);
	},
	args: {
		children: "Tooltip",
		variant: "black",
	},
	argTypes: {
		variant: { control: "radio", options: ["black", "yellow"] },
	},
	parameters: {
		links: {
			confluence: "foDDMQ",
			figma: "rUIq4O2W7nCzofq3nFoURP/BLUETO-Components?node-id=466-31",
		},
	},
};

const Default: StoryMeta<typeof Tooltip> = {};

const WithLongText: StoryMeta<typeof Tooltip> = {
	args: {
		children:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	},
};

const Yellow: StoryMeta<typeof Tooltip> = {
	args: {
		variant: "yellow",
	},
};

export default Docs;
export { Default, WithLongText, Yellow };
