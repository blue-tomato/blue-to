import { resolve } from "node:path";
import libAssetsPlugin from "@laynezh/vite-plugin-lib-assets";
import dts from "unplugin-dts/vite";
import { type UserConfig, defineConfig, mergeConfig } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";
import tsconfigPaths from "vite-tsconfig-paths";

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
			libAssetsPlugin(),
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
			lib: {
				entry: resolve(__dirname, "src/index.ts"),
				formats: ["es"],
			},
			outDir: "lib",
		},
	}),
);

export { config };
