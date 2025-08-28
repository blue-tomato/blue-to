import type { Preview } from "@storybook/react-vite";
import "./preview.scss";

const preview: Preview = {
	parameters: {
		layout: "padded",
	},
	tags: ["autodocs"],
};

export default preview;
