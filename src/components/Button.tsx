import classNames from "classnames";
import styles from "./Button.module.scss";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	disabled?: boolean;
	loading?: boolean;
	variant?:
		| "primary"
		| "secondary"
		| "secondary-white"
		| "tertiary"
		| "tertiary-transparent";
};

const Button = ({
	className,
	disabled = false,
	loading = false,
	variant = "primary",
	...props
}: Props) => (
	<button
		className={classNames(
			className,
			styles.button,
			variant === "secondary" && styles.secondary,
			variant === "secondary-white" && styles.secondaryWhite,
			variant === "tertiary" && styles.tertiary,
			variant === "tertiary-transparent" && styles.tertiaryTransparent,
			disabled && styles.disabled,
			variant === "tertiary" && disabled && styles.tertiaryDisabled,
		)}
		disabled={disabled}
		{...props}
	/>
);

export default Button;
