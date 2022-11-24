const path = require("path");

module.exports = {
  entry: ["@babel/polyfill", "./src/main.js"],
  mode: "development",
  target: "web",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  output: {
    path: path.resolve(__dirname),
    filename: "bundle.js",
  }
};
