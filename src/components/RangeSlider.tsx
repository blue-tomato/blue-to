import classNames from "classnames";
import { forwardRef, useCallback, useEffect, useRef, useState } from "react";
import styles from "./RangeSlider.module.scss";

interface InputWrapperProps {
	symbol?: string;
	value?: number;
	min: number;
	max: number;
	defaultValue: number;
	placeholder?: string;
	onBlur: (value: number) => void;
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
}: InputWrapperProps) => {
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

interface Props extends React.HTMLAttributes<HTMLDivElement> {
	symbol?: string;
	min: number;
	max: number;
	autoFocusOnDesktop?: boolean;
	range?: string;
	placeholderMin?: string;
	placeholderMax?: string;
	tempValue?: number;
	count?: number;
	handleCountUpdate?: () => number;
}

const RangeSlider = forwardRef<HTMLDivElement, Props>(
	(
		{
			autoFocusOnDesktop,
			className,
			count,
			handleCountUpdate,
			max,
			min,
			placeholderMin,
			placeholderMax,
			range,
			symbol,
			tempValue,
			...props
		},
		ref,
	) => {
		const isTouch = typeof window !== "undefined" && "ontouchstart" in window;
		const inputRef = useRef<HTMLInputElement>(null);
		const trackRef = useRef<HTMLDivElement>(null);
		const thumbLeftRef = useRef<HTMLDivElement>(null);
		const thumbRightRef = useRef<HTMLDivElement>(null);
		const [newCount, setNewCount] = useState(count);

		const [minValue, setMinValue] = useState(min);
		const [maxValue, setMaxValue] = useState(max);
		const [activeThumb, setActiveThumb] = useState<"left" | "right" | null>(
			null,
		);

		const minValueRef = useRef(min);
		const maxValueRef = useRef(max);

		useEffect(() => {
			updateThumbs();
		}, [minValue, maxValue]);

		useEffect(() => {
			if (autoFocusOnDesktop && !isTouch) {
				inputRef.current?.focus();
			}
		}, [autoFocusOnDesktop, isTouch]);

		const updateThumbs = useCallback(() => {
			const minPercent = ((minValueRef.current - min) / (max - min)) * 100;
			const maxPercent = ((maxValueRef.current - min) / (max - min)) * 100;

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
		}, []);

		const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
			const newValue = clamp(Number(e.target.value), min, maxValue - 1);
			setMinValue(newValue);
			count && setNewCount(handleCountUpdate?.());
		};

		const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
			const newValue = clamp(Number(e.target.value), minValue + 1, max);
			setMaxValue(newValue);
			count && setNewCount(handleCountUpdate?.());
		};

		const handleMouseMove = useCallback(
			(e: MouseEvent) => {
				if (!trackRef.current || activeThumb === null) return;

				const rect = trackRef.current.getBoundingClientRect();
				const percent = ((e.clientX - rect.left) / rect.width) * 100;
				const newValue = Math.round((percent / 100) * (max - min) + min);

				if (activeThumb === "left") {
					const clampedValue = clamp(newValue, min, maxValueRef.current - 1);
					minValueRef.current = clampedValue;
					setMinValue(clampedValue);

					if (thumbLeftRef.current) {
						thumbLeftRef.current.style.left = `${((clampedValue - min) / (max - min)) * 100}%`;
					}
				} else {
					const clampedValue = clamp(newValue, minValueRef.current + 1, max);
					maxValueRef.current = clampedValue;
					setMaxValue(clampedValue);

					if (thumbRightRef.current) {
						thumbRightRef.current.style.right = `${100 - ((clampedValue - min) / (max - min)) * 100}%`;
					}
				}
				count && setNewCount(handleCountUpdate?.());
			},
			[activeThumb, min, max, count, handleCountUpdate],
		);

		const handleMouseUp = () => {
			setActiveThumb(null);
			updateThumbs();
			document.removeEventListener("mousemove", handleMouseMove);
			document.removeEventListener("mouseup", handleMouseUp);
		};

		const handleThumbMouseDown =
			(thumb: "left" | "right") => (e: React.MouseEvent) => {
				e.preventDefault();
				setActiveThumb(thumb);
			};

		useEffect(() => {
			if (activeThumb === null) return;

			document.addEventListener("mousemove", handleMouseMove);
			document.addEventListener("mouseup", handleMouseUp);

			return () => {
				document.removeEventListener("mousemove", handleMouseMove);
				document.removeEventListener("mouseup", handleMouseUp);
			};
		}, [activeThumb, handleMouseMove, handleMouseUp]);

		const handleMinBlur = (value: number) => {
			const newValue = clamp(value, min, maxValue - 1);
			minValueRef.current = newValue;
			setMinValue(newValue);
			updateThumbs();
			count && setNewCount(handleCountUpdate?.());
		};

		const handleMaxBlur = (value: number) => {
			const newValue = clamp(value, minValue + 1, max);
			maxValueRef.current = newValue;
			setMaxValue(newValue);
			updateThumbs();
			count && setNewCount(handleCountUpdate?.());
		};

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
						onBlur={handleMinBlur}
						aria-label="min"
					/>
					<span>{range ?? ""}</span>
					<InputWrapper
						symbol={symbol}
						value={maxValue}
						min={min}
						max={max}
						defaultValue={max}
						placeholder={placeholderMax}
						onBlur={handleMaxBlur}
						aria-label="max"
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
						aria-valuemin={min}
						aria-valuemax={max}
						aria-valuenow={minValue}
						aria-orientation="horizontal"
					/>
					<input
						type="range"
						min={min}
						max={max}
						value={maxValue}
						onChange={handleMaxChange}
						className={styles.rangeInput}
						aria-valuemin={min}
						aria-valuemax={max}
						aria-valuenow={maxValue}
					/>
					<div className={styles.trackWrapper}>
						<div className={styles.track} />
						<div ref={trackRef} className={styles.rangeBetween} />
						<div
							ref={thumbLeftRef}
							className={classNames(styles.thumb, styles.thumbLeft)}
							onMouseDown={handleThumbMouseDown("left")}
							onMouseUp={handleMouseUp}
						/>
						<div
							ref={thumbRightRef}
							className={classNames(styles.thumb, styles.thumbRight)}
							onMouseDown={handleThumbMouseDown("right")}
							onMouseUp={handleMouseUp}
						/>
					</div>
				</div>
				{newCount ? (
					<p className={classNames(className, styles.infoText)}>
						{`${newCount} Produkte`}
					</p>
				) : null}
			</div>
		);
	},
);

export default RangeSlider;
