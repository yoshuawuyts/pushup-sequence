const test = require('tape')
const generate = require('./')

test('should assert input arguments', function (t) {
  t.plan(1)
  t.throws(generate)
})

test('generate pushups', function (t) {
  t.plan(3)
  const res = generate(5)
  t.equal(res.length, 5)
  t.ok(Array.isArray(res), 'is array')
  t.ok(Array.isArray(res[0]), 'contents are arrays')
  // console.log(res)
})
