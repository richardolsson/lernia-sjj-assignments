const path = require("path");

module.exports = {
  entry: {
    index: "./src/js/pages/index.js",
  },
  mode: "development",
  target: "web",
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  output: {
    path: path.resolve(__dirname),
    filename: "[name].js",
  }
};
