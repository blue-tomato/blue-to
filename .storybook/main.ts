import { resolve } from "node:path";
import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

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
			plugins: [tsconfigPaths()],
			resolve: {
				alias: {
					"@": resolve(__dirname, "../src"),
				},
			},
		}),
};

export default config;
