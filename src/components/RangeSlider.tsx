import classNames from "classnames";
import styles from "./RangeSlider.module.scss";
import { forwardRef, useEffect, useRef, useState } from "react";

interface SliderProps extends React.HTMLAttributes<HTMLDivElement> {
  symbol?: string;
  min: number;
  max: number;
  autoFocusOnDesktop?: boolean;
  range?: string;
  tempValue?: number;
}

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

const InputWrapper = ({ symbol, value, min, max, defaultValue }: any) => {
  const inputValue = value ?? "";
  const [tempValue, setTempValue] = useState(+inputValue);
  const [isControlled, setIsControlled] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);

  const onInputChange: (newValue: number) => void = (newValue: number) => {
    console.log(newValue);
    setTempValue(newValue);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value.replace(/\D+/g, ""));
    setTempValue(newValue);
  };

  const handleFocus = () => {
    setIsControlled(false);
    setTempValue(value ?? defaultValue);
  };

  const handleBlur = () => {
    setIsControlled(true);
    onInputChange(tempValue);
    console.log(tempValue);
  };

  return (
    <div
      className={styles.inputWrapper}
      onClick={() => inputRef.current?.focus()}
    >
      <input
        ref={inputRef}
        className={styles.input}
        onBlur={handleBlur}
        onChange={handleChange}
        onFocus={handleFocus}
        pattern="[0-9]*"
        value={isControlled ? value : tempValue || ""}
      />
      {symbol && <span className={styles.symbol}>{symbol}</span>}
    </div>
  );
};

const RangeSlider = forwardRef<HTMLDivElement, SliderProps>(
  (
    {
      className,
      symbol = "€",
      max = 200,
      min = 6,
      range = "bis",
      autoFocusOnDesktop,
      tempValue,
      ...props
    },
    ref
  ) => {
    const isTouch = "ontouchstart" in window;
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
      if (autoFocusOnDesktop && !isTouch) {
        inputRef.current?.focus();
      }
    }, [autoFocusOnDesktop, isTouch]);

    return (
      <div
        ref={ref}
        className={classNames(className, styles.wrapper)}
        {...props}
      >
        <div className={styles.inputsContainer}>
          <InputWrapper
            symbol={symbol}
            value={min}
            validRange={[min, max - 1]}
          />
          <span>{range ?? ""}</span>
          <InputWrapper
            symbol={symbol}
            value={max}
            validRange={[min + 1, max]}
          />
        </div>
        <div className={styles.rangeContainer}>
          <input
            className={styles.rangeInput}
            type="range"
            value={min}
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
        </div>
        <p className={classNames(className, styles.infoText)}>products count</p>
      </div>
    );
  }
);

export default RangeSlider;
