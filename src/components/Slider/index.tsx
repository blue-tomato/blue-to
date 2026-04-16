import classNames from "classnames";
import { debounce } from "es-toolkit";
import { Children, forwardRef, useCallback, useEffect, useMemo, useRef, useState } from "react";
import styles from "./index.module.scss";
import NavigationButton from "./NavigationButton";

type Props = React.HTMLAttributes<HTMLDivElement> & {
	columns?: 2 | 3 | 4 | 5;
	gap?: number;
	label?: string;
	mobileColumns?: 2 | 3;
	peek?: boolean;
};

const Slider = forwardRef<HTMLDivElement, Props>(
	({ children, className, columns = 4, gap = 16, label, mobileColumns = 2, peek = true, ...props }, ref) => {
		const trackRef = useRef<HTMLUListElement>(null);
		const [canScrollLeft, setCanScrollLeft] = useState(false);
		const [canScrollRight, setCanScrollRight] = useState(false);

		const updateScrollState = useCallback(() => {
			const el = trackRef.current;
			if (!el) return;
			setCanScrollLeft(el.scrollLeft > 2);
			setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 2);
		}, []);

		const handleScroll = useMemo(() => debounce(updateScrollState, 50), [updateScrollState]);

		useEffect(() => {
			const el = trackRef.current;
			if (!el) return;

			updateScrollState();

			const observer = new ResizeObserver(() => {
				requestAnimationFrame(updateScrollState);
			});

			observer.observe(el);
			return () => observer.disconnect();
		}, [updateScrollState]);

		const scroll = (direction: "next" | "previous") => {
			const el = trackRef.current;
			if (!el) return;
			const scrollAmount = direction === "next" ? el.clientWidth : -el.clientWidth;
			el.scrollBy({ left: scrollAmount, behavior: "smooth" });
		};

		return (
			<section ref={ref} aria-label={label} className={classNames(className, styles.wrapper)} {...props}>
				<div className={styles.viewport}>
					<ul
						ref={trackRef}
						className={styles.track}
						style={
							{
								"--slider-columns": columns,
								"--slider-gap": `${gap}px`,
								"--slider-mobile-columns": mobileColumns,
								"--slider-peek": peek ? 1 : 0,
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
