const path = require('path');
const HtmlWebapckPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
     entry: path.resolve(__dirname,'src','index.js'),
     output:{
       path: path.resolve(__dirname, 'build'),
       filename:'bundle[hash].js',
     },
     plugins:[
       new HtmlWebapckPlugin({
         template:path.resolve(__dirname,'public','index.html'),
       }),
       new CleanWebpackPlugin(),
     ],
     module:{
       rules:[
         {
           test:/\.js$/,
           exclude:/node_module/,
           use:'babel-loader',
         },
       ]
     },
     devServer:{
       port:3000,
     },
};