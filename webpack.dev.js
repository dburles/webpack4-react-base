const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    open: false,
    port: 3000,
    historyApiFallback: true,
    disableHostCheck: true,
  },
});
