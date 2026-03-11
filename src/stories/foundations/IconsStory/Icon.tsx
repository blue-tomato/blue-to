import classNames from "classnames";
import styles from "./Icon.module.scss";

type Props = {
	background?: "dark" | "light";
	name?: string;
	src?: string;
	onClick?: () => void;
};

const Icon = ({ background = "light", src, onClick }: Props) => (
	<div
		className={classNames(styles.wrapper, background === "light" ? styles.light : styles.dark, { [styles.clickable]: !!onClick })}
		onClick={onClick}
	>
		<img src={src} />
	</div>
);

export default Icon;
