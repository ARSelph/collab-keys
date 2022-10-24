const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html',
      filename: './index.html'
    })
  ],
  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.resolve(__dirname, 'dist'),
      //publicPath: '/bundleFolder'
    },
    proxy: {
      '/api' : 'http://localhost:3000',
    },
    compress: false,
    host: 'localhost',
    port: 8080,
    hot: true,
  },
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