import { ChainId } from '@uniswap/sdk-core'
import useHttpLocations from 'hooks/useHttpLocations'
import { useMemo } from 'react'
import { isAddress } from 'utils'

import EthereumLogo from '../../assets/images/ethereum-logo.png'
import AvaxLogo from '../../assets/svg/avax_logo.svg'
import BnbLogo from '../../assets/svg/bnb-logo.svg'
import CeloLogo from '../../assets/svg/celo_logo.svg'
import ClassicLogo from '../../assets/svg/etc-logo.svg'
import MaticLogo from '../../assets/svg/matic-token-icon.svg'
import { isCelo, isClassic, NATIVE_CHAIN_ID, nativeOnChain } from '../../constants/tokens'

type Network =
  | 'ethereum'
  | 'arbitrum'
  | 'optimism'
  | 'polygon'
  | 'smartchain'
  | 'celo'
  | 'avalanchec'
  | 'base'
  | 'classic'

export function chainIdToNetworkName(networkId: ChainId): Network {
  switch (networkId) {
    case ChainId.MAINNET:
      return 'ethereum'
    case ChainId.ARBITRUM_ONE:
      return 'arbitrum'
    case ChainId.OPTIMISM:
      return 'optimism'
    case ChainId.POLYGON:
      return 'polygon'
    case ChainId.BNB:
      return 'smartchain'
    case ChainId.CELO:
      return 'celo'
    case ChainId.CLASSIC:
      return 'classic'
    case ChainId.AVALANCHE:
      return 'avalanchec'
    case ChainId.BASE:
      return 'base'
    default:
      return 'ethereum'
  }
}

export function getNativeLogoURI(chainId: ChainId = ChainId.MAINNET): string {
  switch (chainId) {
    case ChainId.POLYGON:
    case ChainId.POLYGON_MUMBAI:
      return MaticLogo
    case ChainId.BNB:
      return BnbLogo
    case ChainId.CELO:
    case ChainId.CELO_ALFAJORES:
      return CeloLogo
    case ChainId.CLASSIC:
    case ChainId.CLASSIC_MORDOR:
      return ClassicLogo
    case ChainId.AVALANCHE:
      return AvaxLogo
    default:
      return EthereumLogo
  }
}

function getTokenLogoURI(address: string, chainId: ChainId = ChainId.MAINNET): string | void {
  const networkName = chainIdToNetworkName(chainId)
  const networksWithUrls = [
    ChainId.ARBITRUM_ONE,
    ChainId.MAINNET,
    ChainId.OPTIMISM,
    ChainId.BNB,
    ChainId.AVALANCHE,
    ChainId.BASE,
  ]
  if (isCelo(chainId) && address === nativeOnChain(chainId).wrapped.address) {
    return CeloLogo
  }

  if (isClassic(chainId) && address === nativeOnChain(chainId).wrapped.address) {
    return ClassicLogo
  }

  if (networksWithUrls.includes(chainId)) {
    return `https://raw.githubusercontent.com/etcswap/token-assets/master/blockchains/${networkName}/assets/${address}/logo.png`
  }
}

export default function useCurrencyLogoURIs(
  currency:
    | {
        isNative?: boolean
        isToken?: boolean
        address?: string
        chainId: number
        logoURI?: string | null
      }
    | null
    | undefined
): string[] {
  const locations = useHttpLocations(currency?.logoURI)
  return useMemo(() => {
    const logoURIs = [...locations]
    if (currency) {
      if (currency.isNative || currency.address === NATIVE_CHAIN_ID) {
        logoURIs.push(getNativeLogoURI(currency.chainId))
      } else if (currency.isToken || currency.address) {
        const checksummedAddress = isAddress(currency.address)
        const logoURI = checksummedAddress && getTokenLogoURI(checksummedAddress, currency.chainId)
        if (logoURI) {
          logoURIs.push(logoURI)
        }
      }
    }
    return logoURIs
  }, [currency, locations])
}
