import styles from "./index.module.scss";

const sizes = ["10", "12", "14", "16", "20", "24", "32", "40", "60"];

const writeIncludeToClipboard = (name: string) => {
	navigator.clipboard.writeText(`@include font-${name};`);
	alert(`Copied @include font-${name}; to clipboard!`);
};

const TypographyStory = () => (
	<div className={styles.wrapper}>
		<div className={styles.header}>Typography (click to copy)</div>

		{sizes.map((size) => (
			<div key={size} className={styles.fontsWrapper}>
				<button
					className={styles.fontButton}
					onClick={() => writeIncludeToClipboard(size)}
				>
					<div className={styles.subtitle}>Font {size}</div>
					<div className={styles[`font${size}`]}>
						The quick brown fox jumps over the lazy dog.
					</div>
				</button>
				<button
					className={styles.fontButton}
					onClick={() => writeIncludeToClipboard(`${size}-sb`)}
				>
					<div className={styles.subtitle}>Font {size} semibold</div>
					<div className={styles[`font${size}Sb`]}>
						The quick brown fox jumps over the lazy dog.
					</div>
				</button>
				<button
					className={styles.fontButton}
					onClick={() => writeIncludeToClipboard(`${size}-b`)}
				>
					<div className={styles.subtitle}>Font {size} bold</div>
					<div className={styles[`font${size}B`]}>
						The quick brown fox jumps over the lazy dog.
					</div>
				</button>
				<button
					className={styles.fontButton}
					onClick={() => writeIncludeToClipboard(`${size}-eb`)}
				>
					<div className={styles.subtitle}>Font {size} extrabold</div>
					<div className={styles[`font${size}Eb`]}>
						The quick brown fox jumps over the lazy dog.
					</div>
				</button>
			</div>
		))}
	</div>
);

export default TypographyStory;
