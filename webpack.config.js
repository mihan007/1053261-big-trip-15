const path = require('path');

const babelConfig = {
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env'],
      plugins: [
        '@babel/plugin-proposal-nullish-coalescing-operator'
      ]
    }
  }
};

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    watchContentBase: true,
  },
  module: {
    rules: [
      babelConfig
    ]
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.json', '.jsx', '.css']
  }
};
