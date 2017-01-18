'use strict'

const presets = [
  // latest ECMAScript features
  require.resolve('babel-preset-latest'),
  // vue jsx
  require.resolve('babel-preset-vue'),
  // stage-3 features
  require.resolve('babel-preset-stage-3')
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
