import classNames from "classnames";
import { useState } from "react";
import styles from "./Checkbox.module.scss";
import Icon from "./Icon";

type Props = React.HTMLAttributes<HTMLDivElement> & {
	error?: React.ReactNode;
	inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
};

const Checkbox = ({
	children,
	className,
	error = false,
	inputProps,
	...props
}: Props) => {
	const [checked, setChecked] = useState(inputProps?.checked ?? false);

	return (
		<div className={classNames(className, styles.wrapper)} {...props}>
			<label className={styles.label}>
				<div className={classNames(styles.box, checked && styles.boxChecked)}>
					<input
						{...inputProps}
						checked={inputProps?.checked ?? checked}
						className={classNames(
							inputProps?.className,
							styles.input,
							error && styles.inputError,
						)}
						onChange={(event) => {
							inputProps?.onChange?.(event);
							setChecked(event.target.checked);
						}}
						type={inputProps?.type ?? "checkbox"}
					/>
					<Icon
						className={classNames(
							styles.checkmark,
							!checked && styles.checkmarkHidden,
						)}
						icon="functional.checkDefaultBlue"
					/>
				</div>
				{children}
			</label>
			{error && <div className={styles.error}>{error}</div>}
		</div>
	);
};

export default Checkbox;
