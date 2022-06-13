const path = require("path");
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/index.ts",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
    libraryTarget: "umd",
    clean: true,
  },
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
    library: "ui-kit",
    libraryExport: "default",
    libraryTarget: "umd",
    umdNamedDefine: true,
    globalObject: "this",
  },
  externals: {
    react: "react",
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        use: ["babel-loader", "ts-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.(svg|png|gif|jpg)$/,
        use: "file-loader",
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        use: "file-loader",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [new ESLintPlugin({ extensions: ["ts", "tsx"] })],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};
