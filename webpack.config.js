module.exports = {
  entry: './app/assets/frontend/main.jsx',
  output: {
    path: __dirname + "/app/assets/javascripts",
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015', 'stage-0']
        }
      }
    ]
  }
};
