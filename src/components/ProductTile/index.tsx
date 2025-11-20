import { forwardRef } from "react";
import ProductTileHorizontal, { type Props as HorizontalProps } from "./ProductTileHorizontal";
import ProductTileVertical, { type Props as VerticalProps } from "./ProductTileVertical";

type Props = {
	variant?: "vertical" | "horizontal";
} & (VerticalProps | HorizontalProps);

const ProductTile = forwardRef<HTMLAnchorElement | HTMLDivElement, Props>((props, ref) => {
	const { variant = "vertical", ...rest } = props;

	if (variant === "horizontal") {
		return <ProductTileHorizontal ref={ref as React.ForwardedRef<HTMLDivElement>} {...(rest as HorizontalProps)} />;
	}

	return <ProductTileVertical ref={ref as React.ForwardedRef<HTMLAnchorElement>} {...(rest as VerticalProps)} />;
});

export default ProductTile;
