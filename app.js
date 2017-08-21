var express = require('express');
var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config')

var app = express();
var port = 3000

var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, { publicPath: config.output.publicPath }));
app.use(webpackHotMiddleware(compiler))

app.use(express.static('./public'));

app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("server start - " + port)
  }
})