const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const eslintFormatter = require('react-dev-utils/eslintFormatter');
const Paths = require('./paths');
const envIsD = process.env.NODE_ENV === 'development';
const aliases = require('./aliases')(envIsD ? 'development' : 'production');

module.exports = {
  // mode   : envIsD ? 'development' : 'production',
  entry  : Paths.appMainJs,
  output : {
    path     : path.join(__dirname, '/bundle'),
    filename : 'index_bundle.js',
  },
  devServer: {
    inline : true,
    port   : 8080,
  },
  resolve: {
    alias: {
      ...aliases,
    },
  },
  module: {
    rules: [
      {
        test    : /\.(js|jsx|mjs)$/,
        exclude : /node_modules/,
        use     : [
          {
            // options: {
            //   formatter   : eslintFormatter,
            //   eslintPath  : require.resolve('eslint'),
            //   emitWarning : true,
            // },
            // loader: require.resolve('eslint-loader'),
            loader: 'babel-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject   : true,
      template : Paths.appHtml,
    }),
  ],
};