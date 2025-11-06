import classNames from "classnames";
import { forwardRef, type HTMLAttributes } from "react";
import styles from "./index.module.scss";

type Props = HTMLAttributes<HTMLDivElement>;

const TableWrapper = forwardRef<HTMLDivElement, Props>(
	({ children, className, ...props }, ref) => (
		<div
			className={classNames(styles.tableWrapper, className)}
			{...props}
			ref={ref}
		>
			{children}
		</div>
	),
);

TableWrapper.displayName = "TableWrapper";

export default TableWrapper;
