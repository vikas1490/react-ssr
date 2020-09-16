const path = require("path");

module.exports = {
  target: "node",
  entry: "./src/client/client.js",
  output: {
    filename: "client_bundle.js",
    path: path.resolve(__dirname, "build/public"),
    publicPath: "/build/public",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js/,
        loader: "babel-loader",
        exclude: "/node_modules",
        options: {
          presets: ["@babel/preset-react", "@babel/preset-env"],
        },
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};
