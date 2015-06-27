#!/usr/bin/env node

const minimist = require('minimist')
const cliclopts = require('cliclopts')
const pushups = require('../')

const copts = cliclopts()
const argv = minimist(process.argv.slice(2), copts.options())
const line = argv._[0]

// help
if (argv.help || !line) {
  console.log('Usage: pushup <line>')
  process.exit(1)
}

// log results
console.log(pushups(line, 1)[0])
