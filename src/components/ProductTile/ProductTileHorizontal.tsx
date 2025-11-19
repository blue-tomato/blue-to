import classNames from "classnames";
import { forwardRef } from "react";
import Icon from "@/components/Icon";
import styles from "./ProductTileHorizontal.module.scss";

export type Props = React.HTMLAttributes<HTMLDivElement> & {
	brandName: string;
	productName: string;
	price: number;
	imageUrl: string;
	imageAlt: string;
	color: string;
	size: string;
	quantity: number;
	onQuantityChange?: (quantity: number) => void;
	onRemove?: () => void;
	className?: string;
};

const ProductTileHorizontal = forwardRef<HTMLDivElement, Props>(
	(
		{
			brandName,
			productName,
			price,
			imageUrl,
			imageAlt,
			color,
			size,
			quantity,
			onQuantityChange,
			onRemove,
			className,
			...props
		},
		ref,
	) => {
		const quantityOptions = Array.from({ length: 10 }, (_, i) => ({
			label: `${i + 1}`,
			value: i + 1,
		}));

		return (
			<div
				ref={ref}
				className={classNames(styles.tile, className)}
				{...props}
			>
				<img src={imageUrl} alt={imageAlt} className={styles.productImage} />

				<div className={styles.infoContainer}>
					<div className={styles.productDetails}>
						<p className={styles.brandName}>{brandName}</p>
						<p className={styles.productName}>{productName}</p>
						<div className={styles.attributes}>
							<span>Farbe: {color}</span>
							<span>Größe: {size}</span>
						</div>
					</div>
					<div className={styles.actionsContainer}>
						<div className={styles.actions}>
							<select
								value={quantity}
								onChange={(e) => onQuantityChange?.(Number(e.target.value))}
							>
								{quantityOptions.map(option => (
									<option key={option.value} value={option.value}>
										{option.label}
									</option>
								))}
							</select>
						</div>
						<div className={styles.priceContainer}>
							€ {price.toFixed(2).replace(".", ",")}
						</div>
					</div>

					{onRemove && (
						<button className={styles.removeButton} onClick={onRemove} aria-label="Remove product">
							<Icon icon="functional.closeDefaultBlack" />
						</button>
					)}
				</div>


			</div>
		);
	},
);

export default ProductTileHorizontal;