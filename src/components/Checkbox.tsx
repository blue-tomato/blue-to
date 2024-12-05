import classNames from "classnames";
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
	return (
		<div className={classNames(className, styles.wrapper)} {...props}>
			<label className={styles.label}>
				<div className={styles.box}>
					<input
						{...inputProps}
						className={classNames(
							inputProps?.className,
							styles.input,
							error && styles.inputError,
						)}
						type={inputProps?.type ?? "checkbox"}
					/>
					<Icon
						className={styles.checkmark}
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
