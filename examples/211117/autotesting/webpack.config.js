const path = require("path");

module.exports = {
  entry: "./src/main.js",
  mode: "production",
  target: "web",
  output: {
    path: path.resolve(__dirname),
    filename: "bundle.js",
  }
};
