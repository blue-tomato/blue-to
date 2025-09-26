import { forwardRef } from "react";
import styles from "./TextArea.module.scss";
import TextField from "./TextField";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
	error?: boolean | string;
	helperText?: string;
	label?: string;
	optionalText?: string;
	placeholder?: string;
};

const TextArea = forwardRef<HTMLLabelElement, Props>(
	({ placeholder, ...props }, ref) => {
		return (
			<TextField
				ref={ref}
				slots={{
					input: (
						<textarea className={styles.textarea} placeholder={placeholder} />
					),
				}}
				{...props}
			/>
		);
	},
);

export default TextArea;
