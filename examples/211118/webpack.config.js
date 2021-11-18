const path = require("path");

module.exports = {
  entry: "./src/main.js",
  mode: "development",
  target: "web",
  output: {
    path: path.resolve(__dirname),
    filename: "bundle.js",
  }
};
