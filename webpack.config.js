module.exports = {
   devtool: 'inline-source-map',
  entry: {
    app : ["./src/main.js"],
    appcoffee : ["./src/index.coffee"],
    appreact : ["./src/main_react.js"]
  },
  output: {
      path: "./build/",
      filename: "[name]-bundle.js"
  },
module: {
  loaders: [
    { test: /\.coffee$/, loader: "coffee" },
    { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader", query : { presets : ['es2015'] , plugins: ['transform-async-to-generator']}},
    { test: /\.jsx?$/,exclude: /node_modules/,loader: 'babel'       , query : { presets : ['es2015','react']  }}
  ]
},
resolve: {
		extensions: ["", ".web.coffee", ".web.js", ".coffee", ".js"]
	}

};
