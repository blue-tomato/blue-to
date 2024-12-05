import classNames from "classnames";
import { forwardRef } from "react";
import Button from "./Button";
import styles from "./CategoryButton.module.scss";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	active?: boolean;
	color?: "white" | "grey";
	size?: "large" | "small";
};

const CategoryButton = forwardRef<HTMLButtonElement, Props>(
	(
		{ active = false, className, color = "white", size = "large", ...props },
		ref,
	) => (
		<Button
			ref={ref}
			className={classNames(
				className,
				styles.button,
				active && styles.active,
				color === "grey" && styles.grey,
				size === "small" && styles.small,
			)}
			{...props}
		/>
	),
);

export default CategoryButton;
