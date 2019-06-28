const test = require('tape')
const load = require('../')

var lastMessage
window.log = function (msg) {
  lastMessage = msg
}

test('success', function (t) {
  t.plan(1)

  load('test/lib/hello.js').then(function () {
    t.equal(lastMessage, 'Hello world')
    lastMessage = undefined
  }, function () {
    t.fail('script should inject successfully')
  })
})

test('nonexistant script', function (t) {
  t.plan(1)

  load('nonexistant.js').then(function () {
    t.fail('non existant script should not load')
  }, function (err) {
    t.ok(err instanceof Error)
  })
})

test('throw', function (t) {
  t.plan(1)

  load('test/lib/throw.js').then(function () {
    t.ok('loaded')
  }, function () {
    t.fail('thrown exception in script should not affect script promise')
  })
})
