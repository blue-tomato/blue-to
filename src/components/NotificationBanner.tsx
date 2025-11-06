import classNames from "classnames";
import { forwardRef, type HTMLAttributes, type ReactNode } from "react";
import Icon from "@/components/Icon"; 
import styles from "./NotificationBanner.module.scss";

const icons = {
	error: <Icon className={styles.icon} icon="functional.attentionOutlineBlack" />,
	information: <Icon className={styles.icon} icon="functional.infoOutlineBlack" />,
	success: <Icon className={styles.icon} icon="functional.checkDefaultBlack" />,
};

type Props = HTMLAttributes<HTMLDivElement> & {
	children: ReactNode;
	type?: "error" | "information" | "success";
};

const NotificationBanner = forwardRef<HTMLDivElement, Props>(
	({ children, className, type = "information", ...props }, ref) => (
		<div
			ref={ref}
			className={classNames(
				styles.banner,
				{
					[styles.error]: type === "error",
					[styles.information]: type === "information",
					[styles.success]: type === "success",
				},
				className,
			)}
			{...props}
		>
			<div className={styles.icon}>{icons[type]}</div>

			<div>{children}</div>
		</div>
	),
);

export default NotificationBanner;