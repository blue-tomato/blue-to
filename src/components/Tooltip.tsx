import { forwardRef } from "react";
import { Tooltip as ReactTooltip, type TooltipRefProps } from "react-tooltip";
import styles from "./Tooltip.module.scss";

type Props = {
	children?: React.ReactNode;
	anchorSelect?: string;
	maxWidth?: string;
	type?: "yellow" | "black";
};

const Tooltip = forwardRef<TooltipRefProps, Props>(
	({ children, anchorSelect, maxWidth, type }, ref) => (
		<ReactTooltip
			ref={ref}
			anchorSelect={anchorSelect}
			offset={8}
			className={styles.backgroundYellow}
			style={{
				backgroundColor: type === "yellow" ? "#fff5b3" : "#333333",
				color: type === "yellow" ? "#333333" : "#ffffff",
				maxWidth: maxWidth,
			}}
		>
			{children}
		</ReactTooltip>
	),
);

export default Tooltip;
