const express = require("express");
const app = express();
const parser = require("body-parser");
const compression = require("compression");
const staticMiddleware = express.static("dist");
const helmet = require("helmet");
const jijengeRouter = require("../../router");

const isProd = process.env.NODE_ENV === "production";
if (!isProd) {
  const webpack = require("webpack");
  const config = require("../../../../config/webpack.dev");
  const compiler = webpack(config);
  const webpackDevMiddleware = require("webpack-dev-middleware")(
    compiler,
    config.devServer
  );
  const webpackHotMiddleware = require("webpack-hot-middleware")(compiler);
  app.use(webpackDevMiddleware);
  app.use(webpackHotMiddleware);
}

app.use(parser.text());
app.use(compression());
app.use(staticMiddleware);
app.use(helmet());

app.use("/", jijengeRouter);

module.exports = app;
