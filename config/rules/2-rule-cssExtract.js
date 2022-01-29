const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const rule_CSSEXTRACT =  {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
    }
  

  const rule_CSS = {
    test: /\.css$/i,
    use: [
      'style-loader',
      'css-loader'
    ]
  }

  const rules_css = 
    [ 
        rule_CSSEXTRACT,
        rule_CSS
    ]

  module.exports = rules_css
