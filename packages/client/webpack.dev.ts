import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import "webpack-dev-server";

const config: webpack.Configuration = {
  mode: "development",
  entry: "./index.ts",
  devServer: {
    port: 9000,
  },
  plugins: [new HtmlWebpackPlugin()],
};

export default config;
