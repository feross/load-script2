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

## usage

```js
var load = require('load-script2')

load('foo.js', function (err, script) {
  if (err) {
    // print useful message
  }
  else {
    console.log(script.src);// Prints 'foo'.js'
    // use script
  }
})
```

## differences to [`load-script`](https://www.npmjs.com/package/load-script)

This package only supports browsers that use the standard DOM API, opting to drop
non-standard browsers like IE8 and below. It also removes all the options, which
aren't needed most of the time.

The minfied+gzipped size of `load-script2` is 455B, compared to 645B for
`load-script`.

## API

### `load(src, [cb])`

Append a `<script>` node with the given `src` URL to the `<head>` element in the DOM.

#### `url`

Any url that you would like to load.  May be absolute or relative.

#### `cb`

A callback function of the following interface: `function(err, script) {}` where
`err` is an error if any occurred and `script` is the `script` node that was
appended to the DOM.

## license

MIT. Copyright (c) [Feross Aboukhadijeh](http://feross.org).
