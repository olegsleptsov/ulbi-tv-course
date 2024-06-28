import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import { BuildPaths } from "./types/webpackConfig";

export const createPlugins = ({ html }: BuildPaths) => {
  return [
    new HtmlWebpackPlugin({ template: html }),
    new webpack.ProgressPlugin(),
  ];
};
