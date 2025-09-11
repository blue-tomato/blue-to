import { forwardRef, HTMLAttributes } from "react";
import styles from "./index.module.scss";
import classNames from "classnames";

type Props = HTMLAttributes<HTMLTableCaptionElement>;

const Caption = forwardRef<HTMLTableCaptionElement, Props>(({ className, children, ...props }, ref) => (
  <caption className={classNames(styles.captionWrapper, className)} ref={ref} {...props}>
    <span className={styles.captionText}>
      {children}
    </span>
  </caption>
));

Caption.displayName = "Caption";

export default Caption;