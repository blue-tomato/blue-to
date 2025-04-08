import { Pagination } from "@/components";
import type { StoryMeta } from "@/types";
import styles from "./Pagination.stories.module.scss";

const Docs: StoryMeta<typeof Pagination> = {
	title: "BLUETO/components/Pagination",
	component: Pagination,
	args: {
		totalItemsCount: 20,
		itemsCountPerPage: 8,
	},
	parameters: {
		links: {
			confluence: "iwCMLw",
			figma: "rUIq4O2W7nCzofq3nFoURP/BLUETO-Components?node-id=424-89",
		},
	},
};

const Default: StoryMeta<typeof Pagination> = {
	render: (props) => (
		<div className={styles.wrapper}>
			<Pagination {...props}></Pagination>
		</div>
	),
};

const Extended: StoryMeta<typeof Pagination> = {
	args: {
		totalItemsCount: 379,
		itemsCountPerPage: 20,
		shouldShowInfoText: true,
		shouldShowProgressBar: true,
	},
	render: (props) => (
		<div className={styles.wrapper}>
			<Pagination {...props}></Pagination>
		</div>
	),
};

export default Docs;
export { Default, Extended };
