const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MinifyPlugin = require("babel-minify-webpack-plugin");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BrotliPlugin = require("brotli-webpack-plugin");

module.exports = env => {
  return {
    entry: {
      index: ["./src/index.js"]
    },
    mode: "production",
    output: {
      filename: "[name]-bundle.js",
      chunkFilename: "[name]-chunk.js",
      path: path.resolve(__dirname, "../dist"),
      publicPath: "/"
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          use: [
            {
              loader: "babel-loader"
            }
          ],
          exclude: /node_modules/
        },
        // {
        //   test: /\.css$/,
        //   use: ExtractTextPlugin.extract({
        //     fallback: "style-loader",
        //     use: {
        //       loader: "css-loader",
        //       options: {
        //         minimize: true
        //       }
        //     }
        //   })
        // },
        // {
        //   test: /\.(sass|scss)$/,
        //   use:  ExtractTextPlugin.extract({
        //     fallback: "style-loader",
        //     use: {
        //       loader: "sass-loader",
        //       options: {
        //         minimize: true
        //       }
        //     }
        //   })
        // },
        {
          test: /\.css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader
            },
            {
              loader: "css-loader"
            }
          ]
        },
        {
          test: /\.(sass|scss)$/,
          use: [
            // fallback to style-loader in development
            process.env.NODE_ENV !== "production"
              ? "style-loader"
              : MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader"
          ]
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader",
              options: {
                attrs: ["img:src"]
              }
            }
          ]
        },
        {
          test: /\.(jpg|gif|png|jpeg)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                //Images folder in the src directory
                name: "images/[name].[ext]"
              }
            }
          ]
        },
        {
          test: /\.mp4$/,
          use: [
            {
              loader: "file-loader",
              options: {
                //Images folder in the src directory
                name: "videos/[name].[ext]"
              }
            }
          ]
        }
      ]
    },
    plugins: [
      // new ExtractTextPlugin("[name].css"),
      new OptimizeCSSAssetsPlugin({
        assetNameRegExp: /\.css$/g,
        cssProcessor: require("cssnano"),
        cssProcessorOptions: {
          discardComments: {
            removeAll: true
          }
        },
        canPrint: true
      }),
      new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: JSON.stringify(env.NODE_ENV)
        }
      }),
      new webpack.NamedModulesPlugin(),
      new HTMLWebpackPlugin({
        template: "src/index.html",
        inject: true,
        title: "Jijenge"
      }),
      new MiniCssExtractPlugin({
        filename: "[name].css"
      }),
      new UglifyJSPlugin(),
      new CompressionPlugin({
        algorithm: "gzip"
      }),
      new BrotliPlugin()
    ]
  };
};
