import classNames from "classnames";
import styles from "./Icon.module.scss";

type Props = {
	background?: "dark" | "light";
	name?: string;
	src?: string;
};

const Icon = ({ background = "light", src }: Props) => (
	<div
		className={classNames(
			styles.wrapper,
			background === "light" ? styles.light : styles.dark,
		)}
	>
		<img src={src} />
	</div>
);

export default Icon;
