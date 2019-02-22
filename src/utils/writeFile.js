var util = require('util')
var fs = require('fs')

module.exports = util.promisify(fs.writeFile)
