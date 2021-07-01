const HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack')

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/public/index.html'
    }),
    new Dotenv()
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [
              ['@babel/transform-runtime', { regenerator: true }]
            ]
          }
        }
      }
    ]
  }
}
