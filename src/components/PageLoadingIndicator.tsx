import classNames from "classnames";
import { forwardRef, useEffect, useRef, useState } from "react";
import styles from "./PageLoadingIndicator.module.scss";

type Props = React.HTMLAttributes<HTMLDivElement> & {
	loading?: boolean;
};

const PageLoadingIndicator = forwardRef<HTMLDivElement, Props>(({ className, loading = false, ...props }, ref) => {
	const [done, setDone] = useState(false);
	const previousLoading = useRef(false);

	useEffect(() => {
		const wasPreviouslyLoading = previousLoading.current;
		previousLoading.current = loading;

		if (wasPreviouslyLoading && !loading) setDone(true);
	}, [loading]);

	return (
		<div
			ref={ref}
			aria-hidden={!loading && !done}
			aria-valuetext="Loading page..."
			className={classNames(className, styles.wrapper, loading && styles.loading, done && styles.done)}
			role="progressbar"
			{...props}
		>
			<div className={styles.bar} onAnimationEnd={() => setDone(false)} />
		</div>
	);
});

export default PageLoadingIndicator;
export type { Props as PageLoadingIndicatorProps };
