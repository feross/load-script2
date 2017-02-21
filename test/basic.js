const test = require('tape')
const load = require('../')

var lastMessage
window.log = function (msg) {
  lastMessage = msg
}

test('success head', function (t) {
  t.plan(3)

  var headChildren = document.head.children.length
  load('test/lib/hello.js', function (err) {
    t.error(err)
    t.equal(lastMessage, 'Hello world')
    t.equal(document.head.children.length, headChildren + 1)
    lastMessage = undefined
  })
})

test('success body', function (t) {
  t.plan(3)

  var bodyChildren = document.body.children.length
  load('test/lib/hello.js', { body: true }, function (err) {
    t.error(err)
    t.equal(lastMessage, 'Hello world')
    t.equal(document.body.children.length, bodyChildren + 1)
    lastMessage = undefined
  })
})

test('nonexistant script', function (t) {
  t.plan(1)

  load('nonexistant.js', function (err) {
    t.ok(err instanceof Error)
  })
})

test('throw', function (t) {
  t.plan(1)

  load('test/lib/throw.js', function (err) {
    t.error(err)
  })
})
