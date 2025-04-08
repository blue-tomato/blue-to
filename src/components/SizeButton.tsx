import classNames from "classnames";
import { forwardRef } from "react";
import Button from "./Button";
import styles from "./SizeButton.module.scss";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	active?: boolean;
	disabled?: boolean;
	withIconRight?: boolean;
	WithIconLeft?: boolean;
};

const SizeButton = forwardRef<HTMLButtonElement, Props>(
	({ active = false, className, disabled = false, WithIconLeft = false, withIconRight = false, ...props }, ref) => (
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
			iconRight={withIconRight ? "support.bellBlack" : undefined}
			iconLeft={WithIconLeft ? "support.bellBlack" : undefined}
			iconClassName={styles.icon}
			{...props}
		/>
	),
);

export default SizeButton;
