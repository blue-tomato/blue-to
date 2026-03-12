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
				className,
				styles.wrapper,
				type === "error" && styles.error,
				type === "information" && styles.information,
				type === "success" && styles.success,
			)}
			{...props}
		>
			<div className={styles.icon}>{icons[type]}</div>

			<div>{children}</div>
		</div>
	),
);

export default NotificationBanner;
