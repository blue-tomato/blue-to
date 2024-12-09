import type { Meta } from "@storybook/react";
import BrandlogosStory from "./BrandlogosStory";
import BreakpointsStory from "./BreakpointsStory";
import ColorsStory from "./ColorsStory";
import IconsStory from "./IconsStory";
import ResponsiveExampleStory from "./ResponsiveExampleStory";
import SpacingStory from "./SpacingStory";
import TypographyStory from "./TypographyStory";

const Docs: Meta<typeof BrandlogosStory> = {
	title: "BLUETO/foundations",
	tags: ["!autodocs"],
};

const Brandlogos: Meta<typeof BrandlogosStory> = {
	render: BrandlogosStory,
};

const Breakpoints: Meta<typeof BreakpointsStory> = {
	render: BreakpointsStory,
};

const Colors: Meta<typeof ColorsStory> = { render: ColorsStory };

const Icons: Meta<typeof IconsStory> = { render: IconsStory };

const ResponsiveExample: Meta<typeof ResponsiveExampleStory> = {
	render: ResponsiveExampleStory,
};

const Spacing: Meta<typeof SpacingStory> = { render: SpacingStory };

const Typography: Meta<typeof TypographyStory> = {
	render: TypographyStory,
};

export default Docs;
export {
	Brandlogos,
	Breakpoints,
	Colors,
	Icons,
	ResponsiveExample,
	Spacing,
	Typography,
};
