import { forwardRef, HTMLAttributes } from "react";
import styles from "./index.module.scss";
import classNames from "classnames";

type Props = HTMLAttributes<HTMLTableCaptionElement> & { testid?: string };

const Caption = forwardRef<HTMLTableCaptionElement, Props>(({ className, children, testid, ...props }, ref) => (
  <caption className={classNames(styles.captionWrapper, className)} ref={ref} {...props}>
    <span data-testid={testid} className={styles.captionText}>
      {children}
    </span>
  </caption>
));

Caption.displayName = "Caption";

export default Caption;