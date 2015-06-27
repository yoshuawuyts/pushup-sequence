# pushup-sequence
[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Downloads][downloads-image]][downloads-url]
[![js-standard-style][standard-image]][standard-url]

Generatively create pushup sequences. Yes, actual physical pushups.

## Installation
```bash
$ npm install pushup-sequence
```

## Usage
__CLI__
```sh
$ pushup <number>
```

__JS__
```js
const generate = require('pushup-sequence')

const generate(0, 5)
// => [ [ 15, 11, 12, 15, 12 ],
//      [ 16, 13, 12, 13, 16 ],
//      [ 17, 14, 13, 17, 14 ],
//      [ 18, 15, 14, 15, 18 ],
//      [ 17, 16, 17, 20, 20 ] ]
```

## API
### generate([start], n)
Generate `n` pushup sequences. Each sequence consists of 5 repetitions. An
optional start value can be provided.

## Why?
Almost all fitness apps are silly. Most apps can be replaced by an array of
values + a timer.

## License
[MIT](https://tldrlegal.com/license/mit-license)

[npm-image]: https://img.shields.io/npm/v/pushup-sequence.svg?style=flat-square
[npm-url]: https://npmjs.org/package/pushup-sequence
[travis-image]: https://img.shields.io/travis/yoshuawuyts/pushup-sequence/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/yoshuawuyts/pushup-sequence
[coveralls-image]: https://img.shields.io/coveralls/yoshuawuyts/pushup-sequence.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/yoshuawuyts/pushup-sequence?branch=master
[downloads-image]: http://img.shields.io/npm/dm/pushup-sequence.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/pushup-sequence
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard
