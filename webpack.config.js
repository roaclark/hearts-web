const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const paths = {
  CLIENT_DIST: path.resolve(__dirname, 'client/dist'),
  CLIENT: path.resolve(__dirname, 'client/src'),
}

module.exports = {
  entry: path.join(paths.CLIENT, 'app.js'),
  output: {
    path: paths.CLIENT_DIST,
    filename: 'app.bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(paths.CLIENT, 'index.html'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
}
