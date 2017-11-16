import path from 'path'

export default function (context, {
  useBuiltIns,
  targets
} = {}) {
  const env = process.env.BABEL_ENV || process.env.NODE_ENV

  if (typeof targets === 'undefined') {
    targets = env === 'test' ? { node: 'current' } : { ie: 9, uglify: true }
  }

  const presets = [
    env === 'test' ?
    [require('babel-preset-env').default, {
      useBuiltIns,
      targets
    }] :
    [require('babel-preset-env').default, {
      useBuiltIns,
      targets,
      modules: false
    }],
    // vue jsx
    require.resolve('babel-preset-vue')
  ]

  const plugins = [
    // Polyfills the runtime needed for async/await and generators
    [require.resolve('babel-plugin-transform-runtime'), {
      helpers: !useBuiltIns,
      polyfill: !useBuiltIns,
      regenerator: true,
      // Resolve the Babel runtime relative to the config.
      moduleName: path.dirname(require.resolve('babel-runtime/package'))
    }],
    [require('babel-plugin-transform-object-rest-spread'), {
      useBuiltIns
    }],
    // For dynamic import that you will use a lot in code-split
    require.resolve('babel-plugin-syntax-dynamic-import')
  ]

  return {
    presets,
    plugins
  }
}
