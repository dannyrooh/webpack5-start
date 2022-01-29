const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const plugin_CSSEXTRACT = 
    new MiniCssExtractPlugin({
        filename: 'style.css'
    })

module.exports = plugin_CSSEXTRACT