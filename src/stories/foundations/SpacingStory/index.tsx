import styles from "./index.module.scss";

const spaces = [4, 8, 16, 24, 32, 40, 48, 64];

const ColorsStory = () => (
	<div className={styles.wrapper}>
		<div className={styles.header}>Spacing (click to copy)</div>

		{spaces.map((space) => (
			<button
				key={space}
				className={styles.button}
				onClick={() => navigator.clipboard.writeText(`$space-${space}`)}
			>
				<div className={styles.breakpointValue}>$space-{space}</div>
				<div style={{ width: `${space}px` }} className={styles.box} />
			</button>
		))}
	</div>
);

export default ColorsStory;
