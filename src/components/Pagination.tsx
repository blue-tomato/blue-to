import classNames from "classnames";
import { forwardRef } from "react";
import Button from "./Button";
import styles from "./Pagination.module.scss";

type Props = React.HTMLAttributes<HTMLDivElement> & {
	disableNextButton?: boolean;
	disablePreviousButton?: boolean;
	infoText?: React.ReactNode;
	mainText?: React.ReactNode;
	onNextButtonClick?: () => void;
	onPreviousButtonClick?: () => void;
	progressBar?: number;
};

const Pagination = forwardRef<HTMLDivElement, Props>(
	(
		{
			className,
			disableNextButton = false,
			disablePreviousButton = false,
			infoText,
			mainText,
			onNextButtonClick,
			onPreviousButtonClick,
			progressBar,
		},
		ref,
	) => (
		<div ref={ref} className={classNames(className, styles.wrapper)}>
			{infoText && <div className={styles.infoText}>{infoText}</div>}
			{progressBar !== undefined && (
				<div className={styles.progressBar}>
					<div className={styles.progress} style={{ width: `${progressBar * 100}%` }} />
				</div>
			)}
			<nav aria-label="Pagination" className={styles.buttonsContainer}>
				<Button
					className={styles.button}
					disabled={disablePreviousButton}
					iconLeft="functional.arrowleftDefaultWhite"
					onClick={() => onNextButtonClick?.()}
					variant="secondary"
				/>
				{mainText && (
					<span aria-current="page" className={styles.mainText}>
						{mainText}
					</span>
				)}
				<Button
					className={styles.button}
					disabled={disableNextButton}
					iconLeft="functional.arrowrightDefaultWhite"
					onClick={() => onPreviousButtonClick?.()}
					variant="secondary"
				/>
			</nav>
		</div>
	),
);

export default Pagination;
