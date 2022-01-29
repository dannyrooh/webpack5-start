const path = require('path')
const { plugins_function, plugin_CSSEXTRACT } = require('./plugins/0-plugins.js')
const rules_function = require('./rules/0-rules.js')

const config_plugin = plugins_function(path)
const config_rules = rules_function()

module.exports = {
  context: __dirname,
  entry: path.resolve(__dirname,'../src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname,'../dist'),
  },

  module: {
    rules: config_rules
  },

  plugins: config_plugin
}