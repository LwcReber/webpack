const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // __dirname是node.js的一个全局变量，指向当前执行脚本的所在目录
  devtool: 'eval-source-map',
  entry: __dirname + "/app/main.js", // 入口文件
  output: {
    path: __dirname + "/build", //打包后的文件存放地方
    filename: "bundle.js" // 打包后输出的文件的文件名
  },

  devServer: {
    contentBase: "./public", // 本地服务器所加载的页面所在目录
    historyApiFallback: true, // 不跳转
    inline: true, //实时刷新
    hot: true // 热更新
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        use: {
          loader: "babel-loader",
          options: {

          }
        },
        exclude: /node_modules/
      },
      {
          test: /\.css$/,
          use: [
            {
              loader: "style-loader"
            },
            {
              loader: 'css-loader',
              options: {
                modules: true
              }
            },
            {
                loader: "postcss-loader"
            }
          ]
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin('版权所有，翻版必究'),
    new HtmlWebpackPlugin({
      template: __dirname + "/app/index.tmpl.html" // 传入html插件参数
    }),
    new webpack.HotModuleReplacementPlugin()//热加载插件
  ]
};
