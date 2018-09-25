import express from 'express'; 
import path from 'path';
const server = express(); 
// import React from 'react';
// import ReactDOMServer from 'react-dom/server'; 
// import App from '../app.js';

const isProd = process.env.NODE_ENV === 
"production"
if (!isProd) {
const webpack = require('webpack'); 
const config = require('../../config/webpack.dev');
const compiler = webpack(config); 
const webpackDevMiddleware = require('webpack-dev-middleware')(
  compiler,
  config.devServer
);
const webpackHotMiddleware = require('webpack-hot-middleware')(compiler);
server.use(webpackDevMiddleware); 
server.use(webpackHotMiddleware);

}

const compression = require('compression');
server.use(compression()); 

const staticMiddleware = express.static('dist'); 
server.use(staticMiddleware);

// const expressStaticGzip = require("express-static-gzip");
// server.use(expressStaticGzip("dist", {
//   enableBrotli: true
// }));

server.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '../index.html')));

const PORT = process.env.PORT || 6060; 

server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`); 
}); 
