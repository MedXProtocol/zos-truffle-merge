const injectNetwork = require('../injectNetwork')
const TruffleArtifact = require('./support/TruffleArtifact')

jest.mock('../utils/readFile')
jest.mock('../utils/writeFile')

const readFile = require('../utils/readFile')
const writeFile = require('../utils/writeFile')

describe('injectNetwork', () => {
  it('should work', async () => {
    const now = new Date()
    const inputJson = JSON.stringify(TruffleArtifact)
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
