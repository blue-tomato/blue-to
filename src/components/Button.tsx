import classNames from "classnames";
import { forwardRef } from "react";
import styles from "./Button.module.scss";
import Icon from "./Icon";

type IconProp = React.ComponentProps<typeof Icon>["icon"] | React.ReactElement;

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	disabled?: boolean;
	iconLeft?: IconProp;
	iconRight?: IconProp;
	loading?: boolean;
	variant?:
		| "primary"
		| "secondary"
		| "secondary-white"
		| "tertiary"
		| "tertiary-transparent" 
		| "tertiary-grey";
};

const Button = forwardRef<HTMLButtonElement, Props>(
	(
		{
			children,
			className,
			disabled = false,
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
				variant === "tertiary-grey" && styles.tertiaryGrey,
				disabled && styles.disabled,
			)}
			disabled={disabled}
			{...props}
		>
			{loading && (
				<Icon
					className={classNames(styles.icon, styles.loading)}
					icon={
						variant === "secondary-white" ||
						variant === "tertiary" ||
						variant === "tertiary-transparent"
							? "functional.spinnerFilledBlack"
							: "functional.spinnerFilledWhite"
					}
				/>
			)}
			{iconLeft && typeof iconLeft === "string" ? (
				<Icon className={styles.icon} icon={iconLeft} />
			) : (
				iconLeft
			)}
			{children}
			{iconRight && typeof iconRight === "string" ? (
				<Icon className={styles.icon} icon={iconRight} />
			) : (
				iconRight
			)}
		</button>
	),
);

export default Button;
