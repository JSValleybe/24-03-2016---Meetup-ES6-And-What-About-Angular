
/*
config for webpack. Will be used in
the Gulpfile for building our app.
Does not need gulp in order to do so,
but we use gulp to orchestrate
 */
module.exports = {
  output: {
    filename: 'bundle.js'
  },

  devtool: 'sourcemap',

  module: {
    loaders: [
      { test: /\.html$/, loader: 'raw' },
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.(png|jpg|jpeg|ttf|eot|woff|woff2|svg)$/, loader: 'file' },
      { test: /\.js$/, exclude: /node_modules/, loaders: ['babel?stage=0'] },
    ]
  },

};
