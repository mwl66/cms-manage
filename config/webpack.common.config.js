const path = require('path');

module.exports = {
  // mode: 'development',
  entry: {
    // app: './src/app.js',
    index: './src/index.js'
  },
  output: {
    filename: 'js/bundle.js',
    path: path.resolve(__dirname,'../dist')
  },
  module: {
    rules: [
      // jsx处理
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        // exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins:  [
              '@babel/plugin-transform-runtime',
              '@babel/plugin-proposal-class-properties',
            ],
          }
        }
      },
      // 图片处理
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'url-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'images',
          limit: 8192,
        }
      }
    ]
  },
  // 别名
  resolve: {
    extensions: ['.js', '.jsx', '.less', '.scss'],
    modules: [ path.resolve(__dirname, '../src'), 'node_modules'],
    alias: {
      _components: path.join(__dirname, '../src/components'),
      _images: path.join(__dirname, '../src/images'),
      _pages: path.join(__dirname, '../src/pages'),
      _utils: path.join(__dirname, '../src/utils'),
      _mock: path.join(__dirname, '../src/mock'),
    }
  }
}