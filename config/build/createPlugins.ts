import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import { BuildOptions, BuildPaths } from "./types/webpackConfig";

export const createPlugins = ({ paths }: BuildOptions) => {
  return [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
  ];
};
