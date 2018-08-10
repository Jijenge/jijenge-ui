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

const staticMiddleware = express.static('dist'); 
server.use(staticMiddleware);

// const expressStaticGzip = require("express-static-gzip");
// server.use(expressStaticGzip("dist", {
//   enableBrotli: true
// }));

server.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '../index.html')));
// server.get('*', (req, res) => res.send(
// `
//   <html>
//   <head>
//     <meta charset="UTF-8">
//     <title>Jijenge</title>
//   </head>
//   <body>
//     <div id="root">
//       ${ReactDOMServer.renderToString(<App />)}
//     </div>

//     <script async src="/main-bundle.js"></script>
//     <!-- <script src="https://js.stripe.com/v3/"></script> -->
//     <script id="stripe-js" async src="https://js.stripe.com/v3/" ></script>
//   </body>
//   </html>
// `
// ));

const PORT = process.env.PORT || 6060; 

server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`); 
}); 
