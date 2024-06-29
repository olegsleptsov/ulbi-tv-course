import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types/webpackConfig";

export const createLoaders = (options: BuildOptions) => {
  const { isDev } = options;

  const tsLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: /\.module./,
            localIdentName: isDev ? "[path][name]__[local]" : "[hash:base64:5]",
            namedExport: false,
          },
        },
      },
      "sass-loader",
    ],
  };

  return [tsLoader, cssLoader];
};
