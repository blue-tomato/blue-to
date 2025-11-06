import classNames from "classnames";
import { forwardRef, useImperativeHandle, useMemo } from "react";
import Caption from "./Caption";
import styles from "./index.module.scss";
import TableScrollText from "./TableScrollText";
import TableWrapper from "./TableWrapper";
import useTable from "./useTable";

export type TableProps = {
	caption?: string;
	headers: string[];
	rows: (string | number)[][];
	isSmall?: boolean;
	hasRowHeaders?: boolean;
	noFirstColumnStyle?: boolean;
	noShadow?: boolean;
	firstColumnTextAlign?: "left" | "center" | "right";
	firstColumnFontWeight?: "normal" | "bold";
} & React.HTMLAttributes<HTMLDivElement>;

const Table = forwardRef<HTMLDivElement, TableProps>(
	(
		{
			caption,
			headers,
			rows,
			isSmall,
			hasRowHeaders = true,
			noFirstColumnStyle,
			noShadow,
			firstColumnTextAlign,
			firstColumnFontWeight,
			className,
			...props
		},
		forwardedRef,
	) => {
		const { ref: internalRef, shouldShowScrollText } = useTable();

		useImperativeHandle(forwardedRef, () => internalRef.current!, [
			internalRef,
		]);

		if (!headers || !rows) return null;

		const tableHeaders = useMemo(
			() =>
				headers.map((header, index) => (
					<th key={`header-${index}`} scope="col">
						{header}
					</th>
				)),
			[headers],
		);

		const tableRows = useMemo(
			() =>
				rows.map((row, rowIndex) => (
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
				)),
			[rows, hasRowHeaders],
		);

		const wrapperClasses = classNames(className, {
			[styles.smallTable]: isSmall,
		});

		const tableClasses = classNames({
			[styles.noFirstColumnStyle]: noFirstColumnStyle || !hasRowHeaders,
			[styles.noShadow]: noShadow,
			[styles.centerFirstColumn]: firstColumnTextAlign === "center",
			[styles.normalFirstColumnFont]: firstColumnFontWeight === "normal",
		});

		return (
			<>
				<TableWrapper {...props} ref={internalRef} className={wrapperClasses}>
					<table className={tableClasses}>
						{caption && <Caption>{caption}</Caption>}
						<thead>
							<tr>{tableHeaders}</tr>
						</thead>
						<tbody>{tableRows}</tbody>
					</table>
				</TableWrapper>
				{shouldShowScrollText && hasRowHeaders && !noFirstColumnStyle ? (
					<TableScrollText />
				) : null}
			</>
		);
	},
);

Table.displayName = "Table";

export default Table;
