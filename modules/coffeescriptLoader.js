module.exports = function() {
  this.nuxt.options.extensions.push('coffee')
  this.extendBuild(function (config) {
    const coffeeLoader = {
      test: /\.coffee$/,
      loader: 'coffee-loader',
    }

    config.module.rules.push(coffeeLoader)

    for (let rule of config.module.rules) {
      if (rule.loader === 'vue-loader') {
        rule.options.loaders = { coffee: coffeeLoader }
      }
    }

    if (config.resolve.extensions.includes('.coffee') === false) {
      config.resolve.extensions.push('.coffee')
    }
  })
}
