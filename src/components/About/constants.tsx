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
    title: 'Trade Digital Assets',
    description: 'Buy, sell, and create tokens on Ethereum Classic',
    cta: 'Swap Tokens',
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
    title: 'Classic USD',
    description: 'A fiat-backed stablecoin that connects Ethereum Classic to the financial world.',
    lightIcon: <DollarSign color={lightTheme.neutral3} size={48} />,
    darkIcon: <StyledCardLogo src={darkDollarImgSrc} alt="Stablecoin" />,
    cta: 'Mint USC',
    elementName: InterfaceElementName.ABOUT_PAGE_BUY_CRYPTO_CARD,
  },
  {
    to: '/pools',
    title: 'Earn Fees',
    description: 'Liquidity Providers earn returns on their digital assets through ETCswap V3 trading fees.',
    lightIcon: <StyledCardLogo src={lightArrowImgSrc} alt="Earn" />,
    darkIcon: <StyledCardLogo src={darkArrowImgSrc} alt="Earn" />,
    cta: 'Earn Passive Income',
    elementName: InterfaceElementName.ABOUT_PAGE_EARN_CARD,
  },
  {
    to: 'https://launchpad.etcswap.org',
    external: true,
    title: 'Create Markets',
    description: 'Create a token that can be instantly traded for ETC with just one click.',
    lightIcon: <Terminal color={lightTheme.neutral3} size={48} />,
    darkIcon: <StyledCardLogo src={darkTerminalImgSrc} alt="Creators" />,
    cta: 'Launch Projects',
    elementName: InterfaceElementName.ABOUT_PAGE_DEV_DOCS_CARD,
  },
]
