import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-interactions",
	],
	framework: "@storybook/react-vite",
	stories: ["../src/**/*.stories.@(ts|tsx)"],
};

export default config;
