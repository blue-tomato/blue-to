import styles from "./index.module.scss";
import { useMemo, forwardRef, useImperativeHandle } from "react";
import Caption from "./Caption";
import TableScrollText from "./TableScrollText";
import TableWrapper from "./TableWrapper";
import useTable from "./useTable";

export type TableProps = {
  caption: string;
  headers: string[];
  rows: (string | number)[][];
} & React.HTMLAttributes<HTMLDivElement>;

const Table = forwardRef<HTMLDivElement, TableProps>(
  ({ caption, headers, rows, ...props }, forwardedRef) => {
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
      [headers]
    );

    const tableRows = useMemo(
      () =>
        rows.map((row, rowIndex) => (
          <tr key={`row-${rowIndex}`} className={styles.row}>
            {row.map((cell, cellIndex) =>
              cellIndex === 0 ? (
                <th key={`cell-${rowIndex}-${cellIndex}`} scope="row">
                  {cell}
                </th>
              ) : (
                <td key={`cell-${rowIndex}-${cellIndex}`}>{cell}</td>
              )
            )}
          </tr>
        )),
      [rows]
    );

    return (
      <>
        <TableWrapper {...props} ref={internalRef}>
          <table>
            <Caption>{caption}</Caption>
            <thead>
              <tr>{tableHeaders}</tr>
            </thead>
            <tbody>{tableRows}</tbody>
          </table>
        </TableWrapper>
        {shouldShowScrollText ? <TableScrollText /> : null}
      </>
    );
  }
);

Table.displayName = "Table";

export default Table;