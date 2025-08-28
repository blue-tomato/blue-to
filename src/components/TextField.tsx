import { forwardRef } from "react";
import styles from "./TextField.module.scss";

type Props = React.HTMLAttributes<HTMLLabelElement> & {
	label?: string;
	optionalText?: string;
	placeholder?: string;
};

const TextField = forwardRef<HTMLLabelElement, Props>(
	({ label, optionalText, placeholder, ...props }, ref) => {
		return (
			<label ref={ref} className={styles.wrapper} {...props}>
				<div className={styles.labelWrapper}>
					{label && <span className={styles.label}>{label}</span>}
					{optionalText && (
						<span className={styles.optionalText}>{optionalText}</span>
					)}
				</div>

				<input className={styles.input} placeholder={placeholder} />
			</label>
		);
	},
);

export default TextField;
