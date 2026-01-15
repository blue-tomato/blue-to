import { useEffect, useState } from "react";
import ProductTileVertical, { ColorOption } from "@/components/ProductTile/ProductTileVertical";
import type { StoryMeta } from "@/types";
import styles from "./ProductTileVertical.stories.module.scss";

const Docs: StoryMeta<typeof ProductTileVertical> = {
  title: "BLUETO/components/ProductTile/Vertical",
  component: ProductTileVertical,
  render: (props) => (
    <div className={styles.wrapper}>
      <ProductTileVertical {...props} />
    </div>
  ),
  args: {
    brandName: "Patagonia",
    productName: "P-6 Logo Responsibili T-Shirt",
    price: 80.95,
    imageUrl:
      "https://images.blue-tomato.com/is/image/bluetomato/305499878_front.jpg-D72T_m4XYvxrHJ86-ueTb6DnUss/305499878+front+jpg.jpg?$tsl$&wid=662&hei=882&fit=crop%2C1",
    imageAlt: "A man wearing a light green Patagonia t-shirt",
    href: "#",
  },
  parameters: {
    links: {
      confluence: "...",
      figma: "...",
    },
  },
};

export default Docs;

export const Default: StoryMeta<typeof ProductTileVertical> = {};

export const WithSale: StoryMeta<typeof ProductTileVertical> = {
  args: {
    salePrice: 70.95,
    flags: [{ label: "-12%", type: "sale" }],
  },
};

export const WithFlags: StoryMeta<typeof ProductTileVertical> = {
  args: {
    flags: [
      { label: "Neu", type: "default" },
      { label: "-20%", type: "sale" },
      { label: "Flag with long text test", type: "special" },
      { label: "Special Edition", type: "special" },
    ],
  },
};

export const WithColors: StoryMeta<typeof ProductTileVertical> = {
  args: {
    salePrice: 70.95,
    flags: [{ label: "-12%", type: "sale" }],
    colors: [
      {
        color: "#d82c2c",
        imageUrl:
          "https://images.blue-tomato.com/is/image/bluetomato/305499893_front.jpg-_qLzp3poLa1PJumH0qlPu758kpM/305499893+front+jpg.jpg?$tsl$&wid=662&hei=882&fit=crop%2C1",
      },
      {
        color: "#333333",
        imageUrl:
          "https://images.blue-tomato.com/is/image/bluetomato/305499878_front.jpg-D72T_m4XYvxrHJ86-ueTb6DnUss/305499878+front+jpg.jpg?$tsl$&wid=662&hei=882&fit=crop%2C1",
      },
      {
        color: "#ffffff",
        imageUrl:
          "https://images.blue-tomato.com/is/image/bluetomato/305499888_front.jpg-GbAxvgmiMiE3lxT-EuzKswZjQpg/305499888+front+jpg.jpg?$tsl$&wid=662&hei=882&fit=crop%2C1",
      },
      {
        color: "#b9e2c7",
        active: true,
        imageUrl:
          "https://images.blue-tomato.com/is/image/bluetomato/305499883_front.jpg-1AnoaRYeyR_DN2YL2w8iDGPNCA4/305499883+front+jpg.jpg?$tsl$&wid=662&hei=882&fit=crop%2C1",
      },
      { color: "#000", imageUrl: "https://images.blue-tomato.com/is/image/bluetomato/305499878_front.jpg" },
      { color: "#555", imageUrl: "https://images.blue-tomato.com/is/image/bluetomato/305499878_front.jpg" },
      { color: "#aaa", imageUrl: "https://images.blue-tomato.com/is/image/bluetomato/305499878_front.jpg" },
    ],
  },
  render: (args) => {
    const [colors, setColors] = useState<ColorOption[]>(args.colors || []);
    const initialImage = colors.find((c) => c.active)?.imageUrl ?? args.imageUrl;
    const [currentImageUrl, setCurrentImageUrl] = useState<string>(initialImage);

    const handleColorClick = (clickedIndex: number) => {
      const newColors = colors.map((color, index) => ({
        ...color,
        active: index === clickedIndex,
      }));
      setColors(newColors);
      setCurrentImageUrl(newColors[clickedIndex].imageUrl);
    };

    const colorsWithHandlers = colors.map((c, i) => ({
      ...c,
      onClick: () => handleColorClick(i),
    }));

    return (
      <div className={styles.wrapper}>
        <ProductTileVertical
          {...args}
          imageUrl={currentImageUrl}
          colors={colorsWithHandlers}
        />
      </div>
    );
  },
};

