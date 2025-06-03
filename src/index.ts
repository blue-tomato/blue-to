import rawStyles from "./index.module.scss";

type Styles = {
	white: "#ffffff";
	grey1: "#333333";
	grey2: "#8f8f8f";
	grey3: "#cccccc";
	grey4: "#f4f4f4";
	yellow1: "#ffde00";
	yellow2: "#ffed73";
	yellow3: "#fff5b3";
	yellow4: "#fffad9";
	red1: "#ff4444";
	red2: "#ff9898";
	red3: "#ffc7c7";
	red4: "#ffe3e3";
	sky1: "#0099cc";
	sky2: "#73c7e3";
	sky3: "#b3e0f0";
	sky4: "#d9f0f7";
	blue1: "#2d69aa";
	blue2: "#8cadd0";
	blue3: "#c0d2e6";
	blue4: "#e0e9f1";
	petrol1: "#2fa9b4";
	petrol2: "#8dd0d6";
	petrol3: "#c1e5e9";
	petrol4: "#e0f2f4";
	mint1: "#21cdab";
	mint2: "#8ee4d1";
	mint3: "#c2f0e6";
	mint4: "#e0f8f2";
	green1: "#24a779";
	green2: "#87cfb5";
	green3: "#bde5d7";
	green4: "#def2eb";
	cyprus2: "#84a2a5";
	cyprus3: "#bcccce";
	olive2: "#b4c3b8";
	olive3: "#d6ded8";
	almond2: "#eee6e3";
	almond3: "#f6f1f0";
	purple2: "#aeaed2";
	purple3: "#d1d1e6";
	redpurple2: "#d59cd3";
	redpurple3: "#e8c9e7";
	rustyred2: "#d06f82";
	rustyred3: "#e8b7c0";
	coral2: "#ee7766";
	coral3: "#f9ccc6";
	lemonlime2: "#c1d301";
	lemonlime3: "#e9f84e";

	space4: "4px";
	space8: "8px";
	space16: "16px";
	space24: "24px";
	space32: "32px";
	space40: "40px";
	space48: "48px";
	space64: "64px";
};

const styles: Styles = rawStyles as Styles;

export { styles };
export {
	Breadcrumb,
	Button,
	CategoryButton,
	Checkbox,
	Icon,
	Pagination,
	RadioButton,
	RangeSlider,
	SizeButton,
	Tooltip,
} from "./components";
