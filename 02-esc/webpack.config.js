const path = require("path");

module.exports = {
  entry: "./src/js/main.js",
  mode: "production",
  target: "web",
  output: {
    path: path.resolve(__dirname),
    filename: "static/bundle.js",
  }
};
