const path = require('path');
const webpack = require('webpack');
module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: ['webpack-hot-middleware/client', './public/Main.jsx'],
  output: {
    path: path.join(__dirname, 'public/dist'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: path.join(__dirname, 'public'),
        loaders: ['react-hot', 'babel'],
      },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
    ],
  },
};
