import { forwardRef } from "react";
import { Tooltip as ReactTooltip, type TooltipRefProps } from "react-tooltip";

type Props = {
	children?: React.ReactNode;
	anchorSelect?: string;
};

const Tooltip = forwardRef<TooltipRefProps, Props>(
	({ children, anchorSelect }, ref) => (
		<ReactTooltip ref={ref} anchorSelect={anchorSelect}>
			{children}
		</ReactTooltip>
	),
);

export default Tooltip;
