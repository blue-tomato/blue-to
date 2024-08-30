import styles from "./index.module.scss";

const ResponsiveExampleStory = () => (
	<div className={styles.wrapper}>
		<div className={styles.header}>Responsive Example</div>

		<div className={styles.subtitle}>Wrap</div>

		<div className={styles.wrap}>
			{Array.from({ length: 10 }).map((_, index) => (
				// biome-ignore lint/suspicious/noArrayIndexKey:
				<div key={index} className={styles.item}>
					Item {index}
				</div>
			))}
		</div>

		<div className={styles.subtitle}>Slider</div>

		<div className={styles.slider}>
			{Array.from({ length: 10 }).map((_, index) => (
				// biome-ignore lint/suspicious/noArrayIndexKey:
				<div key={index} className={styles.item}>
					Item {index}
				</div>
			))}
		</div>
	</div>
);

export default ResponsiveExampleStory;
