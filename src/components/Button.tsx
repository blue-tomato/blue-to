import classNames from "classnames";
import { forwardRef } from "react";
import styles from "./Button.module.scss";
import Icon from "./Icon";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	disabled?: boolean;
	iconLeft?: React.ComponentProps<typeof Icon>["icon"];
	iconRight?: React.ComponentProps<typeof Icon>["icon"];
	iconClassName?: string;
	loading?: boolean;
	variant?:
		| "primary"
		| "secondary"
		| "secondary-white"
		| "tertiary"
		| "tertiary-transparent";
};

const Button = forwardRef<HTMLButtonElement, Props>(
	(
		{
			children,
			className,
			disabled = false,
			iconClassName,
			iconLeft,
			iconRight,
			loading = false,
			variant = "primary",
			...props
		},
		ref,
	) => (
		<button
			ref={ref}
			className={classNames(
				className,
				styles.button,
				variant === "secondary" && styles.secondary,
				variant === "secondary-white" && styles.secondaryWhite,
				variant === "tertiary" && styles.tertiary,
				variant === "tertiary-transparent" && styles.tertiaryTransparent,
				disabled && styles.disabled,
			)}
			disabled={disabled}
			{...props}
		>
			{loading && (
				<Icon
					className={classNames(styles.icon, styles.loading)}
					icon="functional.spinnerFilledWhite"
				/>
			)}
			{iconLeft && <Icon className={classNames(styles.icon, iconClassName)} icon={iconLeft} />}
			{children}
			{iconRight && <Icon className={classNames(styles.icon, iconClassName)} icon={iconRight} />}
		</button>
	),
);

export default Button;
