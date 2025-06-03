import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";
import { config as viteConfig } from "../vite.config";

const config: StorybookConfig = {
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-interactions",
	],
	framework: "@storybook/react-vite",
	stories: ["../src/**/*.stories.@(ts|tsx)"],
	viteFinal: (config) => mergeConfig(config, viteConfig),
};

export default config;
