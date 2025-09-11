import classNames from "classnames";
import { forwardRef, useId } from "react";
import Icon from "./Icon";
import styles from "./TextField.module.scss";
import Tooltip from "./Tooltip";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
	error?: {
		enable?: boolean;
		text?: string;
	};
	helperText?: string;
	label?: string;
	optionalText?: string;
	placeholder?: string;
	slots?: {
		afterInput?: React.ReactNode;
	};
	tooltip?: string;
};

const TextField = forwardRef<HTMLLabelElement, Props>(
	(
		{
			error,
			helperText,
			label,
			optionalText,
			placeholder,
			slots,
			tooltip,
			...props
		},
		ref,
	) => {
		const tooltipId = useId().slice(1, -1);

		return (
			<label ref={ref} className={styles.wrapper}>
				<div className={styles.labelWrapper}>
					{label && <span className={styles.label}>{label}</span>}
					{optionalText && (
						<span className={styles.optionalText}>{optionalText}</span>
					)}
				</div>

				<div
					className={classNames(
						styles.inputWrapper,
						error?.enable && styles.inputWrapperError,
					)}
				>
					<input
						className={styles.input}
						placeholder={placeholder}
						{...props}
					/>

					{slots?.afterInput}

					{tooltip && (
						<>
							<Icon
								id={tooltipId}
								className={styles.inputIcon}
								icon="functional.helpFilledWhite"
							/>
							<Tooltip anchorSelect={`#${tooltipId}`} variant="yellow">
								{tooltip}
							</Tooltip>
						</>
					)}
				</div>

				{helperText && (
					<div className={styles.helperText}>
						<Icon className={styles.icon} icon="functional.infoOutlineBlack" />
						{helperText}
					</div>
				)}
				{error?.enable && error.text && (
					<div className={styles.errorText}>
						<Icon
							className={styles.icon}
							icon="functional.attentionFilledRed"
						/>
						{error.text}
					</div>
				)}
			</label>
		);
	},
);

export default TextField;
