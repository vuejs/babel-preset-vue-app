# babel-preset-vue-app

[![NPM version](https://img.shields.io/npm/v/babel-preset-vue-app.svg?style=flat)](https://npmjs.com/package/babel-preset-vue-app) [![NPM downloads](https://img.shields.io/npm/dm/babel-preset-vue-app.svg?style=flat)](https://npmjs.com/package/babel-preset-vue-app)

## Features

- Latest ECMAScript features (babel-preset-env)
- Object spreading and dynamic import 
- Transform Vue JSX
- Transform `generator` and `async/await`

## Install

```bash
yarn add babel-preset-vue-app --dev
```

## Usage

```js
// .babelrc
{
  "presets": ["vue-app"]
}
```

## Polyfill

Object rest spread and Vue JSX needs the native `Object.assign` method, you should ship one yourself like this:

```js
Object.assign = require('object.assign')
```

Or using `babel-polyfill`:

```js
import 'babel-polyfill'
```

Note that `babel-polyfill` will polyfill everything we need in `IE9`.

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## License

MIT.
