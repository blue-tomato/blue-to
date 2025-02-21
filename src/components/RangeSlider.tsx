import classNames from "classnames";
import styles from "./RangeSlider.module.scss";
import { forwardRef } from "react";

type Props = React.HTMLAttributes<HTMLDivElement>;

const RangeSlider = forwardRef<HTMLDivElement, Props>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={classNames(className, styles.wrapper)} {...props}>
      <div className={styles.inputsContainer}>
        <div className={styles.inputWrapper}>
          <input defaultValue={"min"} className={styles.input} />
          <span className={styles.text}>NOK</span>
        </div>
        <span>bis</span>
        <div className={styles.inputWrapper}>
          <input defaultValue={"max"} className={styles.input} />
          <span className={styles.text}>NOK</span>
        </div>
      </div>
      <div className={styles.rangeContainer}>
        <input className={styles.rangeInput} max={100} min={0} type="range" />
      </div>
      <p className={classNames(className, styles.infoText)}>products count</p>
    </div>
  )
);

export default RangeSlider;
