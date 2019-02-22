var program = require('../program')

jest.mock('../injectProxies')
jest.mock('../injectImplementations')

var injectImplementations = require('../injectImplementations')
var injectProxies = require('../injectProxies')

describe('program', () => {
  it('should support the implementation', () => {
    program(['node', 'index.js', '-i', '-n', '1234', 'zosfile.json'])

    expect(injectImplementations).toHaveBeenCalledWith(
      undefined, 'zosfile.json', '1234'
    )
  })

  it('should use the proxies by default', () => {
    program(['node', 'index.js', '-n', '3', 'zosfile.json'])

    expect(injectProxies).toHaveBeenCalledWith(
      undefined, 'zosfile.json', '3'
    )
  })

  it('should allow the passing of artifacts path', () => {
    program(['node', 'index.js', '-n', '3', 'zosfile.json', '-a', 'build/other'])

    expect(injectProxies).toHaveBeenCalledWith(
      'build/other', 'zosfile.json', '3'
    )
  })
})
