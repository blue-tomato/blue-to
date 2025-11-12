import { forwardRef } from "react";

type Props = {};

const ProductTileHorizontal =  forwardRef<HTMLDivElement, Props>((props, ref) => {
  return <div ref={ref} {...props}>Product Tile Horizontal</div>;
});

export default ProductTileHorizontal;