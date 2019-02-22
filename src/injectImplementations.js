var injectNetwork = require('./injectNetwork')
var formatArtifactPath = require('./formatArtifactPath')
var readFile = require('./utils/readFile')

module.exports = async function injectProxies(artifactsPath, zosNetworkFilePath, networkId) {
  var zosNetworkFileJson = JSON.parse(await readFile(zosNetworkFilePath))

  return Promise.all(Object.keys(zosNetworkFileJson.contracts).map(contractName => {
    var contract = zosNetworkFileJson.contracts[contractName]

    var contractPath = formatArtifactPath(contractName, artifactsPath)
    return injectNetwork(contractPath, networkId, contract.address)
  }))
}
