var path = require('path')

module.exports = function formatArtifactPath(contractName, truffleArtifactsPath) {
  var pathIsUndefined = truffleArtifactsPath === undefined
  if (pathIsUndefined) {
    truffleArtifactsPath = path.join('build', 'contracts')
  }
  return path.join(truffleArtifactsPath || '', `${contractName}.json`)
}
