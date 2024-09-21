const miniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    home: './scripts/index.js',
    homeStyles: './style.css',
  },
  output: {
    filename: '[name].bundle.js',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', { targets: 'defaults' }]],
          },
        },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [miniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new miniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
      ignoreOrder: false,
    }),
  ],
};
