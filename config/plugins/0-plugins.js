
const { plugin_HTML } = require('./1-plugin-html')
const plugin_CSSEXTRACT = require('./2-plugin-cssExtract')

const plugins_function = (path) =>  
    [ 
        plugin_HTML(path) ,
        plugin_CSSEXTRACT
    ]

module.exports =  { plugins_function , plugin_CSSEXTRACT }