export const WithSizes: StoryMeta<typeof ProductTileVertical> = {
  args: {
    brandName: "Santa Cruz",
    productName: "Jordan Small Pro 2023 Snowboard",
    price: 569.95,
    imageUrl:
      "https://images.blue-tomato.com/is/image/bluetomato/305499878_front.jpg-D72T_m4XYvxrHJ86-ueTb6DnUss/305499878+front+jpg.jpg?$tsl$&wid=662&hei=882&fit=crop%2C1",
    imageAlt: "A Santa Cruz snowboard with custom graphics",
    sizes: [
      { label: "145" },
      { label: "148" },
      { label: "149" },
      { label: "152" },
      { label: "153W" },
      { label: "154" },
      { label: "155W" },
      { label: "156" },
      { label: "158W" },
      { label: "159" },
    ],
  },
  render: (args) => {
    const safeSizes = args.sizes ?? [];
    const [sizes, setSizes] = useState(safeSizes);

    useEffect(() => {
      setSizes(args.sizes ?? []);
    }, [args.sizes]);

    const handleSizeClick = (clickedIndex: number) => {
      const newSizes = sizes.map((size, index) => ({
        ...size,
        active: index === clickedIndex && !size.disabled,
      }));
      setSizes(newSizes);
    };

    const sizesWithHandlers = sizes.map((s, i) => ({
      ...s,
      onClick: () => handleSizeClick(i),
    }));

    return (
      <div className={styles.wrapper}>
        <ProductTileVertical {...args} sizes={sizesWithHandlers} />
      </div>
    );
  },
};

export const Wishlist: StoryMeta<typeof ProductTileVertical> = {
  args: {
    wishlistActive: false,
  },
  render: (args) => {
    const [isActive, setIsActive] = useState(!!args.wishlistActive);

    useEffect(() => {
      setIsActive(!!args.wishlistActive);
    }, [args.wishlistActive]);

    return (
      <div className={styles.wrapper}>
        <ProductTileVertical
          {...args}
          wishlistActive={isActive}
          onWishlistClick={() => setIsActive((prev) => !prev)}
        />
      </div>
    );
  },
};

export const MultipleProductsGrid: StoryMeta<typeof ProductTileVertical> = {
  render: (args) => {
    const [wishlist, setWishlist] = useState([false, true, false, false]);
    const toggleWishlist = (idx: number) => {
      const next = [...wishlist];
      next[idx] = !next[idx];
      setWishlist(next);
    };

    const [tile2Colors, setTile2Colors] = useState<ColorOption[]>([
      { color: "#333", imageUrl: args.imageUrl, active: true },
      { color: "#d82c2c", imageUrl: "https://images.blue-tomato.com/is/image/bluetomato/305499893_front.jpg" },
      { color: "#fff", imageUrl: "https://images.blue-tomato.com/is/image/bluetomato/305499888_front.jpg" },
      { color: "#b9e2c7", imageUrl: "https://images.blue-tomato.com/is/image/bluetomato/305499883_front.jpg" },
      { color: "#000", imageUrl: args.imageUrl },
      { color: "#555", imageUrl: args.imageUrl },
    ]);
    const [tile2Image, setTile2Image] = useState(args.imageUrl);

    const handleColorClick = (idx: number) => {
      setTile2Colors(tile2Colors.map((c, i) => ({ ...c, active: i === idx })));
      setTile2Image(tile2Colors[idx].imageUrl);
    };

    const [tile3Sizes, setTile3Sizes] = useState([
      { label: "S" }, { label: "M", active: true }, { label: "L" }, { label: "XL" }, { label: "XXL" }, { label: "3XL" }
    ]);

    const handleSizeClick = (idx: number) => {
      setTile3Sizes(tile3Sizes.map((s, i) => ({ ...s, active: i === idx })));
    };

    return (
      <div className={styles.gridContainer}>
        <ProductTileVertical
          {...args}
          brandName="Carhartt WIP"
          productName="Chase T-Shirt"
          flags={[{ label: "Neu", type: "default" }, { label: "-10%", type: "sale" }, { label: "Special Edition", type: "special" }]}
          wishlistActive={wishlist[0]}
          onWishlistClick={() => toggleWishlist(0)}
        />

        <ProductTileVertical
          {...args}
          imageUrl={tile2Image}
          brandName="Patagonia"
          productName="Responsibili-Tee"
          colors={tile2Colors.map((c, i) => ({ ...c, onClick: () => handleColorClick(i) }))}
          wishlistActive={wishlist[1]}
          onWishlistClick={() => toggleWishlist(1)}
        />

        <ProductTileVertical
          {...args}
          brandName="Santa Cruz"
          productName="Classic Dot Tee"
          sizes={tile3Sizes.map((s, i) => ({ ...s, onClick: () => handleSizeClick(i) }))}
          wishlistActive={wishlist[2]}
          onWishlistClick={() => toggleWishlist(2)}
        />

        <ProductTileVertical
          {...args}
          brandName="Vans"
          productName="Off The Wall Tee"
          wishlistActive={wishlist[3]}
          onWishlistClick={() => toggleWishlist(3)}
        />
      </div>
    );
  },
};