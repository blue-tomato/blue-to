import classNames from "classnames";
import styles from "./Price.module.scss";

type Props = {
  price: number;
  salePrice?: number;
  className?: string;
};

const Price = ({ price, salePrice, className }: Props) => {
  if (salePrice && salePrice < price) {
    return (
      <div className={classNames(styles.priceContainer, className)}>
        <span className={styles.priceOriginal}>€ {price.toFixed(2).replace(".", ",")}</span>
        <span className={styles.salePrice}>€ {salePrice.toFixed(2).replace(".", ",")}</span>
      </div>
    );
  }

  return <div className={classNames(styles.priceContainer, className)}>€ {price.toFixed(2).replace(".", ",")}</div>;
};

export default Price;
