import classNames from "classnames";
import styles from "./index.module.scss";

const writeMediaQueryToClipboard = (breakpoint: string) =>
	navigator.clipboard.writeText(`@include mediaQuery(${breakpoint}) {}`);

const BreakpointsStory = () => (
	<div className={styles.wrapper}>
		<div className={styles.header}>Breakpoints (click to copy)</div>

		<button
			className={classNames(styles.breakpoint, styles.breakpointXs)}
			onClick={() => writeMediaQueryToClipboard("xs")}
		>
			<div className={styles.breakpointValue}>xs (&lt; 768px)</div>
		</button>
		<button
			className={classNames(styles.breakpoint, styles.breakpointS)}
			onClick={() => writeMediaQueryToClipboard("s")}
		>
			<div className={styles.breakpointValue}>s (&gt;= 768px)</div>
		</button>
		<button
			className={classNames(styles.breakpoint, styles.breakpointM)}
			onClick={() => writeMediaQueryToClipboard("m")}
		>
			<div className={styles.breakpointValue}>m (&gt;= 1024px)</div>
		</button>
		<button
			className={classNames(styles.breakpoint, styles.breakpointL)}
			onClick={() => writeMediaQueryToClipboard("l")}
		>
			<div className={styles.breakpointValue}>l (&gt;= 1200px)</div>
		</button>
		<button
			className={classNames(styles.breakpoint, styles.breakpointXl)}
			onClick={() => writeMediaQueryToClipboard("xl")}
		>
			<div className={styles.breakpointValue}>xl (&gt;= 1400px)</div>
		</button>
	</div>
);

export default BreakpointsStory;
