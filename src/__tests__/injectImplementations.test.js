var ZosNetwork = require('./support/ZosNetwork')
var tk = require('timekeeper')
var injectImplementations = require('../injectImplementations')

jest.mock('../utils/readFile')
jest.mock('../injectNetwork')

var readFile = require('../utils/readFile')
var injectNetwork = require('../injectNetwork')

describe('injectNetwork', () => {
  it('should work', async () => {
    var now = new Date()
    tk.freeze(now.getTime())

    var inputJson = JSON.stringify(ZosNetwork)
    readFile.mockResolvedValue(inputJson)

    await injectImplementations("build/contracts", "zosnetwork.json", '1234')

    expect(readFile).toHaveBeenCalledWith('zosnetwork.json')

    expect(injectNetwork).toHaveBeenCalledWith(
      'build/contracts/Migrations.json', '1234', '0x0f972e6007aef1cc3a64ee3affd697a33bf2fdf3'
    )

    expect(injectNetwork).toHaveBeenCalledWith(
      'build/contracts/ZepToken.json', '1234', '0xe0549b2bdb7d477f75f946470e79686047b23604'
    )

    tk.reset()
  })
})
