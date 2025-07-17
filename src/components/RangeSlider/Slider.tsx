import classNames from "classnames";
import { useRef } from "react";
import { transformRange } from "@/utils";
import styles from "./Slider.module.scss";

type Props = React.HTMLAttributes<HTMLDivElement> & {
	max?: number;
	min?: number;
	maxValue?: number;
	minValue?: number;
	onMaxValueChange?: (value: number) => void;
	onMinValueChange?: (value: number) => void;
};

const Slider = ({
	className,
	max = 100,
	min = 0,
	maxValue = max,
	minValue = min,
	onMaxValueChange,
	onMinValueChange,
	...props
}: Props) => {
	const trackRef = useRef<HTMLDivElement>(null);
	const width = trackRef.current?.clientWidth ?? 0;

	return (
		<div className={classNames(className, styles.wrapper)} {...props}>
			<div ref={trackRef} className={styles.track}>
				<div
					className={styles.trackSelected}
					style={{
						left: transformRange(min, max, 0, width, minValue),
						right: width - transformRange(min, max, 0, width, maxValue),
					}}
				/>
			</div>

			<input
				type="range"
				className={styles.range}
				max={max}
				min={min}
				value={minValue}
				onChange={(event) => {
					const newMin = Number(event.target.value);

					if (newMin >= maxValue) return;

					onMinValueChange?.(newMin);
				}}
			/>
			<input
				type="range"
				className={styles.range}
				max={max}
				min={min}
				value={maxValue}
				onChange={(event) => {
					const newMax = Number(event.target.value);

					if (newMax <= minValue) return;

					onMaxValueChange?.(newMax);
				}}
			/>
		</div>
	);
};

export default Slider;
