import classNames from "classnames";
import styles from "./index.module.scss";

type Props = {
	className?: string;
	text?: string;
};

const TableScrollText = ({
	className,
	text = "Scroll horizontal, um mehr zu sehen",
}: Props) => {
	return <div className={classNames(styles.infoText, className)}>{text}</div>;
};

export default TableScrollText;
