const path = require("path");

module.exports = {
  mode: "production",
  entry: "./Modal.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "Modal.js",
    libraryTarget: "umd",
    globalObject: "this",
    library: "Modal",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
