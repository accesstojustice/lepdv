var webpack = require('webpack');

module.exports = {

  context: __dirname + '/app/assets/javascripts',

  entry: {
    App: [
      'webpack-dev-server/client?http://localhost:8080/',
      __dirname + '/app/assets/frontend/main.jsx',
    ]
  },
  output: {

    //filename: 'bundle.js'
    filename: '[name]_wp_bundle.js', // Will output App_wp_bundle.js
    path: __dirname + "/app/assets/javascripts", // Save to Rails Asset Pipeline
    publicPath: `http://localhost:8080/assets/`, // Required for webpack-dev-server
    // publicPath: '/assets',
    headers: { 'Access-Control-Allow-Origin': '*' },
  },

  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "http://localhost:3000",
      "Access-Control-Allow-Credentials": true
    }
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        // loader: "babel-loader",
        loaders: ['babel?presets[]=es2015,presets[]=stage-0,presets[]=react,plugins[]=react-hot-loader/babel'],
        exclude: /node_modules/,
        // query: {
        //   presets: ['react', 'es2015', 'stage-0']
        // }
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),

    new webpack.NoErrorsPlugin(),
  ]
};
