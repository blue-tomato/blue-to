import { resolve } from "node:path";
import dts from "unplugin-dts/vite";
import { type UserConfig, defineConfig, mergeConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

import { viteStaticCopy } from "vite-plugin-static-copy";

const config: UserConfig = {
	css: { modules: { localsConvention: "camelCase" } },
	plugins: [tsconfigPaths()],
	resolve: {
		alias: {
			"@": resolve(__dirname, "src"),
		},
	},
};

export default defineConfig(
	mergeConfig(config, {
		plugins: [
			dts({ bundleTypes: true }),
			viteStaticCopy({
				structured: true,
				targets: [
					{
						dest: "",
						src: "index.module.scss",
					},
					{
						dest: "",
						src: "src/index.module.scss",
					},
					{
						dest: "",
						src: "src/foundations/**/*.scss",
					},
				],
			}),
		],
		build: {
			outDir: "lib",
			lib: {
				entry: resolve(__dirname, "src/index.ts"),
				formats: ["es"],
			},
		},
	}),
);

export { config };
