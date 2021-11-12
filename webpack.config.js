const path = require('path');
var SRC_DIR = path.join(__dirname, 'client/src');
var DIST_DIR = path.join(__dirname, 'client/dist');

module.exports = {
  entry: path.join(SRC_DIR, 'index.jsx'),
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: [/node_modules/, /config\.js/],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          },
        },
      },
    ],
  },
  // externals: {
  //   'styled-components': {
  //     commonjs: 'styled-components',
  //     commonjs2: 'styled-components',
  //     amd: 'styled-components',
  //   },
  // },
};
