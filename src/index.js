#!/usr/bin/env node
const fs = require('fs')
const shell = require('shelljs')
const program = require('commander')
const util = require('util')

const readFile = util.promisify(fs.readFile)
const writeFile = util.promisify(fs.writeFile)

program
  .usage('[options] <zos network json file>')
  .arguments('[options] <file>')
  .option('-n, --network [networkId]', 'Set network id')
  .parse(process.argv)

if (program.args.length == 0 || !program.network) {
  program.help()
}

const networkId = program.network
const zosNetworkFilePath = program.args[0]
const zosNetworkFileJson = JSON.parse(fs.readFileSync(zosNetworkFilePath))

async function injectNetwork(contractName, networkId, address) {
  console.log(`Updating ${contractName} with address ${address} on network ${networkId}`)
  const contractFile = `build/contracts/${contractName}.json`
  const contractConfig = JSON.parse(await readFile(contractFile))
  contractConfig.networks[networkId] = {
    "links": {},
    "events": {},
    "address": address,
    "updated_at": (new Date()).getTime()
  }
  await writeFile(contractFile, JSON.stringify(contractConfig, null, 2))
}

Promise.all(Object.keys(zosNetworkFileJson.proxies).map(name => {
  var proxies = zosNetworkFileJson.proxies[name]
  var lastProxy = proxies[proxies.length - 1]
  var contractName = name.split('/')[1]
  return injectNetwork(contractName, networkId, lastProxy.address)
}))
