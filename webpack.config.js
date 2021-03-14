const path = require('path');
module.exports = {
  entry: './src/main.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'inline-source-map',
  module: {
    rules: [{
      test: /\.ts$/, // testはloaderを適用すべきファイルの正規表現のためのキーワード
      use: 'ts-loader',
      exclude: /node_modules/
    }]
  },
  resolve: {
    extensions: ['.ts', '.js'] // 拡張子がない場合にwebpackが左から解決する設定
  }
}