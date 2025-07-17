import { resolve } from "node:path";
import libAssetsPlugin from "@laynezh/vite-plugin-lib-assets";
import dts from "unplugin-dts/vite";
import { defineConfig, mergeConfig, type UserConfig } from "vite";
import { externalizeDeps } from "vite-plugin-externalize-deps";
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
		build: {
			lib: {
				entry: resolve(__dirname, "src/index.ts"),
				formats: ["es"],
			},
			outDir: "lib",
		},
		plugins: [
			dts({ bundleTypes: true }),
			externalizeDeps({ deps: false }),
			libAssetsPlugin({
				outputPath: (_url, resourcePath) =>
					`assets/${resourcePath
						.replace(resolve(__dirname, "src"), "")
						.slice(1)
						.split("/")
						.slice(0, -1)
						.join("/")}`,
			}),
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
	}),
);

export { config };
