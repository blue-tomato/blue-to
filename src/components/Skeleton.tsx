import classNames from "classnames";
import { forwardRef, useEffect, useState } from "react";
import styles from "./Skeleton.module.scss";

type Props = React.HTMLAttributes<HTMLDivElement> & {
	animation?: "pulse" | "wave" | "none";
	height?: string | number;
	loaded?: boolean;
	variant?: "text" | "circular" | "rectangular";
	width?: string | number;
};

const Skeleton = forwardRef<HTMLDivElement, Props>(
	(
		{ animation = "pulse", children, className, height, loaded = false, style, variant = "text", width, ...props },
		ref,
	) => {
		const [showContent, setShowContent] = useState(loaded);

		useEffect(() => {
			if (loaded) {
				const timer = setTimeout(() => setShowContent(true), 300);
				return () => clearTimeout(timer);
			}
			setShowContent(false);
			return undefined;
		}, [loaded]);

		if (showContent) {
			return <div className={styles.content}>{children}</div>;
		}

		return (
			<div
				ref={ref}
				className={classNames(
					className,
					styles.skeleton,
					styles[variant],
					animation !== "none" && styles[animation],
					loaded && styles.fadeOut,
				)}
				style={{
					width: typeof width === "number" ? `${width}px` : width,
					height: typeof height === "number" ? `${height}px` : height,
					...style,
				}}
				aria-hidden="true"
				{...props}
			/>
		);
	},
);

export default Skeleton;
