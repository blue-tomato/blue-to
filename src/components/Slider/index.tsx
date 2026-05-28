import classNames from "classnames";
import { debounce } from "es-toolkit";
import { Children, forwardRef, useCallback, useEffect, useMemo, useRef, useState } from "react";
import styles from "./index.module.scss";
import NavigationButton from "./NavigationButton";

type Props = React.HTMLAttributes<HTMLDivElement> & {
	columns?: 4 | 5;
	gap?: number;
	label?: string;
	mobileColumns?: 1 | 2 | 3;
	mobileGap?: number;
};

const Slider = forwardRef<HTMLDivElement, Props>(
	({ children, className, columns = 4, gap = 16, label, mobileColumns = 2, mobileGap = 8, ...props }, ref) => {
		const trackRef = useRef<HTMLUListElement>(null);
		const viewportRef = useRef<HTMLDivElement>(null);
		const [canScrollLeft, setCanScrollLeft] = useState(false);
		const [canScrollRight, setCanScrollRight] = useState(false);

		const updateScrollState = useCallback(() => {
			const el = trackRef.current;
			if (!el) return;
			setCanScrollLeft(el.scrollLeft > 2);
			setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 2);
		}, []);

		const updateNavAnchor = useCallback(() => {
			const track = trackRef.current;
			const viewport = viewportRef.current;
			if (!track || !viewport) return;
			const firstImg = track.querySelector<HTMLElement>("img, picture, video");
			if (!firstImg) {
				viewport.style.removeProperty("--slider-nav-top");
				return;
			}
			const imgRect = firstImg.getBoundingClientRect();
			const trackRect = track.getBoundingClientRect();
			const center = imgRect.top - trackRect.top + imgRect.height / 2;
			viewport.style.setProperty("--slider-nav-top", `${center}px`);
		}, []);

		const handleScroll = useMemo(() => debounce(updateScrollState, 50), [updateScrollState]);

		useEffect(() => {
			const el = trackRef.current;
			if (!el) return;

			updateScrollState();
			updateNavAnchor();

			const observer = new ResizeObserver(() => {
				requestAnimationFrame(() => {
					updateScrollState();
					updateNavAnchor();
				});
			});

			observer.observe(el);

			const firstImg = el.querySelector<HTMLImageElement>("img");
			const onLoad = () => updateNavAnchor();
			if (firstImg && !firstImg.complete) {
				firstImg.addEventListener("load", onLoad);
			}

			return () => {
				observer.disconnect();
				firstImg?.removeEventListener("load", onLoad);
			};
		}, [updateScrollState, updateNavAnchor]);

		const scroll = (direction: "next" | "previous") => {
			const el = trackRef.current;
			if (!el) return;
			const scrollAmount = direction === "next" ? el.clientWidth : -el.clientWidth;
			el.scrollBy({ left: scrollAmount, behavior: "smooth" });
		};

		return (
			<section ref={ref} aria-label={label} className={classNames(className, styles.wrapper)} {...props}>
				<div ref={viewportRef} className={styles.viewport}>
					<ul
						ref={trackRef}
						className={styles.track}
						style={
							{
								"--slider-columns": columns,
								"--slider-gap": `${gap}px`,
								"--slider-mobile-columns": mobileColumns,
								"--slider-mobile-gap": `${mobileGap}px`,
							} as React.CSSProperties
						}
						onScroll={handleScroll}
					>
						{Children.map(children, (child) => (
							<li className={styles.slide}>{child}</li>
						))}
					</ul>

					{canScrollLeft && (
						<NavigationButton
							className={styles.navigationPrevious}
							direction="previous"
							onClick={() => scroll("previous")}
						/>
					)}
					{canScrollRight && (
						<NavigationButton className={styles.navigationNext} direction="next" onClick={() => scroll("next")} />
					)}
				</div>
			</section>
		);
	},
);

export default Slider;
