import classNames from "classnames";
import { debounce } from "es-toolkit";
import { forwardRef, useEffect, useRef, useState } from "react";
import Caption from "./Caption";
import styles from "./index.module.scss";

type Props = React.HTMLAttributes<HTMLDivElement> & {
	caption?: string;
	firstColumnSticky?: boolean;
	header?: boolean;
	rows?: string[][];
	scrollText?: string;
};

const getWidth = (element: HTMLElement) => element.getBoundingClientRect().width;

const Table = forwardRef<HTMLDivElement, Props>(
	({ caption, className, firstColumnSticky = false, header = true, rows, scrollText, ...props }, ref) => {
		const [shouldShowScrollText, setShouldShowScrollText] = useState(false);
		const [hoveredCell, setHoveredCell] = useState<[number, number]>();
		const internalRef = useRef<HTMLDivElement>(null);

		useEffect(() => {
			const container = internalRef.current;
			const table = container?.querySelector("table");

			if (!container || !table) return;

			const handleResize = debounce(() => {
				if (getWidth(container) < getWidth(table)) {
					setShouldShowScrollText(true);
				} else {
					setShouldShowScrollText(false);
				}
			}, 200);

			handleResize();

			window.addEventListener("resize", handleResize);

			return () => {
				window.removeEventListener("resize", handleResize);
			};
		}, []);

		return (
			<div ref={ref} className={className} {...props}>
				<div ref={internalRef} className={styles.tableWrapper}>
					<table className={classNames(styles.table, !firstColumnSticky && styles.firstColumnRegular)}>
						{caption && <Caption>{caption}</Caption>}

						<tbody>
							{rows?.map((row, rowIndex) => (
								// biome-ignore lint/suspicious/noArrayIndexKey: needed because rows can be identical
								<tr key={rowIndex + row.join("")}>
									{row.map((cell, cellIndex) => {
										const isFirstCellDisabled = firstColumnSticky && cellIndex === 0;

										return (
											<td
												key={cellIndex + cell}
												className={classNames(
													styles.cell,
													!isFirstCellDisabled && styles.cellHover,
													header && rowIndex === 0 && styles.cellHeader,
													firstColumnSticky && cellIndex === 0 && styles.cellSticky,
													hoveredCell &&
														(hoveredCell[0] === rowIndex || (!isFirstCellDisabled && hoveredCell[1] === cellIndex)) &&
														styles.cellHighlight,
													rowIndex === rows.length - 1 && styles.cellLastRow,
												)}
												onMouseEnter={() => setHoveredCell([rowIndex, cellIndex])}
												onMouseLeave={() => setHoveredCell(undefined)}
											>
												{cell}
											</td>
										);
									})}
								</tr>
							))}
						</tbody>
					</table>
				</div>

				{shouldShowScrollText && scrollText && <div className={styles.infoText}>{scrollText}</div>}
			</div>
		);
	},
);

export default Table;
