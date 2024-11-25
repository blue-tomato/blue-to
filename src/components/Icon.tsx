import icons from "@/foundations/icons";
import { get } from "es-toolkit/compat";
import type { Paths } from "type-fest";

type IconPath = Exclude<
	Paths<typeof icons>,
	"carrier" | "flag" | "functional" | "payment" | "social" | "support"
>;

type Props = React.ImgHTMLAttributes<HTMLImageElement> & {
	icon?: IconPath;
};

const Icon = ({ icon, ...props }: Props) => (
	<img src={get(icons, icon ?? "")} {...props} />
);

export default Icon;
