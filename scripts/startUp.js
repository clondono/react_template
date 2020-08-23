
// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', err => {
  throw err;
});

// Ensure environment variables are read.
//   require('../config/env');

const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const WebpackConfig = require('../config/webpack.config');


const compiler = Webpack(WebpackConfig);
const devServerOps = {
  ...WebpackConfig.devServer,
  open  : true,
  stats : {
    colors: true,
  },
};
const server = new WebpackDevServer(compiler, devServerOps);

server.listen(8080, '127.0.0.1', () => {
  console.log('Starting server on http://localhost:8080');
});