import classNames from "classnames";
import { forwardRef } from "react";
import Button from "./Button";
import styles from "./SizeButton.module.scss";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	active?: boolean;
	disabled?: boolean;
};

const SizeButton = forwardRef<HTMLButtonElement, Props>(
	({ active = false, className, disabled = false, ...props }, ref) => (
		<Button
			ref={ref}
			className={classNames(
				className,
				styles.button,
				active && disabled && styles.activeDisabled,
				active && styles.active,
				disabled && styles.disabled,
			)}
			disabled={disabled}
			{...props}
		/>
	),
);

export default SizeButton;
