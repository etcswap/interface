import { InterfaceElementName } from '@uniswap/analytics-events'
import { DollarSign, Terminal } from 'react-feather'
import styled from 'styled-components'
import { lightTheme } from 'theme/colors'

import darkArrowImgSrc from './images/aboutArrowDark.png'
import lightArrowImgSrc from './images/aboutArrowLight.png'
import darkDollarImgSrc from './images/aboutDollarDark.png'
import darkTerminalImgSrc from './images/aboutTerminalDark.png'
import nftCardImgSrc from './images/nftCard.png'
// import swapCardImgSrc from './images/swapCard.png'

export const MAIN_CARDS = [
  {
    to: '/swap',
    title: 'Swap Digital Assets',
    description: 'Buy, sell, and create tokens on Ethereum Classic, the largest proof-of-work smart contract blockchain.',
    cta: 'Trade on ETCswap V3',
    // darkBackgroundImgSrc: swapCardImgSrc,
    // lightBackgroundImgSrc: swapCardImgSrc,
    elementName: InterfaceElementName.ABOUT_PAGE_SWAP_CARD,
  },
  {
    to: '/nfts',
    title: 'Trade Collectables',
    description: 'Buy, sell and explore NFT collectables across marketplaces to find more listings at better prices.',
    cta: 'Explore NFT Collectables',
    darkBackgroundImgSrc: nftCardImgSrc,
    lightBackgroundImgSrc: nftCardImgSrc,
    elementName: InterfaceElementName.ABOUT_PAGE_NFTS_CARD,
  },
]

const StyledCardLogo = styled.img`
  min-width: 20px;
  min-height: 20px;
  max-height: 48px;
  max-width: 48px;
`

export const MORE_CARDS = [
  {
    to: 'https://classicusd.com',
    external: true,
    title: 'Mint USD',
    description: 'With quick processing times, low fees, and 1:1 collateralization, Classic USD is simply the best fiat-backed stablecoin product on the Ethereum Classic network.',
    lightIcon: <DollarSign color={lightTheme.neutral3} size={48} />,
    darkIcon: <StyledCardLogo src={darkDollarImgSrc} alt="Stablecoin" />,
    cta: 'Mint/Redeem Classic USD Stablecoin Tokens',
    elementName: InterfaceElementName.ABOUT_PAGE_BUY_CRYPTO_CARD,
  },
  {
    to: '/pools',
    title: 'Earn Fees',
    description: 'Multiple fee tiers, enable Liquidity Providers to receive suitable compensation based on the differing levels of risk they assume. V3 Liquidity Providers can provide liquidity with up to 4000x capital efficiency relative to the V2 protocol, earning higher returns on their capital.',
    lightIcon: <StyledCardLogo src={lightArrowImgSrc} alt="Earn" />,
    darkIcon: <StyledCardLogo src={darkArrowImgSrc} alt="Earn" />,
    cta: 'Build Your LP Portfolio',
    elementName: InterfaceElementName.ABOUT_PAGE_EARN_CARD,
  },
  {
    to: '#',
    external: true,
    title: 'Create Markets',
    description: 'ETCswap Launchpad lets anyone create a token on Ethereum Classic that can be instantly traded for ETC with just one click.',
    lightIcon: <Terminal color={lightTheme.neutral3} size={48} />,
    darkIcon: <StyledCardLogo src={darkTerminalImgSrc} alt="Creators" />,
    cta: 'Launch Tokens',
    elementName: InterfaceElementName.ABOUT_PAGE_DEV_DOCS_CARD,
  },
]
