import classNames from "classnames";
import Icon from "@/components/Icon";
import styles from "./NavigationButton.module.scss";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	direction: "next" | "previous";
};

const NavigationButton = ({ className, direction, ...props }: Props) => (
	<button
		aria-label={direction === "previous" ? "Previous items" : "Next items"}
		className={classNames(className, styles.button)}
		type="button"
		{...props}
	>
		<Icon
			className={styles.icon}
			icon={direction === "previous" ? "functional.arrowleftFilledWhite" : "functional.arrowrightFilledWhite"}
		/>
	</button>
);

export default NavigationButton;
