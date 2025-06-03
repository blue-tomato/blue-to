import { clamp, isNil } from "es-toolkit";
import { useCallback, useEffect, useState } from "react";
import styles from "./Input.module.scss";

type Props = React.LabelHTMLAttributes<HTMLLabelElement> & {
	max?: number;
	min?: number;
	onValueChange?: (value: number) => void;
	placeholder?: string;
	symbol?: string;
	value?: number;
};

const Input = ({
	max = 100,
	min = 0,
	onValueChange,
	placeholder,
	symbol,
	value,
	...props
}: Props) => {
	const [tempValue, setTempValue] = useState<number | "">(value ?? "");
	const clampValue = useCallback(
		(newTempValue: number | "") => clamp(newTempValue || 0, min, max),
		[max, min],
	);

	useEffect(() => {
		setTempValue(clampValue(value ?? ""));
	}, [clampValue, value]);

	return (
		<label className={styles.wrapper} {...props}>
			<input
				className={styles.input}
				onBlur={() => {
					const newValue = clampValue(tempValue);

					setTempValue(newValue);
					onValueChange?.(newValue);
				}}
				onChange={(event) => {
					const newTempValue = event.target.value.replace(/\D+/g, "");

					setTempValue(newTempValue ? Number(newTempValue) : "");
				}}
				value={tempValue}
				placeholder={placeholder}
			/>

			{!!symbol && !isNil(tempValue) ? (
				<span className={styles.symbol}>{symbol ?? ""}</span>
			) : null}
		</label>
	);
};

export default Input;
