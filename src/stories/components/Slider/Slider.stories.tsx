import ProductTileVertical from "@/components/ProductTile/ProductTileVertical";
import Slider from "@/components/Slider";
import type { StoryMeta } from "@/types";
import styles from "./Slider.stories.module.scss";

const placeholderColors = ["#6b7fd7", "#e07c5a", "#5ab89e", "#d4a843", "#c75b8e", "#5cbcd6", "#8b6bbf", "#d6655a"];

const products = [
	{
		brandName: "Volcom Super Extended Brand Collection",
		productName: "Pocket Dial Ultra Long Edition T-Shirt With Extra Details",
		price: 34.95,
		salePrice: 29.95,
		imageUrl:
			"https://images.blue-tomato.com/is/image/bluetomato/305499878_front.jpg-D72T_m4XYvxrHJ86-ueTb6DnUss/305499878+front+jpg.jpg?$tsl$&wid=662&hei=882&fit=crop%2C1",
		imageAlt: "Volcom Pocket Dial T-Shirt",
		href: "#",
		flags: [{ label: "-14%", type: "sale" as const }],
	},
	{
		brandName: "A.LAB",
		productName: "Jerry Womens Boxy T-Shirt",
		price: 39.95,
		salePrice: 29.95,
		imageUrl:
			"https://images.blue-tomato.com/is/image/bluetomato/305499893_front.jpg-_qLzp3poLa1PJumH0qlPu758kpM/305499893+front+jpg.jpg?$tsl$&wid=662&hei=882&fit=crop%2C1",
		imageAlt: "A.LAB Jerry Womens Boxy T-Shirt",
		href: "#",
		flags: [{ label: "2 Tees Fur 40", type: "special" as const }],
	},
	{
		brandName: "Carhartt WIP",
		productName: "No Play Longsleeve",
		price: 54.95,
		salePrice: 39.95,
		imageUrl:
			"https://images.blue-tomato.com/is/image/bluetomato/305499888_front.jpg-GbAxvgmiMiE3lxT-EuzKswZjQpg/305499888+front+jpg.jpg?$tsl$&wid=662&hei=882&fit=crop%2C1",
		imageAlt: "Carhartt WIP No Play Longsleeve",
		href: "#",
		flags: [{ label: "-27%", type: "sale" as const }],
	},
	{
		brandName: "Iriedaily",
		productName: "Square Flowers T-Shirt",
		price: 37.95,
		salePrice: 29.95,
		imageUrl:
			"https://images.blue-tomato.com/is/image/bluetomato/305499883_front.jpg-1AnoaRYeyR_DN2YL2w8iDGPNCA4/305499883+front+jpg.jpg?$tsl$&wid=662&hei=882&fit=crop%2C1",
		imageAlt: "Iriedaily Square Flowers T-Shirt",
		href: "#",
		flags: [{ label: "-20%", type: "sale" as const }],
	},
	{
		brandName: "Patagonia",
		productName: "P-6 Logo Responsibili T-Shirt",
		price: 1299.95,
		salePrice: 999.95,
		imageUrl:
			"https://images.blue-tomato.com/is/image/bluetomato/305499878_front.jpg-D72T_m4XYvxrHJ86-ueTb6DnUss/305499878+front+jpg.jpg?$tsl$&wid=662&hei=882&fit=crop%2C1",
		imageAlt: "Patagonia P-6 Logo Responsibili T-Shirt",
		href: "#",
		flags: [{ label: "-11%", type: "sale" as const }],
	},
	{
		brandName: "Santa Cruz",
		productName: "Classic Dot Tee",
		price: 34.95,
		salePrice: 27.95,
		imageUrl:
			"https://images.blue-tomato.com/is/image/bluetomato/305499893_front.jpg-_qLzp3poLa1PJumH0qlPu758kpM/305499893+front+jpg.jpg?$tsl$&wid=662&hei=882&fit=crop%2C1",
		imageAlt: "Santa Cruz Classic Dot Tee",
		href: "#",
		flags: [{ label: "-20%", type: "sale" as const }],
	},
	{
		brandName: "Vans",
		productName: "Off The Wall Tee",
		price: 39.95,
		salePrice: 29.95,
		imageUrl:
			"https://images.blue-tomato.com/is/image/bluetomato/305499888_front.jpg-GbAxvgmiMiE3lxT-EuzKswZjQpg/305499888+front+jpg.jpg?$tsl$&wid=662&hei=882&fit=crop%2C1",
		imageAlt: "Vans Off The Wall Tee",
		href: "#",
		flags: [{ label: "-25%", type: "sale" as const }],
	},
	{
		brandName: "Burton",
		productName: "Classic Mountain Tee",
		price: 44.95,
		salePrice: 34.95,
		imageUrl:
			"https://images.blue-tomato.com/is/image/bluetomato/305499883_front.jpg-1AnoaRYeyR_DN2YL2w8iDGPNCA4/305499883+front+jpg.jpg?$tsl$&wid=662&hei=882&fit=crop%2C1",
		imageAlt: "Burton Classic Mountain Tee",
		href: "#",
		flags: [{ label: "-22%", type: "sale" as const }],
	},
	{
		brandName: "Roxy",
		productName: "Whole Hearted Tee",
		price: 27.95,
		salePrice: 19.95,
		imageUrl:
			"https://images.blue-tomato.com/is/image/bluetomato/305499878_front.jpg-D72T_m4XYvxrHJ86-ueTb6DnUss/305499878+front+jpg.jpg?$tsl$&wid=662&hei=882&fit=crop%2C1",
		imageAlt: "Roxy Whole Hearted Tee",
		href: "#",
		flags: [{ label: "-29%", type: "sale" as const }],
	},
	{
		brandName: "Element",
		productName: "Blazin Tee",
		price: 32.95,
		salePrice: 24.95,
		imageUrl:
			"https://images.blue-tomato.com/is/image/bluetomato/305499893_front.jpg-_qLzp3poLa1PJumH0qlPu758kpM/305499893+front+jpg.jpg?$tsl$&wid=662&hei=882&fit=crop%2C1",
		imageAlt: "Element Blazin Tee",
		href: "#",
		flags: [{ label: "-24%", type: "sale" as const }],
	},
];

