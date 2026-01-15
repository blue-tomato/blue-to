import classNames from "classnames";
import { forwardRef, useState } from "react";
import Color from "./shared/Color";
import WishlistButton from "./shared/WishlistButton";
import Price from "./shared/Price";
import styles from "./ProductTileVertical.module.scss";
import Button from "@/components/Button";

const MAX_VISIBLE = 5;

export type ColorOption = {
  color: string;
  imageUrl: string;
  active?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export type SizeOption = {
  label: string;
  active?: boolean;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

type Flag = {
  label: string;
  type: "default" | "sale" | "special";
};

export type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  brandName: string;
  productName: string;
  price: number;
  salePrice?: number;
  imageUrl: string;
  imageAlt: string;
  wishlistActive?: boolean;
  onWishlistClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  colors?: ColorOption[];
  sizes?: SizeOption[];
  flags?: Flag[];
  className?: string;
};

const ProductTileVertical = forwardRef<HTMLAnchorElement, Props>(
  (
    {
      brandName,
      productName,
      price,
      salePrice,
      imageUrl,
      imageAlt,
      wishlistActive = false,
      onWishlistClick,
      colors = [],
      sizes = [],
      flags = [],
      className,
      href,
      ...props
    },
    ref,
  ) => {
    const [isColorsExpanded, setIsColorsExpanded] = useState(false);
    const [isSizesExpanded, setIsSizesExpanded] = useState(false);

    const handleWishlistClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      e.stopPropagation();
      onWishlistClick?.(e);
    };

    const visibleColors = isColorsExpanded ? colors : colors.slice(0, MAX_VISIBLE);
    const remainingColors = colors.length - MAX_VISIBLE;

    const visibleSizes = isSizesExpanded ? sizes : sizes.slice(0, MAX_VISIBLE);
    const remainingSizes = sizes.length - MAX_VISIBLE;

    return (
      <a
        ref={ref}
        href={href}
        className={classNames(styles.tile, className)}
        aria-label={`${brandName} - ${productName}`}
        {...props}
      >
        <div className={styles.imageContainer}>
          <img src={imageUrl} alt={imageAlt} className={styles.productImage} />
          
          {flags.length > 0 && (
            <div className={styles.flagsContainer}>
              {flags.map((f, index) => (
                <div key={index} className={classNames(styles.flag, styles[f.type])}>
                  {f.label}
                </div>
              ))}
            </div>
          )}

          {onWishlistClick && (
            <WishlistButton active={wishlistActive} onClick={handleWishlistClick} />
          )}
        </div>

        <div className={styles.infoContainer}>
          <span className={styles.brandName}>{brandName}</span>
          <h3 className={styles.productName}>{productName}</h3>
          <Price price={price} salePrice={salePrice} />

          {colors.length > 0 && (
            <div className={classNames(styles.swatchContainer, { [styles.expanded]: isColorsExpanded })}>
              {visibleColors.map((c, index) => (
                <Color
                  key={index}
                  color={c.color}
                  active={c.active}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    c.onClick?.(e);
                  }}
                />
              ))}
              {!isColorsExpanded && remainingColors > 0 && (
                <button
                  type="button"
                  className={styles.moreLabel}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setIsColorsExpanded(true);
                  }}
                >
                  +{remainingColors} more
                </button>
              )}
            </div>
          )}

          {sizes.length > 0 && (
            <div className={classNames(styles.swatchContainer, { [styles.expanded]: isSizesExpanded })}>
              {visibleSizes.map((s, index) => (
                <Button 
                  variant="tertiary-grey" 
                  className={styles.sizeButton} 
                  key={index}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    s.onClick?.(e);
                  }}
                >
                  {s.label}
                </Button>
              ))}
              {!isSizesExpanded && remainingSizes > 0 && (
                <button
                  type="button"
                  className={styles.moreLabel}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setIsSizesExpanded(true);
                  }}
                >
                  +{remainingSizes} more
                </button>
              )}
            </div>
          )}
        </div>
      </a>
    );
  },
);

export default ProductTileVertical;