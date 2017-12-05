const path = require('path')
const DIST_DIR = path.join(__dirname, 'demo/dist')

module.exports = {

  entry: [
    path.join(__dirname, 'demo/script.js')
  ],

  output: {
    path: DIST_DIR,
    publicPath: '/',
    filename: 'script.js'
  },

  resolve: {
    extensions: ['.js', '.json']
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }

}
