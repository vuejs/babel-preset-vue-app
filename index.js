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
    },
    useBuiltIns: true
  }],
  // vue jsx
  require.resolve('babel-preset-vue'),
  // stage-2 features
  require.resolve('babel-preset-stage-2')
]

const plugins = [
  // Polyfills the runtime needed for async/await and generators
  [require.resolve('babel-plugin-transform-runtime'), {
    helpers: false,
    polyfill: false,
    regenerator: true,
    // Resolve the Babel runtime relative to the config.
    moduleName: path.dirname(require.resolve('babel-runtime/package'))
  }]
]

module.exports = {
  presets,
  plugins
}
