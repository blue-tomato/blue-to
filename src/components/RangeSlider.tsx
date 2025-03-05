import classNames from "classnames";
import styles from "./RangeSlider.module.scss";
import { forwardRef, useEffect, useRef, useState, useCallback } from "react";

interface SliderProps extends React.HTMLAttributes<HTMLDivElement> {
  symbol?: string;
  min: number;
  max: number;
  autoFocusOnDesktop?: boolean;
  range?: string;
  placeholderMin?: string;
  placeholderMax?: string;
  tempValue?: number;
}

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

const InputWrapper = ({
  symbol,
  value,
  min,
  max,
  defaultValue,
  placeholder,
  onBlur,
}: any) => {
  const inputValue = value ?? "";
  const [tempValue, setTempValue] = useState(+inputValue);
  const [isControlled, setIsControlled] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);

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
    const clampedValue = clamp(tempValue, min, max);
    setTempValue(clampedValue);
    onBlur(clampedValue);
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
        placeholder={placeholder}
      />
      {!!symbol && tempValue > 0 ? (
        <span className={styles.symbol}>{symbol ?? ""}</span>
      ) : null}
    </div>
  );
};

const RangeSlider = forwardRef<HTMLDivElement, SliderProps>(
  (
    {
      autoFocusOnDesktop,
      className,
      max = 200,
      min = 6,
      placeholderMin = "min",
      placeholderMax = "max",
      range = "bis",
      symbol = "€",
      tempValue,
      ...props
    },
    ref
  ) => {
    const isTouch = "ontouchstart" in window;
    const inputRef = useRef<HTMLInputElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const thumbLeftRef = useRef<HTMLDivElement>(null);
    const thumbRightRef = useRef<HTMLDivElement>(null);

    const [minValue, setMinValue] = useState(min);
    const [maxValue, setMaxValue] = useState(max);
    const [activeThumb, setActiveThumb] = useState<"left" | "right" | null>(
      null
    );

    const minDistance = 10; // Minimum distance between the two thumbs

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
      const newValue = clamp(Number(e.target.value), min, maxValue - 1);
      setMinValue(newValue);
    };

    const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = clamp(Number(e.target.value), minValue + 1, max);
      setMaxValue(newValue);
    };

    const handleMouseMove = useCallback(
      (e: MouseEvent) => {
        if (!trackRef.current || activeThumb === null) return;

        const rect = trackRef.current.getBoundingClientRect();
        const percent = ((e.clientX - rect.left) / rect.width) * 100;
        const newValue = Math.round((percent / 100) * (max - min) + min);

        if (activeThumb === "left") {
          setMinValue(clamp(newValue, min, maxValue - minDistance));
        } else {
          setMaxValue(clamp(newValue, minValue + minDistance, max));
        }
      },
      [activeThumb, min, max, minValue, maxValue, minDistance]
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
          <InputWrapper
            symbol={symbol}
            value={minValue}
            min={min}
            max={max}
            defaultValue={min}
            placeholder={placeholderMin}
            onBlur={setMinValue}
          />
          <span>{range}</span>
          <InputWrapper
            symbol={symbol}
            value={maxValue}
            min={min}
            max={max}
            defaultValue={max}
            placeholder={placeholderMax}
            onBlur={setMaxValue}
          />
        </div>
        <div className={styles.rangeContainer}>
          <input
            type="range"
            min={min}
            max={max}
            value={minValue}
            onChange={handleMinChange}
            className={styles.rangeInput}
          />
          <input
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
