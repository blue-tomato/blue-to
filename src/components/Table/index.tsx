import classNames from "classnames";
import { forwardRef, useEffect, useRef, useState } from "react";
import Caption from "./Caption";
import styles from "./index.module.scss";

type Props = {
	caption?: string;
	firstColumnFontWeight?: "bold" | "normal";
	firstColumnTextAlign?: "center" | "left" | "right";
	hasRowHeaders?: boolean;
	headers: string[];
	isSmall?: boolean;
	noFirstColumnStyle?: boolean;
	noShadow?: boolean;
	rows: (number | string)[][];
} & React.HTMLAttributes<HTMLDivElement>;

const getWidth = (el: HTMLElement) => el.getBoundingClientRect().width;

const Table = forwardRef<HTMLDivElement, Props>(
	(
		{
			caption,
			className,
			firstColumnFontWeight,
			firstColumnTextAlign,
			hasRowHeaders = true,
			headers,
			isSmall,
			noFirstColumnStyle,
			noShadow,
			rows,
			...props
		},
		ref,
	) => {
		const [shouldShowScrollText, setShouldShowScrollText] = useState(false);
		const internalRef = useRef<HTMLDivElement>(null);

		useEffect(() => {
			const container = internalRef.current;
			const table = container?.querySelector("table");

			if (!container || !table) return;

			const handleResize = () => {
				if (getWidth(container) < getWidth(table)) {
					setShouldShowScrollText(true);
				} else {
					setShouldShowScrollText(false);
				}
			};

			handleResize();

			window.addEventListener("resize", handleResize);

			return () => {
				window.removeEventListener("resize", handleResize);
			};
		}, []);

		if (!headers || !rows) return null;

		const wrapperClasses = classNames(className, {
			[styles.smallTable]: isSmall,
		});

		const tableClasses = classNames({
			[styles.centerFirstColumn]: firstColumnTextAlign === "center",
			[styles.noFirstColumnStyle]: noFirstColumnStyle || !hasRowHeaders,
			[styles.noShadow]: noShadow,
			[styles.normalFirstColumnFont]: firstColumnFontWeight === "normal",
		});

		return (
			<div ref={ref || internalRef} {...props}>
				<div className={classNames(styles.tableWrapper, wrapperClasses)}>
					<table className={tableClasses}>
						{caption && <Caption>{caption}</Caption>}
						<thead>
							<tr>
								{headers.map((header, index) => (
									<th key={`header-${index}`} scope="col">
										{header}
									</th>
								))}
							</tr>
						</thead>
						<tbody>
							{rows.map((row, rowIndex) => (
								<tr key={`row-${rowIndex}`} className={styles.row}>
									{row.map((cell, cellIndex) =>
										hasRowHeaders && cellIndex === 0 ? (
											<th key={`cell-${rowIndex}-${cellIndex}`} scope="row">
												{cell}
											</th>
										) : (
											<td key={`cell-${rowIndex}-${cellIndex}`}>{cell}</td>
										),
									)}
								</tr>
							))}
						</tbody>
					</table>
				</div>
				{shouldShowScrollText && hasRowHeaders && !noFirstColumnStyle ? (
					<div className={styles.infoText}>
						Scroll horizontal, um mehr zu sehen
					</div>
				) : null}
			</div>
		);
	},
);

export default Table;
