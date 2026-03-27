import { useEffect, useState } from "react";
import { Button, Skeleton } from "@/components";
import type { StoryMeta } from "@/types";
import styles from "./Skeleton.stories.module.scss";

const Docs: StoryMeta<typeof Skeleton> = {
	title: "BLUETO/components/Skeleton",
	component: Skeleton,
	args: {
		variant: "text",
		animation: "pulse",
		loaded: false,
	},
	argTypes: {
		variant: {
			control: "radio",
			options: ["text", "circular", "rectangular"],
		},
		animation: {
			control: "radio",
			options: ["pulse", "wave", "none"],
		},
		width: {
			control: "text",
			description: "Accepts any CSS value: number (`200`), percentage (`50%`), or CSS unit (`10em`, `20rem`).",
		},
		height: {
			control: "text",
			description: "Accepts any CSS value: number (`200`), percentage (`50%`), or CSS unit (`10em`, `20rem`).",
		},
	},
	parameters: {
		links: {
			confluence: "BIHnOQ",
		},
	},
};

const Default: StoryMeta<typeof Skeleton> = {};

const TextLines: StoryMeta<typeof Skeleton> = {
	render: (props) => (
		<div className={styles.container}>
			<Skeleton {...props} />
			<Skeleton {...props} />
			<Skeleton {...props} width="80%" />
		</div>
	),
};

const Circular: StoryMeta<typeof Skeleton> = {
	args: {
		variant: "circular",
		width: 64,
		height: 64,
	},
};

const Rectangular: StoryMeta<typeof Skeleton> = {
	args: {
		variant: "rectangular",
		width: 300,
		height: 200,
	},
};

const WithContent: StoryMeta<typeof Skeleton> = {
	render: (props) => {
		const [loaded, setLoaded] = useState(false);

		useEffect(() => {
			setLoaded(false);
		}, [props.animation]);

		return (
			<div className={styles.section}>
				<Button variant="secondary" onClick={() => setLoaded((prev) => !prev)}>
					{loaded ? "Reset" : "Simulate Load"}
				</Button>
				<div className={styles.tileWrapper}>
					<Skeleton variant="rectangular" loaded={loaded} animation={props.animation}>
						<img
							className={styles.tileImage}
							src="https://images.blue-tomato.com/is/image/bluetomato/305499878_front.jpg-D72T_m4XYvxrHJ86-ueTb6DnUss/305499878+front+jpg.jpg?$tsl$&wid=662&hei=882&fit=crop%2C1"
							alt="P-6 Logo Responsibili T-Shirt"
						/>
					</Skeleton>
					<div className={styles.tileInfo}>
						<Skeleton variant="text" width="40%" loaded={loaded} animation={props.animation}>
							<strong>Patagonia</strong>
						</Skeleton>
						<Skeleton variant="text" loaded={loaded} animation={props.animation}>
							<span>P-6 Logo Responsibili T-Shirt</span>
						</Skeleton>
						<Skeleton variant="text" width="30%" loaded={loaded} animation={props.animation}>
							<strong>€ 80.95</strong>
						</Skeleton>
					</div>
				</div>
			</div>
		);
	},
};

const WaveAnimation: StoryMeta<typeof Skeleton> = {
	render: (props) => (
		<div className={styles.container}>
			<Skeleton {...props} />
			<Skeleton {...props} />
			<Skeleton {...props} width="60%" />
		</div>
	),
	args: {
		animation: "wave",
	},
};

const PulseAnimation: StoryMeta<typeof Skeleton> = {
	render: (props) => (
		<div className={styles.container}>
			<Skeleton {...props} />
			<Skeleton {...props} width="90%" />
		</div>
	),
	args: {
		animation: "pulse",
	},
};

const ProductTileSkeleton: StoryMeta<typeof Skeleton> = {
	render: (props) => (
		<div className={styles.section}>
			<div>
				<div className={styles.label}>Mobile</div>
				<div className={styles.gridMobile}>
					{Array.from({ length: 4 }).map((_, i) => (
						<div key={`mobile-${i}`} className={styles.productTile}>
							<Skeleton {...props} variant="rectangular" />
							<Skeleton {...props} variant="text" width="40%" />
							<Skeleton {...props} variant="text" />
							<Skeleton {...props} variant="text" width="30%" />
						</div>
					))}
				</div>
			</div>
			<div>
				<div className={styles.label}>Desktop</div>
				<div className={styles.gridDesktop}>
					{Array.from({ length: 8 }).map((_, i) => (
						<div key={`desktop-${i}`} className={styles.productTile}>
							<Skeleton {...props} variant="rectangular" />
							<Skeleton {...props} variant="text" width="40%" />
							<Skeleton {...props} variant="text" />
							<Skeleton {...props} variant="text" width="30%" />
						</div>
					))}
				</div>
			</div>
		</div>
	),
};

export default Docs;
export {
	Default,
	TextLines,
	Circular,
	Rectangular,
	WithContent,
	WaveAnimation,
	PulseAnimation,
	ProductTileSkeleton,
};
