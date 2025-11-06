import { Table } from "@/components";
import type { StoryMeta } from "@/types";
import styles from "./Table.stories.module.scss";

const Docs: StoryMeta<typeof Table> = {
	title: "BLUETO/components/Table",
	component: Table,
	parameters: {
		links: {
			confluence: "p4BoO",
			figma: "rUIq4O2W7nCzofq3nFoURP/BLUETO-Components?node-id=466-32",
		},
	},
};
export default Docs;

const caption = "Größentabelle Herren Burton Snowboardjacke";
const headers = ["US Größe", "XS", "S", "M", "L", "XL", "XXL"];
const rows = [
	["Hüfte (cm)", 67, 67, 67, 67, 67, 67],
	["Taille (cm)", 80, 95, 80, 80, 80, 80],
	["Schrittlänge bei Produkten in Short Ausführung", 77, 77, 77, 77, 77, 77],
	["Beinlänge (cm)", 130, 140, 130, 130, 130, 130],
];

const Default: StoryMeta<typeof Table> = {
	args: {
		caption,
		headers,
		rows,
	},
};

const captionShort = "Snowboardjacke";
const headersShort = ["UK Size", "XS", "S", "M"];
const rowsShort = [
	["Hüfte (cm)", 67, 67, 67],
	["Taille (cm)", 80, 95, 80],
	["Schrittlänge bei Produkten in Short Ausführung", 77, 77, 77],
	["Beinlänge (cm)", 130, 140, 130],
];

const ShmallTable: StoryMeta<typeof Table> = {
	// render: (props) => (
	//   <div className={styles.wrapper}>
	//     <Table {...props} />
	//   </div>
	// ),
	args: {
		caption: captionShort,
		headers: headersShort,
		rows: rowsShort,
	},
};

export { Default };
export { ShmallTable };
