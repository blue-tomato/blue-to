import type { Preview } from "@storybook/react";
import "./preview.scss";
import DocsLinks from "./preview/DocsLinks";

const preview: Preview = {
	parameters: {
		docs: {
			container: DocsLinks,
		},
		layout: "padded",
	},
	tags: ["autodocs"],
};

export default preview;
