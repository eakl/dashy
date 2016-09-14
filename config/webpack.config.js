'use strict'

const Path = require('path')
const Precss = require('precss')
const Autoprefixer = require('autoprefixer')

const PATHS = {
  entry: Path.resolve(__dirname, '../', 'src', 'app', 'index.js'),
  build: Path.resolve(__dirname, '../', 'build'),
  app: Path.resolve(__dirname, '../', 'src', 'app'),
  images: Path.resolve(__dirname, '../', 'src', 'app', 'public', 'img')
}

module.exports = {
  entry: PATHS.entry,
  output: {
    filename: 'bundle.js',
    path: PATHS.build
  },
  devtool: 'inline-source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: PATHS.app,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-0'],
          cacheDirectory: true
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        include: PATHS.app,
        loader: 'style-loader!css-loader!postcss-loader'
      },
      {
        test: /\.(jpg|png)$/,
        exclude: /node_modules/,
        include: PATHS.images,
        loader: 'url-loader',
        query: {
          limit: 25000
        }
      },
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        include: PATHS.images,
        loader: 'file-loader'
      }
    ]
  },
  postcss: function () {
    return [Precss, Autoprefixer]
  }
}
