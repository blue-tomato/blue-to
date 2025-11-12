import { forwardRef } from "react";
import ProductTileHorizontal from "@/components/ProductTile/ProductTileHorizontal";
import  ProductTileVertical from "@/components/ProductTile/ProductTileVertical";
import type { Props as VerticalProps } from "./ProductTileVertical";

type HorizontalProps = {
    // e.g., description?: string;
};

type Props = {
    variant?: "vertical" | "horizontal";
} & VerticalProps & HorizontalProps;

const ProductTile = forwardRef<HTMLAnchorElement | HTMLDivElement, Props>((props, ref) => {
    const { variant = "vertical", ...rest } = props;

    if (variant === "horizontal") {
      return <ProductTileHorizontal ref={ref as React.ForwardedRef<HTMLDivElement>} {...(rest as HorizontalProps)} />;
    }

    return <ProductTileVertical ref={ref as React.ForwardedRef<HTMLAnchorElement>} {...(rest as VerticalProps)} />;
});

export default ProductTile;