const path = require("path");

module.exports = {
  entry: ["./src/js/main.js"],
  mode: "development",
  target: "web",
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  output: {
    path: path.resolve(__dirname),
    filename: "bundle.js",
  }
};
