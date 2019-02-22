var readFile = require('./utils/readFile')
var writeFile = require('./utils/writeFile')

module.exports = async function injectNetwork(contractPath, networkId, address, date = new Date()) {
  console.log(`Updating ${contractPath} with address ${address} on network ${networkId}`)
  var contractConfig = JSON.parse(await readFile(contractPath))
  contractConfig.networks[networkId] = {
    "links": {},
    "events": {},
    "address": address,
    "updated_at": date.getTime()
  }
  var json = JSON.stringify(contractConfig, null, 2)
  await writeFile(contractPath, json)
}
