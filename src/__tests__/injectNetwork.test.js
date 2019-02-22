var injectNetwork = require('../injectNetwork')
var TruffleArtifact = require('./support/TruffleArtifact')

jest.mock('../utils/readFile')
jest.mock('../utils/writeFile')

var readFile = require('../utils/readFile')
var writeFile = require('../utils/writeFile')

describe('injectNetwork', () => {
  it('should work', async () => {
    var now = new Date()
    var inputJson = JSON.stringify(TruffleArtifact)
    readFile.mockResolvedValue(inputJson)
    await injectNetwork("myContract.json", "1234", "0x1111", now)
    expect(writeFile).toHaveBeenCalledWith(
      "myContract.json", JSON.stringify({
        contractName: "ERC20",
        networks: {
          "1234": {
            "links": {},
            "events": {},
            "address": '0x1111',
            "updated_at": now.getTime()
          }
        }
      }, null, 2)
    )
  })
})
