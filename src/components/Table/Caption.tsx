import classNames from "classnames";
import { forwardRef } from "react";
import styles from "./Caption.module.scss";

type Props = React.HTMLAttributes<HTMLTableCaptionElement>;

const Caption = forwardRef<HTMLTableCaptionElement, Props>(({ className, children, ...props }, ref) => (
	<caption className={classNames(styles.wrapper, className)} ref={ref} {...props}>
		<div className={styles.text}>{children}</div>
	</caption>
));

export default Caption;
