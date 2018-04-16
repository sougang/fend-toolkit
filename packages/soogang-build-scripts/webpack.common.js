const path = require('path')

module.exports = {
  entry: ['@babel/polyfill', './src/index.js'],
  resolve: {
    modules: [path.resolve(process.cwd(), 'src'), 'node_modules'],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        API_ENV: JSON.stringify(process.env.API_ENV),
      },
    }),
  ],
  output: {
    filename: '[name].[hash:8].js',
    chunkFilename: '[name].[chunkhash:8].js',
    path: path.resolve(process.cwd(), 'build'),
    publicPath: process.env.PUBLIC_PATH || '/',
  },
  module: {
    rules: [
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader'],
      },
    ],
  },
}

module.exports = config
