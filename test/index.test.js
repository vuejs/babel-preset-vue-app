import * as babel from 'babel-core'
import fs from 'mz/fs'

process.chdir(__dirname)
process.env.BABEL_ENV = null

function transform(code, options) {
  return babel.transform(code, {
    presets: [
      [require('../src').default, options]
    ]
  }).code
}

test('add polyfill', async () => {
  const input = await fs.readFile('./fixture/polyfill.js', 'utf8')
  const actual = transform(input)
  expect(actual).toMatch('import _Object$assign from')
  expect(actual).toMatch('import _extends from')
})

test('useBuiltIns', async () => {
  const input = await fs.readFile('./fixture/use-built-ins.js', 'utf8')
  const actual = transform(input, { useBuiltIns: true })
  expect(actual).toMatch('Object.assign({ a: 1 })')
})

test('async function', async () => {
  const input = await fs.readFile('./fixture/async-function.js', 'utf8')
  const actual = transform(input)
  expect(actual).toMatch('import _regeneratorRuntime from')
  expect(actual).toMatch('import _asyncToGenerator from')
  expect(actual).not.toMatch('async function')
})

test('generator function', async () => {
  const input = await fs.readFile('./fixture/generator-function.js', 'utf8')
  const actual = transform(input)
  expect(actual).toMatch('import _regeneratorRuntime from')
  expect(actual).not.toMatch('function * foo()')
})

test('targets', async () => {
  const input = await fs.readFile('./fixture/async-function.js', 'utf8')
  const actual = transform(input, { targets: { node: '8.4' } })
  expect(actual).not.toMatch('import _regeneratorRuntime from')
  expect(actual).not.toMatch('import _asyncToGenerator from')
  expect(actual).toMatch('async function')
})
