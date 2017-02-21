const test = require('tape')
const load = require('../')

var lastMessage
window.log = function (msg) {
  lastMessage = msg
}

test('success', function (t) {
  t.plan(2)

  load('test/lib/hello.js', function (err) {
    t.error(err)
    t.equal(lastMessage, 'Hello world')
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
