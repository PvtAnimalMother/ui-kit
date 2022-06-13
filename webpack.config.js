const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.ts",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
    libraryTarget: "umd",
    clean: true,
  },
  externals: {
    react: "react",
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.bundle\.ts$/,
        use: "bundle-loader",
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
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};
