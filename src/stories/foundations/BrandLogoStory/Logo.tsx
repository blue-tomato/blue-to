import classNames from "classnames";
import styles from "./Logo.module.scss";

type Props = {
	src?: string;
	background?: "dark" | "light";
};

const Logo = ({ background = "light", src }: Props) => (
	<div
		className={classNames(
			styles.wrapper,
			background === "light" ? styles.light : styles.dark,
		)}
	>
		<img src={src} />
	</div>
);

export default Logo;
