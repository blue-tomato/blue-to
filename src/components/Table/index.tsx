
import styles from "./index.module.scss";
import { FC, useMemo } from "react";
import Caption from "./Caption";
import TableScrollText from "./TableScrollText";
import TableWrapper from "./TableWrapper";
import useTable from "./useTable";

export interface TableProps extends React.HTMLAttributes<HTMLDivElement> {
  caption: string;
  headers: string[];
  rows: (string | number)[][];
}

const Table: FC<TableProps> = ({ caption, headers, rows }) => {
  const { ref, shouldShowScrollText } = useTable();

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
      <TableWrapper className={styles.sizeChartWrapper} data-testid="table" ref={ref}>
        <table>
          <Caption testid="table-headline">{caption}</Caption>
          <thead>
            <tr>{tableHeaders}</tr>
          </thead>
          <tbody>{tableRows}</tbody>
        </table>
      </TableWrapper>
      {shouldShowScrollText && <TableScrollText />}
    </>
  );
};

export default Table;