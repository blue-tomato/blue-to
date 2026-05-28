import { useEffect, useState } from "react";
import { PageLoadingIndicator } from "@/components";
import type { StoryMeta } from "@/types";
import styles from "./PageLoadingIndicator.stories.module.scss";

const Docs: StoryMeta<typeof PageLoadingIndicator> = {
	title: "BLUETO/components/PageLoadingIndicator",
	component: PageLoadingIndicator,
	args: {
		loading: true,
	},
	argTypes: {
		loading: { control: "boolean" },
	},
	parameters: {
		links: {
			confluence: "kQDrOQ",
			figma: "",
		},
	},
};

const Default: StoryMeta<typeof PageLoadingIndicator> = {};

const WithPageContent: StoryMeta<typeof PageLoadingIndicator> = {
	render: (props) => (
		<div className={styles.page}>
			<PageLoadingIndicator {...props} />
			<div className={styles.header}>
				<div className={styles.logo}>BLUE TOMATO</div>
				<div className={styles.nav}>
					<span>Snowboard</span>
					<span>Ski</span>
					<span>Skateboard</span>
				</div>
			</div>
			<div className={styles.content}>
				<h2 className={styles.title}>Product Listing</h2>
				<div className={styles.grid}>
					<div className={styles.placeholder} />
					<div className={styles.placeholder} />
					<div className={styles.placeholder} />
					<div className={styles.placeholder} />
					<div className={styles.placeholder} />
					<div className={styles.placeholder} />
				</div>
			</div>
		</div>
	),
};

const FastPageLoad: StoryMeta<typeof PageLoadingIndicator> = {
	render: () => {
		const [loading, setLoading] = useState(true);

		useEffect(() => {
			const timeout = setTimeout(() => setLoading(false), 800);
			return () => clearTimeout(timeout);
		}, []);

		return (
			<div className={styles.page}>
				<PageLoadingIndicator loading={loading} />
				<div className={styles.header}>
					<div className={styles.logo}>BLUE TOMATO</div>
					<div className={styles.nav}>
						<span>Snowboard</span>
						<span>Ski</span>
						<span>Skateboard</span>
					</div>
				</div>
				<div className={styles.content}>
					<h2 className={styles.title}>Product Listing</h2>
					<div className={styles.grid}>
						<div className={styles.placeholder} />
						<div className={styles.placeholder} />
						<div className={styles.placeholder} />
						<div className={styles.placeholder} />
						<div className={styles.placeholder} />
						<div className={styles.placeholder} />
					</div>
				</div>
			</div>
		);
	},
};

export default Docs;
export { Default, WithPageContent, FastPageLoad };
