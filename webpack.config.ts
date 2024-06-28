import path from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";

const config: webpack.Configuration = {
  mode: "production",
  entry: "./src/index.ts",
  output: {
    filename: "[name][contenthash].js",
    path: path.resolve(__dirname, "build"),
    clean: true,
  },
  devtool: "inline-source-map",

  plugins: [new HtmlWebpackPlugin(), new webpack.ProgressPlugin()],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};

export default config;
