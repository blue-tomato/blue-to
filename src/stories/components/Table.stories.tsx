import { Table } from "@/components";
import type { StoryMeta } from "@/types";
import styles from "./Table.stories.module.scss";

const Docs: StoryMeta<typeof Table> = {
	title: "BLUETO/components/Table",
	component: Table,
	args: {
		caption: "Men's Burton Snowboard Jacket Size Chart",
		firstColumnSticky: true,
		header: true,
		rows: [
			["US Size", "XS", "S", "M", "L", "XL", "XXL"],
			["Hip (cm)", "67", "67", "67", "67", "67", "67"],
			["Waist (cm)", "80", "95", "80", "80", "80", "80"],
			["Inseam for products in short version", "77", "77", "77", "77", "77", "77"],
			["Leg length (cm)", "130", "140", "130", "130", "130", "130"],
		],
		scrollText: "Scroll horizontally to see more",
	},
	parameters: {
		links: {
			confluence: "p4BoO",
			figma: "rUIq4O2W7nCzofq3nFoURP/BLUETO-Components?node-id=466-32",
		},
	},
};

const Default: StoryMeta<typeof Table> = {};

const SmallTable: StoryMeta<typeof Table> = {
	render: (props) => (
		<div className={styles.smallTable}>
			<Table {...props} />
		</div>
	),
};

export default Docs;
export { Default, SmallTable };
