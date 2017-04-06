'use strict'
const path = require('path')

const env = process.env.BABEL_ENV || process.env.NODE_ENV

const presets = [
  env === 'test' ?
  [require('babel-preset-env').default, {
    targets: {
      node: 'current'
    }
  }] :
  [require('babel-preset-env').default, {
    modules: false,
    targets: {
      ie: 9,
      uglify: true
    }
  }],
  // vue jsx
  require.resolve('babel-preset-vue')
]

const plugins = [
  // Polyfills the runtime needed for async/await and generators
  [require.resolve('babel-plugin-transform-runtime'), {
    // Resolve the Babel runtime relative to the config.
    moduleName: path.dirname(require.resolve('babel-runtime/package'))
  }],
  require('babel-plugin-transform-object-rest-spread'),
  // For dynamic import that you will use a lot in code-split
  require.resolve('babel-plugin-syntax-dynamic-import')
]

module.exports = {
  presets,
  plugins
}
