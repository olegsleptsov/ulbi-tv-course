import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer'
import { BuildOptions } from './types/webpackConfig';

export const createPlugins = ({ paths, isDev }: BuildOptions) => [
  new webpack.DefinePlugin({
    __IS_DEV__: JSON.stringify(isDev),
  }),
  new HtmlWebpackPlugin({
    template: paths.html,
  }),
  new MiniCssExtractPlugin({
    filename: 'css/[name].[contenthash:8].css',
    chunkFilename: 'css/[name].[contenthash:8].css',
  }),
  new webpack.ProgressPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  new BundleAnalyzerPlugin({
    openAnalyzer: false
  }),
];
