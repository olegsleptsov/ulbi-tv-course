import { createLoaders } from "./createLeaders";
import { createPlugins } from "./createPlugins";
import { createResolvers } from "./createResolvers";
import { BuildOptions } from "./types/webpackConfig";

export const createWebpackConfig = (options: BuildOptions) => {
  const { mode, paths, isDev } = options;

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: "[name][contenthash].js",
      path: paths.build,
      clean: true,
    },
    devtool: isDev ? "inline-source-map" : undefined,

    plugins: createPlugins(paths),
    module: {
      rules: createLoaders(),
    },
    resolve: createResolvers(),
  };
};
