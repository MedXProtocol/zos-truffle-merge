const ZosNetwork = require('./support/ZosNetwork')
const tk = require('timekeeper')
const injectProxies = require('../injectProxies')

jest.mock('../utils/readFile')
jest.mock('../injectNetwork')

const readFile = require('../utils/readFile')
const injectNetwork = require('../injectNetwork')

describe('injectNetwork', () => {
  it('should work', async () => {
    var now = new Date()
    tk.freeze(now.getTime())

    const inputJson = JSON.stringify(ZosNetwork)
    readFile.mockResolvedValue(inputJson)

    await injectProxies("build/contracts", "zosnetwork.json", '1234')

    expect(readFile).toHaveBeenCalledWith('zosnetwork.json')

    expect(injectNetwork).toHaveBeenCalledWith(
      'build/contracts/Migrations.json', '1234', '0xed2e80dd89d2252eb65031dd3a56c31345572a58'
    )

    expect(injectNetwork).toHaveBeenCalledWith(
      'build/contracts/ZepToken.json', '1234', '0xe49814c4777138ff7757f222a475713794fa5a80'
    )

    expect(injectNetwork).toHaveBeenCalledWith(
      'build/contracts/MockVouching.json', '1234', '0xfc5c400518b36b6e04dae0427cc03072477180e8'
    )

    tk.reset()
  })
})
