const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/scripts/index.js',
    welcome: './src/scripts/welcome.js',
    observer: './src/scripts/observer.js'
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: '[name].bundle.js',
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html',
      filename: './index.html'
    }),
    new HTMLWebpackPlugin({
      template: './src/welcome.html',
      filename: './welcome.html'
    }),
    new HTMLWebpackPlugin({
      template: './src/indexobs.html',
      filename: './indexobs.html'
    })
  ],
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          }
        }
      },
      {
        test: /\.mp3$|\.wav$|\.m4a$/,
        use: {
          loader: 'file-loader'
        }
      },
      {
        test: /\.s?[ac]ss$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader', 
          'sass-loader'
        ]
      }
    ]
  }
}