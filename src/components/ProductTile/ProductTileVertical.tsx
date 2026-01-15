import classNames from "classnames";
import { forwardRef } from "react";
import Color from "./shared/Color";
import WishlistButton from "./shared/WishlistButton";
import Price from "./shared/Price";
import styles from "./ProductTileVertical.module.scss";
import Button from "@/components/Button";

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
  flag?: Flag;
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
      colors,
      sizes,
      flag,
      className,
      href,
      ...props
    },
    ref,
  ) => {
    const handleWishlistClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      e.stopPropagation();
      onWishlistClick?.(e);
    };

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

          {flag && (
            <div className={classNames(styles.flag, styles[flag.type])}>
              {flag.label}
            </div>
          )}

          {onWishlistClick && (
            <WishlistButton
              active={wishlistActive}
              onClick={handleWishlistClick}
            />
          )}
        </div>

        <div className={styles.infoContainer}>
          <span className={styles.brandName}>{brandName}</span>
          <h3 className={styles.productName}>{productName}</h3>

          <Price price={price} salePrice={salePrice} />

          {colors && colors.length > 0 && (
            <div className={styles.swatchContainer}>
              {colors.map((c, index) => (
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
            </div>
          )}

					{/* TODO: +4 if to much to be visible in one line */}

          {sizes && sizes.length > 0 && (
            <div className={styles.swatchContainer}>
           	{sizes.map((s, index) => (
				<Button variant="tertiary-grey" className={styles.sizeButton} key={index}>
					{s.label}
				</Button>
			))}

            </div>
          )}
        </div>
      </a>
    );
  },
);

export default ProductTileVertical;
