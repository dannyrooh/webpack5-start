const HtmlWebpackPlugin = require('html-webpack-plugin');

const plugin_HTML =  (path) => 
     new HtmlWebpackPlugin(
       {
        filename: 'index.html',
        template: path.resolve(__dirname,'./../../src/index.html')
       }
      );

 module.exports = { plugin_HTML }