// webpack.config.js
const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/Index.tsx',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js'
  },
  devServer: {
    port: '3000',
    static: {
      directory: path.resolve(__dirname, './build')
    }
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.css'] // add .tsx, .ts
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/, // add |ts
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: '[path]___[name]__[local]___[hash:base64:5]'
              }
            }
          },
          'postcss-loader'
        ]
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack']
      }
    ]
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: './public', to: './' } // to the dist root directory
      ]
    }),
    new ESLintPlugin({
      extensions: ['ts', 'tsx'],
      exclude: ['./node_modules']
    })
  ]
}
