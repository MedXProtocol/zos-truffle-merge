const formatArtifactPath = require('../formatArtifactPath')

describe('formatArtifactPath', () => {
  it('should default to build/contracts', () => {
    expect(formatArtifactPath('Contract')).toEqual('build/contracts/Contract.json')
  })

  it('should use the passed path', () => {
    expect(formatArtifactPath('Contract', 'foo/bar')).toEqual('foo/bar/Contract.json')
  })

  it('should accept an empty path', () => {
    expect(formatArtifactPath('Contract', null)).toEqual('Contract.json')
  })
})
