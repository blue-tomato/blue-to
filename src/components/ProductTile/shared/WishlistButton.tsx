import Button from "@/components/Button";
import Icon from "@/components/Icon";
import styles from "./WishlistButton.module.scss";

type Props = {
  active?: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const WishlistButton = ({ active = false, onClick }: Props) => (
  <Button
    variant="secondary-white"
    className={styles.wishlistButton}
    onClick={onClick}
    aria-label={active ? "Remove from wishlist" : "Add to wishlist"}
  >
    <Icon icon={active ? "functional.heartFilledBlue" : "functional.heartFilledGrey"} />
  </Button>
);

export default WishlistButton;
