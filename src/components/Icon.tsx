import classNames from "classnames";
import { get } from "es-toolkit/compat";
import { forwardRef } from "react";
import type { Paths } from "type-fest";
import icons from "@/foundations/icons";
import styles from "./Icon.module.scss";

type IconPath = Exclude<Paths<typeof icons>, "carrier" | "flag" | "functional" | "payment" | "social" | "support">;

type Props = React.ImgHTMLAttributes<HTMLImageElement> & {
	icon?: IconPath;
};

const Icon = forwardRef<HTMLImageElement, Props>(({ className, icon, ...props }, ref) => (
	<img ref={ref} className={classNames(className, styles.icon)} src={get(icons, icon ?? "")} {...props} />
));

export default Icon;
