const path = require('path')
const nodeExternals = require('webpack-node-externals')
const DefinePlugin = require('webpack').DefinePlugin

const { NODE_ENV } = process.env
if (NODE_ENV === 'production') {
  require('dotenv').config({ path: `./.env` })
}

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './index.ts',
  mode: NODE_ENV,
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.js',
    clean: true,
  },
  resolve: {
    extensions: ['.ts'],
  },
  externalsPresets: { node: true }, // in order to ignore built-in modules like path, fs, etc.
  externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [
    new DefinePlugin({
      'process.env': JSON.stringify(process.env),
    }),
  ],
}
