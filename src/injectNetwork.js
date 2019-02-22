const readFile = require('./utils/readFile')
const writeFile = require('./utils/writeFile')

module.exports = async function injectNetwork(contractPath, networkId, address, date = new Date()) {
  console.log(`Updating ${contractPath} with address ${address} on network ${networkId}`)
  const contractConfig = JSON.parse(await readFile(contractPath))
  contractConfig.networks[networkId] = {
    "links": {},
    "events": {},
    "address": address,
    "updated_at": date.getTime()
  }
  const json = JSON.stringify(contractConfig, null, 2)
  await writeFile(contractPath, json)
}
