import { ChainId } from '@uniswap/sdk-core'

import { ExplorerDataType, getExplorerLink } from './getExplorerLink'

describe('#getExplorerLink', () => {
  it('correct for tx', () => {
    expect(getExplorerLink(1, 'abc', ExplorerDataType.TRANSACTION)).toEqual('https://etherscan.io/tx/abc')
  })
  it('correct for token', () => {
    expect(getExplorerLink(1, 'abc', ExplorerDataType.TOKEN)).toEqual('https://etherscan.io/token/abc')
  })
  it('correct for address', () => {
    expect(getExplorerLink(1, 'abc', ExplorerDataType.ADDRESS)).toEqual('https://etherscan.io/address/abc')
  })
  it('correct for tx on ethereum classic', () => {
    expect(getExplorerLink(61, 'abc', ExplorerDataType.TRANSACTION)).toEqual('https://etc.blockscout.com/tx/abc')
  })
  it('correct for token on ethereum classic', () => {
    expect(getExplorerLink(61, 'abc', ExplorerDataType.TOKEN)).toEqual('https://etc.blockscout.com/token/abc')
  })
  it('correct for address on ethereum classic', () => {
    expect(getExplorerLink(61, 'abc', ExplorerDataType.ADDRESS)).toEqual('https://etc.blockscout.com/address/abc')
  })
  it('correct for tx on mordor testnet', () => {
    expect(getExplorerLink(63, 'abc', ExplorerDataType.TRANSACTION)).toEqual('https://etc-mordor.blockscout.com/tx/abc')
  })
  it('correct for token on mordor testnet', () => {
    expect(getExplorerLink(63, 'abc', ExplorerDataType.TOKEN)).toEqual('https://etc-mordor.blockscout.com/token/abc')
  })
  it('correct for address on mordor testnet', () => {
    expect(getExplorerLink(63, 'abc', ExplorerDataType.ADDRESS)).toEqual(
      'https://etc-mordor.blockscout.com/address/abc'
    )
  })
  it('unrecognized chain id defaults to mainnet', () => {
    expect(getExplorerLink(2, 'abc', ExplorerDataType.ADDRESS)).toEqual('https://etherscan.io/address/abc')
  })
  it('arbitrum', () => {
    expect(getExplorerLink(42161, 'abc', ExplorerDataType.ADDRESS)).toEqual('https://arbiscan.io/address/abc')
  })
  it('bnb chain', () => {
    expect(getExplorerLink(ChainId.BNB, 'abc', ExplorerDataType.ADDRESS)).toEqual('https://bscscan.com/address/abc')
  })
  it('polygon', () => {
    expect(getExplorerLink(137, 'abc', ExplorerDataType.ADDRESS)).toEqual('https://polygonscan.com/address/abc')
  })
  it('celo', () => {
    expect(getExplorerLink(42220, 'abc', ExplorerDataType.ADDRESS)).toEqual('https://celoscan.io/address/abc')
  })
  it('goerli', () => {
    expect(getExplorerLink(5, 'abc', ExplorerDataType.ADDRESS)).toEqual('https://goerli.etherscan.io/address/abc')
  })
  it('avalanche', () => {
    expect(getExplorerLink(ChainId.AVALANCHE, 'abc', ExplorerDataType.ADDRESS)).toEqual(
      'https://snowtrace.io/address/abc'
    )
  })
  it('base', () => {
    expect(getExplorerLink(ChainId.BASE, 'abc', ExplorerDataType.ADDRESS)).toEqual('https://basescan.org/address/abc')
  })
})
