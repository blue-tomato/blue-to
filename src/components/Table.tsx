import classNames from "classnames";
import { forwardRef } from "react";
import styles from "./Table.module.scss";

type Props = React.TableHTMLAttributes<HTMLTableElement>;
            

const Table = forwardRef<HTMLTableElement, Props>(
    ({ className, ...props }, ref) => ( 
        <table ref={ref} className={classNames(className, styles.table)} {...props} />
    ),
);

export default Table;