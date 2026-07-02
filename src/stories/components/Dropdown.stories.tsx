import { Dropdown } from "@/components";
import type { StoryMeta } from "@/types";
import styles from "./Dropdown.stories.module.scss";

const options = [
	{ label: "Dropdown Text", value: "one" },
	{ label: "Second option", value: "two" },
	{ label: "Third option", value: "three" },
	{ label: "Fourth option", value: "four" },
];

const Docs: StoryMeta<typeof Dropdown> = {
	title: "BLUETO/components/Dropdown",
	component: Dropdown,
	decorators: [
		(Story) => (
			<div className={styles.canvas}>
				<Story />
			</div>
		),
	],
	args: {
		options,
		placeholder: "Dropdown Text",
		color: "default",
		size: "large",
		icon: "functional.sortDefaultBlack",
		disabled: false,
	},
	argTypes: {
		color: { control: "inline-radio", options: ["default", "black", "grey"] },
		size: { control: "inline-radio", options: ["large", "small"] },
		icon: { control: false },
		options: { table: { disable: true } },
	},
	parameters: {
		links: {
			figma: "rUIq4O2W7nCzofq3nFoURP/BLUETO-Components?node-id=2693-130",
		},
	},
};

const Default: StoryMeta<typeof Dropdown> = {};

const Black: StoryMeta<typeof Dropdown> = {
	args: { color: "black" },
};

const Grey: StoryMeta<typeof Dropdown> = {
	args: { color: "grey" },
};

const Small: StoryMeta<typeof Dropdown> = {
	args: { size: "small" },
};

const WithoutIcon: StoryMeta<typeof Dropdown> = {
	args: { icon: undefined },
};

const Preselected: StoryMeta<typeof Dropdown> = {
	args: { defaultValue: "two" },
};

const Disabled: StoryMeta<typeof Dropdown> = {
	args: { disabled: true },
};

export default Docs;
export { Default, Black, Grey, Small, WithoutIcon, Preselected, Disabled };
