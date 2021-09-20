const path = require("path");
const BUILD_DIR = path.resolve(__dirname, "public/js");
const APP_DIR = path.resolve(__dirname, "src/client");

module.exports = () => {
  return {
    entry: APP_DIR + "/entry.js",
    output: {
      path: BUILD_DIR,
      publicPath: "/js/",
      chunkFilename: "[name].bundle.js",
      filename: "bundle.js",
    },
    devtool: "source-map",
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            {
              loader: "style-loader", // creates style nodes from JS strings
            },
            {
              loader: "css-loader", // translates CSS into CommonJS
            },
            {
              loader: "sass-loader", // compiles Sass to CSS
            },
          ],
        },
        {
          test: /\.jsx?/,
          include: APP_DIR,
          use: [
            {
              loader: "babel-loader",
              options: {
                presets: ["@babel/preset-env", "@babel/preset-react"],
                plugins: ["@babel/proposal-class-properties"],
              },
            },
          ],
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
    resolve: {
      extensions: [".js", ".jsx"],
    },
  };
};
