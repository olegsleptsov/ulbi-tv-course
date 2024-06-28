import { createDevServer } from "./createDevServer";
import { createLoaders } from "./createLeaders";
import { createPlugins } from "./createPlugins";
import { createResolvers } from "./createResolvers";
import { BuildOptions } from "./types/webpackConfig";
import webpack from "webpack";

export const createWebpackConfig = (
  options: BuildOptions
): webpack.Configuration => {
  const { mode, paths, isDev, port } = options;

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: "[name][contenthash].js",
      path: paths.build,
      clean: true,
    },
    plugins: createPlugins(options),
    module: {
      rules: createLoaders(),
    },
    resolve: createResolvers(),
    devtool: isDev ? "inline-source-map" : undefined,
    devServer: createDevServer(options),
  };
};
