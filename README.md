# load-script2 [![travis][travis-image]][travis-url] [![npm][npm-image]][npm-url] [![downloads][downloads-image]][downloads-url] [![javascript style guide][standard-image]][standard-url]

[travis-image]: https://img.shields.io/travis/feross/load-script2/master.svg
[travis-url]: https://travis-ci.org/feross/load-script2
[npm-image]: https://img.shields.io/npm/v/load-script2.svg
[npm-url]: https://npmjs.org/package/load-script2
[downloads-image]: https://img.shields.io/npm/dm/load-script2.svg
[downloads-url]: https://npmjs.org/package/load-script2
[standard-image]: https://img.shields.io/badge/code_style-standard-brightgreen.svg
[standard-url]: https://standardjs.com

### Dynamic script loading for modern browsers

Works in the browser with [browserify](http://browserify.org/)!

## install

```
npm install load-script2
```

This package works in the browser with [browserify](https://browserify.org). If you do not use a bundler, you can use the [standalone script](https://bundle.run/load-script2) directly in a `<script>` tag.

## usage

```js
const loadScript = require('load-script2')

const script = await loadScript('foo.js')
console.log(script.src);// Prints 'foo'.js'
```

## differences to [`load-script`](https://www.npmjs.com/package/load-script)

`load-script2` does not support legacy browsers like IE8 because these browsers
do not have standards-based DOM APIs. `load-script2` also removes many esoteric
options, which aren't needed most of the time and adds **promises support**.

The size of `load-script2` is 509 bytes, compared to 655 bytes for `load-script` (minified
and gzipped).

## API

### `promise = loadScript(src, [attrs], [parentNode])`

Append a `<script>` node with the given `src` URL to the `<head>` element in the DOM.

#### `src`

Any url that you would like to load.  May be absolute or relative.

#### `attrs` (optional)

An object that contains HTML attributes to set on the `<script>` tag. For
example, the value `{ id: 'hi' }` would set the attribute `id="hi"` on the
`<script>` tag before it is injected.

#### `parentNode` (optional)

The HTML node to which the `<script>` tag will be appended. If not specified,
defaults to the `<head>` tag.

#### `promise`

Returns a promise which resolves to the `script` node that was appended to the
DOM, or rejects with `err` if any occurred.

## license

MIT. Copyright (c) [Feross Aboukhadijeh](https://feross.org).
