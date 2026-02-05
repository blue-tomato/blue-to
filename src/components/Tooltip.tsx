import classNames from "classnames";
import { forwardRef, useEffect, useRef } from "react";
import { Tooltip as ReactTooltip, type TooltipRefProps } from "react-tooltip";
import styles from "./Tooltip.module.scss";

const widthOfArrow = 10;

type Props = {
	anchorSelect?: string;
	children?: React.ReactNode;
	variant?: "black" | "yellow";
};

const Tooltip = forwardRef<TooltipRefProps, Props>(({ anchorSelect, children, variant }, ref) => {
	const internalRef = useRef<HTMLDivElement>(null);

	// Fix to create a 16px margin on the left side of the tooltip
	useEffect(() => {
		if (!internalRef.current) return;

		const tooltipObserver = new MutationObserver(([{ target }]) => {
			const tooltip = target as HTMLElement;

			// Only do this for top and bottom placemnets
			if (
				!tooltip.classList.contains("react-tooltip__place-top") &&
				!tooltip.classList.contains("react-tooltip__place-bottom")
			) {
				tooltip.style.marginLeft = "0";

				return;
			}

			// Get the left style
			const left = Number(tooltip.style.left?.slice(0, -2) || 0);

			// Add left margin if the left property is lower than 16px
			if (left < 16) {
				tooltip.style.left = "0";
				tooltip.style.marginLeft = "16px";
			} else {
				tooltip.style.marginLeft = "0";
			}
		});

		const observer = new MutationObserver(() => {
			const tooltip = internalRef.current?.querySelector(".react-tooltip");

			if (!tooltip) return;

			tooltipObserver.observe(tooltip, {
				attributes: true,
				attributeFilter: ["style"],
				attributeOldValue: true,
			});
		});

		observer.observe(internalRef.current, {
			childList: true,
			subtree: true,
		});
	}, []);

	return (
		<div ref={internalRef} className={styles.wrapper}>
			<ReactTooltip
				ref={ref}
				delayShow={0}
				delayHide={0}
				anchorSelect={anchorSelect}
				arrowSize={14}
				className={classNames(styles.tooltip, variant === "black" ? styles.backgroundBlack : styles.backgroundYellow)}
				offset={widthOfArrow + 4}
				place="top"
			>
				{children}
			</ReactTooltip>
		</div>
	);
});

export default Tooltip;
