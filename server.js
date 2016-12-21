// Require our dependencies
var express = require('express'),
  http = require('http'),
  routes = require('./routes'),
  config = require('./config');

// Create an express instance and set a port variable
var app = express();
var port = process.env.PORT || 8080;

// Disable etag headers on responses
app.disable('etag');

// Integration of webpack-dev-middleware to compile react on runtime
// see plugin description
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');
var compiler = webpack(webpackConfig);

app.use(require("webpack-dev-middleware")(compiler, {
    noInfo: true, publicPath: webpackConfig.output.publicPath
}));
app.use(require("webpack-hot-middleware")(compiler));
// end of that


// Index Route
//app.get('/', routes.index);

app.get('/api', routes.apiGetFeed);
// Set /public as our static content dir
app.use("/", express.static(__dirname + "/public/"));

// Fire this bitch up (start our server)
var server = http.createServer(app).listen(port, function() {
  console.log('Express server listening on port ' + port);
});
