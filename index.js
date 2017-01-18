'use strict'
const path = require('path')

const presets = [
  // latest ECMAScript features
  [require.resolve('babel-preset-latest'), {
    es2015: {
      // do not transform to commonjs format, let webpack 2 or rollup handle this
      modules: false
    }
  }],
  // vue jsx
  require.resolve('babel-preset-vue'),
  // stage-3 features
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
