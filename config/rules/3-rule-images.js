const rule_IMAGE = {
    test: /\.(jpg|jpeg|png|git|svg|webp)$/,
    loader: 'file-loader',
    options: {
      name: '[name].[ext]'
    }
  }

  module.exports = rule_IMAGE
