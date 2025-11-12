import type { StoryMeta } from "@/types";
import { useEffect, useState } from "react";
import styles from "./ProductTileVertical.stories.module.scss";
import ProductTileVertical from "@/components/ProductTile/ProductTileVertical";

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
		imageUrl: "https://images.blue-tomato.com/is/image/bluetomato/304865621_front.jpg-df9XFiJLasGIipVIDyAJhE5_nt0/304865621+front+jpg.jpg?$tsl$&wid=330&hei=440&fit=crop%2C1",
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
		flag: { label: "-12%", type: "sale" },
	},
};

export const WithColors: StoryMeta<typeof ProductTileVertical> = {
	args: {
		salePrice: 70.95,
		flag: { label: "-12%", type: "sale" },
		colors: [
			{ color: "#d82c2c" },
			{ color: "#333333" },
			{ color: "#ffffff" },
			{ color: "#b9e2c7", active: true },
			{ color: "#4caf50" },
			{ color: "#ffeb3b" },
			{ color: "#2196f3" },
			{ color: "#9c27b0" },
			{ color: "#ff9800" },
			{ color: "#ffc107" },
			{ color: "#795548" },
			{ color: "#607d8b" },
		],
	},
	render: (args) => {
		const [colors, setColors] = useState(args.colors || []);

		useEffect(() => {
			setColors(args.colors || []);
		}, [args.colors]);

		const handleColorClick = (clickedIndex: number) => {
			const newColors = colors.map((color, index) => ({
				...color,
				active: index === clickedIndex,
			}));
			setColors(newColors);
		};

		const colorsWithHandlers = colors.map((c, i) => ({
			...c,
			onClick: () => handleColorClick(i),
		}));

		return (
			<div className={styles.wrapper}>
				<ProductTileVertical {...args} colors={colorsWithHandlers} />
			</div>
		);
	},
};

export const WithSizes: StoryMeta<typeof ProductTileVertical> = {
	args: {
		brandName: "Santa Cruz",
		productName: "Jordan Small Pro 2023 Snowboard",
		price: 569.95,
		imageUrl: "https://images.blue-tomato.com/is/image/bluetomato/304397354_front.jpg-zUy7abQXTsFfwzjkw0TzCydGmEg/304397354+front+jpg.jpg?$tsl$&wid=330&hei=440&fit=crop%2C1",
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
		const [sizes, setSizes] = useState(args.sizes || []);

		useEffect(() => {
			setSizes(args.sizes || []);
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