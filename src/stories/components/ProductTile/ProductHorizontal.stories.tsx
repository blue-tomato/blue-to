import { useState } from "react";
import ProductTileHorizontal from "@/components/ProductTile/ProductTileHorizontal";
import type { StoryMeta } from "@/types";
import styles from "./ProductTileHorizontal.stories.module.scss";

const Docs: StoryMeta<typeof ProductTileHorizontal> = {
  title: "BLUETO/components/ProductTile/Horizontal",
  component: ProductTileHorizontal,
  args: {
    brandName: "Nike",
    productName: "Zoom Janoski Canvas Premium Skateschuhe",
    price: 89.95,
    imageUrl:
      "https://images.blue-tomato.com/is/image/bluetomato/305011128_front.jpg-fqby-dYy42g8wuknk5UgMAnj_4E/Franchise+Handschuhe.jpg?$tsl$&wid=105&hei=140&fit=crop%2C1",
    imageAlt: "A person wearing a colorful sweatshirt",
    color: "Watermelon/BLK/Watermelon",
    size: "EU Size - 39.0",
    quantity: 1,
  },
};

export default Docs;

export const Default: StoryMeta<typeof ProductTileHorizontal> = {
  render: (args) => {
    const [quantity, setQuantity] = useState(args.quantity);

    const handleRemove = () => {
      alert("Product removed!");
    };

    return (
      <div className={styles.wrapper}>
        <ProductTileHorizontal
          {...args}
          quantity={quantity}
          onQuantityChange={setQuantity}
          onRemove={handleRemove}
        />
      </div>
    );
  },
};

export const Large: StoryMeta<typeof ProductTileHorizontal> = {
  args: {
    ...Docs.args,
    productName: "Zoom Janoski Canvas Premium Skateschuhe",
    imageUrl: "https://images.blue-tomato.com/is/image/bluetomato/305011128_front.jpg-fqby-dYy42g8wuknk5UgMAnj_4E/Franchise+Handschuhe.jpg?$tsl$&wid=138&hei=184&fit=crop%2C1",
    price: 59.95,
  },
  render: (args) => {
    const [quantity, setQuantity] = useState(args.quantity);

    const handleRemove = () => {
      alert("Product removed!");
    };

    return (
      <div className={styles.wrapperLarge}>
        <ProductTileHorizontal
          {...args}
          quantity={quantity}
          onQuantityChange={setQuantity}
          onRemove={handleRemove}
        />
      </div>
    );
  },
};
