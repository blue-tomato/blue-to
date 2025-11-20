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
		imageUrl: "https://images.blue-tomato.com/is/image/bluetomato/305499878_front.jpg-D72T_m4XYvxrHJ86-ueTb6DnUss/305499878+front+jpg.jpg?$tsl$&wid=662&hei=882&fit=crop%2C1",
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
			{
				color: "#d82c2c",
				imageUrl: "https://images.blue-tomato.com/is/image/bluetomato/305499893_front.jpg-_qLzp3poLa1PJumH0qlPu758kpM/305499893+front+jpg.jpg?$tsl$&wid=662&hei=882&fit=crop%2C1",
			},
			{
				color: "#333333",
				imageUrl: "https://images.blue-tomato.com/is/image/bluetomato/305499878_front.jpg-D72T_m4XYvxrHJ86-ueTb6DnUss/305499878+front+jpg.jpg?$tsl$&wid=662&hei=882&fit=crop%2C1",
			},
			{
				color: "#ffffff",
				imageUrl: "https://images.blue-tomato.com/is/image/bluetomato/305499888_front.jpg-GbAxvgmiMiE3lxT-EuzKswZjQpg/305499888+front+jpg.jpg?$tsl$&wid=662&hei=882&fit=crop%2C1",
			},
			{
				color: "#b9e2c7",
				active: true,
				imageUrl: "https://images.blue-tomato.com/is/image/bluetomato/305499883_front.jpg-1AnoaRYeyR_DN2YL2w8iDGPNCA4/305499883+front+jpg.jpg?$tsl$&wid=662&hei=882&fit=crop%2C1",
			},
		],
	},
	render: (args) => {
		const [colors, setColors] = useState(args.colors || []);
		const [currentImageUrl, setCurrentImageUrl] = useState(args.imageUrl);

		useEffect(() => {
			setColors(args.colors || []);
			const activeColor = args.colors?.find(c => c.active);
			if (activeColor) {
				setCurrentImageUrl(activeColor.imageUrl);
			}
		}, [args.colors]);

		const handleColorClick = (clickedIndex: number) => {
			const newColors = colors.map((color, index) => ({
				...color,
				active: index === clickedIndex,
			}));
			setColors(newColors);
			setCurrentImageUrl(colors[clickedIndex].imageUrl);
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
		imageUrl: "https://images.blue-tomato.com/is/image/bluetomato/305499878_front.jpg-D72T_m4XYvxrHJ86-ueTb6DnUss/305499878+front+jpg.jpg?$tsl$&wid=662&hei=882&fit=crop%2C1",
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