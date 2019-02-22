#!/usr/bin/env node
const shell = require('shelljs')
const { Command } = require('commander')

const injectImplementations = require('./injectImplementations')
const injectProxies = require('./injectProxies')

module.exports = function (argv) {
  var prog = new Command()
    .usage('[options] <zos network json file>')
    .arguments('[options] <file>')
    .option('-n, --network [networkId]', 'Set network id')
    .option('-a, --artifacts [artifactsPath]', 'Path to the Truffle artifacts')
    .option('-i, --implementations', 'use contract implementation address instead of the last proxy address')
    .parse(argv)

  if (prog.args.length == 0 || !prog.network) {
    prog.help()
  }

  if (prog.implementations) {
    injectImplementations(prog.artifacts, prog.args[0], prog.network)
  } else {
    injectProxies(prog.artifacts, prog.args[0], prog.network)
  }
}
