module.exports = {
 
  entry: `./src/index.js`,
  output: {
    path: `${__dirname}/dist`,
    filename: 'main.js'
  },
  mode: 'development',
  devServer: {
    contentBase: 'dist',
    open: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        // Babel のオプションを指定する
        options: {
          presets: [
            ['env', {'modules': false}]
          ]
        },
        exclude: /node_modules/
      },
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  }
};
