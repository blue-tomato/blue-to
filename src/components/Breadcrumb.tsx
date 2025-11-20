import { forwardRef } from "react";
import styles from "./Breadcrumb.module.scss";
import Icon from "./Icon";

type BreadcrumbItem = {
	href: string;
	isLast?: boolean;
	text: string;
};

const BreadcrumbItem = ({ href, isLast, text }: BreadcrumbItem) => (
	<li className={styles.item} area-current={isLast ? "page" : undefined}>
		<a href={href}>{text}</a>

		{!isLast && <Icon className={styles.icon} icon="functional.arrowrightDefaultBlack" />}
	</li>
);

type Props = React.HTMLAttributes<HTMLElement> & {
	breadcrumbs?: {
		href: string;
		text: string;
	}[];
};

const Breadcrumb = forwardRef<HTMLElement, Props>(({ breadcrumbs, ...props }, ref) => (
	<nav ref={ref} aria-label="breadcrumb" {...props}>
		<ol className={styles.list}>
			{breadcrumbs?.map((item, index) => (
				<BreadcrumbItem
					key={item.href + item.text}
					href={item.href}
					text={item.text}
					isLast={index === breadcrumbs.length - 1}
				/>
			))}
		</ol>
	</nav>
));

export default Breadcrumb;
