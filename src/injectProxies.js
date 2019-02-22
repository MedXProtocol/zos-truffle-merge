const injectNetwork = require('./injectNetwork')
const formatArtifactPath = require('./formatArtifactPath')
const readFile = require('./utils/readFile')

module.exports = async function injectProxies(artifactsPath, zosNetworkFilePath, networkId) {
  const zosNetworkFileJson = JSON.parse(await readFile(zosNetworkFilePath))

  return Promise.all(Object.keys(zosNetworkFileJson.proxies).map(name => {
    var proxies = zosNetworkFileJson.proxies[name]
    var lastProxy = proxies[proxies.length - 1]
    var contractName = name.split('/')[1]

    var contractPath = formatArtifactPath(contractName, artifactsPath)
    return injectNetwork(contractPath, networkId, lastProxy.address)
  }))
}
