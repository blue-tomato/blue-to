import classNames from "classnames";
import styles from "./Button.module.scss";
import Icon from "./Icon";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	disabled?: boolean;
	icon?: React.ComponentProps<typeof Icon>["icon"];
	loading?: boolean;
	variant?:
		| "primary"
		| "secondary"
		| "secondary-white"
		| "tertiary"
		| "tertiary-transparent";
};

const Button = ({
	children,
	className,
	disabled = false,
	icon,
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
		{icon && <Icon className={styles.icon} icon={icon} />}
		{children}
	</button>
);

export default Button;
