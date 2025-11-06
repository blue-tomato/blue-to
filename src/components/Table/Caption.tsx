import classNames from "classnames";
import { forwardRef, type HTMLAttributes } from "react";
import styles from "./index.module.scss";

type Props = HTMLAttributes<HTMLTableCaptionElement>;

const Caption = forwardRef<HTMLTableCaptionElement, Props>(
	({ className, children, ...props }, ref) => (
		<caption
			className={classNames(styles.captionWrapper, className)}
			ref={ref}
			{...props}
		>
			<span className={styles.captionText}>{children}</span>
		</caption>
	),
);

Caption.displayName = "Caption";

export default Caption;
