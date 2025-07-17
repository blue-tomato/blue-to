import classNames from "classnames";
import { forwardRef } from "react";
import Input from "./Input";
import styles from "./index.module.scss";
import Slider from "./Slider";

type Props = React.HTMLAttributes<HTMLDivElement> & {
	max?: number;
	min?: number;
	maxValue?: number;
	minValue?: number;
	onMaxValueChange?: (value: number) => void;
	onMinValueChange?: (value: number) => void;
	placeholderMax?: string;
	placeholderMin?: string;
	rangeText?: React.ReactNode;
	resultText?: React.ReactNode;
	symbol?: string;
};

const RangeSlider = forwardRef<HTMLDivElement, Props>(
	(
		{
			className,
			max = 100,
			min = 0,
			maxValue = max,
			minValue = min,
			onMaxValueChange,
			onMinValueChange,
			placeholderMax,
			placeholderMin,
			rangeText = "-",
			resultText,
			symbol,
			...props
		},
		ref,
	) => (
		<div ref={ref} className={classNames(className, styles.wrapper)} {...props}>
			<div className={styles.inputsContainer}>
				<Input
					max={maxValue - 1}
					min={min}
					onValueChange={onMinValueChange}
					placeholder={placeholderMin}
					symbol={symbol}
					value={minValue}
				/>
				<span>{rangeText}</span>
				<Input
					max={max}
					min={minValue + 1}
					onValueChange={onMaxValueChange}
					placeholder={placeholderMax}
					symbol={symbol}
					value={maxValue}
				/>
			</div>

			<Slider
				className={styles.slider}
				max={max}
				min={min}
				maxValue={maxValue}
				minValue={minValue}
				onMaxValueChange={onMaxValueChange}
				onMinValueChange={onMinValueChange}
			/>

			{resultText ? <p className={styles.infoText}>{resultText}</p> : null}
		</div>
	),
);

export default RangeSlider;
