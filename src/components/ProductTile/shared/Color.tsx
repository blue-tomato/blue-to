import classNames from "classnames";
import { forwardRef } from "react";
import styles from "./Color.module.scss";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	color: string;
	active?: boolean;
};

const Color = forwardRef<HTMLButtonElement, Props>(({ color, active = false, className, ...props }, ref) => (
	<button
		ref={ref}
		className={classNames(styles.swatch, className, active && styles.active)}
		style={{ backgroundColor: color }}
		aria-label={`Color option: ${color}`}
		{...props}
	/>
));

export default Color;
