import classNames from "classnames";
import { forwardRef, type HTMLAttributes } from "react";
import styles from "./Caption.module.scss";

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

export default Caption;
