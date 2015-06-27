const assert = require('assert')

const BASE = 10
const REPS = 5
const MED = ~~REPS / 2
const GROWTH = 6

module.exports = generatePushups

// generate a pushup matrix
// (num, num) -> [[num]]
function generatePushups (start, n) {
  assert.ok(start)
  if (!n) {
    n = start
    start = 0
  }

  const res = []
  var i = 0
  while (i++ < n) res.push(seq(start + i))
  return res
}

// create a pushup sequence
// (num, num) -> [num]
function seq (line) {
  const res = []
  var i = 0
  while (i++ < REPS) res.push(val(line, i))
  const spl = res.splice(line % REPS, line % 2)
  return res.concat(spl)
}

// create a value of a pushup
// (num, num) -> num
function val (line, pos) {
  const rel = Math.floor(pos - MED)
  const val = line * (GROWTH / REPS) + (rel * rel)
  return ~~(BASE + val)
}
