var HtmlWebpackPlugin = require('html-webpack-plugin')
var webpack = require('webpack')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: [
    './app/index.jsx',
    'webpack-hot-middleware/client'
  ],
  output: {
    path: __dirname + '/public',
    filename: "index_bundle.js"
  },
  module: {
    loaders: [
      {test: /\.jsx$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query:
        {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  plugins: [
    HTMLWebpackPluginConfig,
      // Webpack 2.0 fixed this mispelling
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
  ]
};
