import type { Preview } from "@storybook/react";
import "./preview.scss";

const preview: Preview = {
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
};

export default preview;
