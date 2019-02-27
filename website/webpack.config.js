const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        // use: ['babel-loader'],
        options: {
          plugins: [
            'transform-class-properties',
            'transform-object-rest-spread',
            '@babel/plugin-transform-runtime'
          ]
        },
      },    
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: './dist',
    hot: true
  }
};