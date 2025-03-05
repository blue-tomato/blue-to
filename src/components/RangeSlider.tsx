import classNames from "classnames";
import styles from "./RangeSlider.module.scss";
import { forwardRef, useEffect, useRef, useState, useCallback } from "react";

interface SliderProps extends React.HTMLAttributes<HTMLDivElement> {
  symbol?: string;
  min: number;
  max: number;
  autoFocusOnDesktop?: boolean;
  range?: string;
  tempValue?: number;
}

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

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

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
    const inputMinRef = useRef<HTMLInputElement>(null);
    const inputMaxRef = useRef<HTMLInputElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const thumbLeftRef = useRef<HTMLDivElement>(null);
    const thumbRightRef = useRef<HTMLDivElement>(null);

    const [minValue, setMinValue] = useState(min);
    const [maxValue, setMaxValue] = useState(max);
    const [activeThumb, setActiveThumb] = useState<"left" | "right" | null>(
      null
    );

    useEffect(() => {
      updateThumbs();
    }, [minValue, maxValue]);

    useEffect(() => {
      if (autoFocusOnDesktop && !isTouch) {
        inputRef.current?.focus();
      }
    }, [autoFocusOnDesktop, isTouch]);

    const updateThumbs = useCallback(() => {
      const minPercent = ((minValue - min) / (max - min)) * 100;
      const maxPercent = ((maxValue - min) / (max - min)) * 100;

      if (thumbLeftRef.current) {
        thumbLeftRef.current.style.left = `${minPercent}%`;
      }
      if (thumbRightRef.current) {
        thumbRightRef.current.style.right = `${100 - maxPercent}%`;
      }
      if (trackRef.current) {
        trackRef.current.style.left = `${minPercent}%`;
        trackRef.current.style.right = `${100 - maxPercent}%`;
      }
    }, [minValue, maxValue, min, max]);

    const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setMinValue(clamp(Number(e.target.value), min, maxValue - 1));
    };

    const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setMaxValue(clamp(Number(e.target.value), minValue + 1, max));
    };

    const handleMouseMove = useCallback(
      (e: MouseEvent) => {
        if (!trackRef.current || activeThumb === null) return;

        const rect = trackRef.current.getBoundingClientRect();
        const percent = ((e.clientX - rect.left) / rect.width) * 100;
        const newValue = Math.round((percent / 100) * (max - min) + min);

        if (activeThumb === "left") {
          setMinValue(clamp(newValue, min, maxValue - 1));
        } else {
          setMaxValue(clamp(newValue, minValue + 1, max));
        }
      },
      [activeThumb, min, max, minValue, maxValue]
    );

    useEffect(() => {
      if (activeThumb !== null) {
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", () => setActiveThumb(null), {
          once: true,
        });
      }
      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
      };
    }, [activeThumb, handleMouseMove]);

    return (
      <div
        ref={ref}
        className={classNames(className, styles.wrapper)}
        {...props}
      >
        <div className={styles.inputsContainer}>
          <div className={styles.inputWrapper}>
            <input
              value={minValue}
              className={styles.input}
              onChange={handleMinChange}
            />
            {symbol && <span className={styles.symbol}>{symbol}</span>}
          </div>
          <span>{range}</span>
          <div className={styles.inputWrapper}>
            <input
              value={maxValue}
              className={styles.input}
              onChange={handleMaxChange}
            />
            {symbol && <span className={styles.symbol}>{symbol}</span>}
          </div>
        </div>
        <div className={styles.rangeContainer}>
          <input
            ref={inputMinRef}
            type="range"
            min={min}
            max={max}
            value={minValue}
            onChange={handleMinChange}
            className={styles.rangeInput}
          />
          <input
            ref={inputMaxRef}
            type="range"
            min={min}
            max={max}
            value={maxValue}
            onChange={handleMaxChange}
            className={styles.rangeInput}
          />
          <div className={styles.trackWrapper}>
            <div className={styles.track}></div>
            <div ref={trackRef} className={styles.rangeBetween}></div>
            <div
              ref={thumbLeftRef}
              className={classNames(styles.thumb, styles.thumbLeft)}
              onMouseDown={() => setActiveThumb("left")}
            ></div>
            <div
              ref={thumbRightRef}
              className={classNames(styles.thumb, styles.thumbRight)}
              onMouseDown={() => setActiveThumb("right")}
            ></div>
          </div>
        </div>
        <p className={classNames(className, styles.infoText)}>products count</p>
      </div>
    );
  }
);

export default RangeSlider;