const topics = [
	{
		label: "Neue Damen Snowboard Anoraks mit sehr langem Namen für drei Zeilen Umbruch",
		imageUrl:
			"https://images.blue-tomato.com/is/image/bluetomato/305499878_front.jpg-D72T_m4XYvxrHJ86-ueTb6DnUss/305499878+front+jpg.jpg?$tsl$&wid=662&hei=882&fit=crop%2C1",
	},
	{
		label: "Home & Lifestyle",
		imageUrl:
			"https://images.blue-tomato.com/is/image/bluetomato/305499893_front.jpg-_qLzp3poLa1PJumH0qlPu758kpM/305499893+front+jpg.jpg?$tsl$&wid=662&hei=882&fit=crop%2C1",
	},
	{
		label: "Shoes",
		imageUrl:
			"https://images.blue-tomato.com/is/image/bluetomato/305499888_front.jpg-GbAxvgmiMiE3lxT-EuzKswZjQpg/305499888+front+jpg.jpg?$tsl$&wid=662&hei=882&fit=crop%2C1",
	},
	{
		label: "Skate",
		imageUrl:
			"https://images.blue-tomato.com/is/image/bluetomato/305499883_front.jpg-1AnoaRYeyR_DN2YL2w8iDGPNCA4/305499883+front+jpg.jpg?$tsl$&wid=662&hei=882&fit=crop%2C1",
	},
	{
		label: "Accessories",
		imageUrl:
			"https://images.blue-tomato.com/is/image/bluetomato/305499878_front.jpg-D72T_m4XYvxrHJ86-ueTb6DnUss/305499878+front+jpg.jpg?$tsl$&wid=662&hei=882&fit=crop%2C1",
	},
	{
		label: "Snowboard",
		imageUrl:
			"https://images.blue-tomato.com/is/image/bluetomato/305499893_front.jpg-_qLzp3poLa1PJumH0qlPu758kpM/305499893+front+jpg.jpg?$tsl$&wid=662&hei=882&fit=crop%2C1",
	},
	{
		label: "Surf",
		imageUrl:
			"https://images.blue-tomato.com/is/image/bluetomato/305499888_front.jpg-GbAxvgmiMiE3lxT-EuzKswZjQpg/305499888+front+jpg.jpg?$tsl$&wid=662&hei=882&fit=crop%2C1",
	},
];

const Docs: StoryMeta<typeof Slider> = {
	title: "BLUETO/components/Slider",
	component: Slider,
	args: {
		columns: 4,
		gap: 16,
		mobileColumns: 2,
		peek: true,
	},
	parameters: {
		links: {
			confluence: "...",
			figma: "...",
		},
	},
};

export default Docs;

export const Default: StoryMeta<typeof Slider> = {
	render: (args) => (
		<div className={styles.container}>
			<Slider {...args}>
				{placeholderColors.map((color) => (
					<div key={color} className={styles.placeholderCard} style={{ backgroundColor: color }}>
						{color}
					</div>
				))}
			</Slider>
		</div>
	),
};

export const ProductSlider: StoryMeta<typeof Slider> = {
	args: {
		columns: 5,
		label: "Recommended products",
	},
	render: (args) => (
		<div className={styles.container}>
			<Slider {...args}>
				{products.map((product) => (
					<ProductTileVertical key={`${product.brandName}-${product.productName}`} {...product} />
				))}
			</Slider>
		</div>
	),
};

export const TopicSlider: StoryMeta<typeof Slider> = {
	args: {
		columns: 4,
		label: "Shop by category",
	},
	render: (args) => (
		<div className={styles.container}>
			<Slider {...args}>
				{topics.map((topic) => (
					<div key={topic.label} className={styles.topicCard}>
						<img alt={topic.label} className={styles.topicImage} src={topic.imageUrl} />
						<span className={styles.topicLabel}>{topic.label}</span>
					</div>
				))}
			</Slider>
		</div>
	),
};

export const FewItems: StoryMeta<typeof Slider> = {
	render: (args) => (
		<div className={styles.container}>
			<Slider {...args}>
				{placeholderColors.slice(0, 2).map((color) => (
					<div key={color} className={styles.placeholderCard} style={{ backgroundColor: color }}>
						{color}
					</div>
				))}
			</Slider>
		</div>
	),
};

export const EndReached: StoryMeta<typeof Slider> = {
	args: {
		columns: 4,
		label: "Sale products",
		mobileColumns: 2,
	},
	render: (args) => (
		<div className={styles.container}>
			<Slider {...args}>
				{products.slice(0, 6).map((product) => (
					<ProductTileVertical key={`${product.brandName}-${product.productName}`} {...product} />
				))}
			</Slider>
		</div>
	),
};
