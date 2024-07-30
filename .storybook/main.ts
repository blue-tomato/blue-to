import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";

const config: StorybookConfig = {
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-interactions",
	],
	framework: "@storybook/react-vite",
	stories: ["../src/**/*.stories.@(ts|tsx)"],
	viteFinal: (config) =>
		mergeConfig(config, {
			css: { modules: { localsConvention: "camelCase" } },
		}),
};

export default config;
