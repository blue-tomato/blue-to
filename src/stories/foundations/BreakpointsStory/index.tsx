import classNames from "classnames";
import classes from "./index.module.scss";

const writeMediaQueryToClipboard = (breakpoint: string) =>
	navigator.clipboard.writeText(`@include mediaQuery(${breakpoint}) {}`);

const BreakpointsStory = () => (
	<div className={classes.wrapper}>
		<div className={classes.header}>
			Breakpoints (click to copy a media query)
		</div>

		<button
			className={classNames(classes.breakpoint, classes.breakpointXs)}
			onClick={() => writeMediaQueryToClipboard("xs")}
		>
			<div className={classes.breakpointValue}>xs (&lt; 768px)</div>
		</button>
		<button
			className={classNames(classes.breakpoint, classes.breakpointS)}
			onClick={() => writeMediaQueryToClipboard("s")}
		>
			<div className={classes.breakpointValue}>s (&gt;= 768px)</div>
		</button>
		<button
			className={classNames(classes.breakpoint, classes.breakpointM)}
			onClick={() => writeMediaQueryToClipboard("m")}
		>
			<div className={classes.breakpointValue}>m (&gt;= 1024px)</div>
		</button>
		<button
			className={classNames(classes.breakpoint, classes.breakpointL)}
			onClick={() => writeMediaQueryToClipboard("l")}
		>
			<div className={classes.breakpointValue}>l (&gt;= 1200px)</div>
		</button>
		<button
			className={classNames(classes.breakpoint, classes.breakpointXl)}
			onClick={() => writeMediaQueryToClipboard("xl")}
		>
			<div className={classes.breakpointValue}>xl (&gt;= 1400px)</div>
		</button>
	</div>
);

export default BreakpointsStory;
