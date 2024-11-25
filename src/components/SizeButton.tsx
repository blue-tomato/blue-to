import classNames from "classnames";
import Button from "./Button";
import styles from "./SizeButton.module.scss";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	active?: boolean;
	disabled?: boolean;
};

const SizeButton = ({
	active = false,
	className,
	disabled = false,
	...props
}: Props) => (
	<Button
		className={classNames(
			className,
			styles.button,
			active && styles.active,
			disabled && styles.disabled,
		)}
		disabled={disabled}
		{...props}
	/>
);

export default SizeButton;
