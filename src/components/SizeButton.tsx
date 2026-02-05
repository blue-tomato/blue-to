import classNames from "classnames";
import { forwardRef } from "react";
import Button from "./Button";
import Icon from "./Icon";
import styles from "./SizeButton.module.scss";

type IconProp = React.ComponentProps<typeof Icon>["icon"];

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	active?: boolean;
	disabled?: boolean;
	iconLeft?: IconProp;
	iconRight?: IconProp;
};

const SizeButton = forwardRef<HTMLButtonElement, Props>(
	({ active = false, className, disabled = false, iconLeft, iconRight, ...props }, ref) => (
		<Button
			ref={ref}
			className={classNames(
				className,
				styles.button,
				active && disabled && styles.activeDisabled,
				active && styles.active,
				disabled && styles.disabled,
				disabled && (iconLeft || iconRight) && styles.iconDisabled,
			)}
			disabled={disabled}
			iconLeft={iconLeft && <Icon className={styles.icon} icon={iconLeft} />}
			iconRight={iconRight && <Icon className={styles.icon} icon={iconRight} />}
			{...props}
		/>
	),
);

export default SizeButton;
