import { BrowserEvent, InterfaceElementName, SharedEventName } from '@uniswap/analytics-events'
import { TraceEvent } from 'analytics'
import { useDisableNFTRoutes } from 'hooks/useDisableNFTRoutes'
import styled from 'styled-components'
import { BREAKPOINTS } from 'theme'
import { ExternalLink, StyledRouterLink } from 'theme/components'

import { DiscordIcon, GithubIcon, TwitterIcon } from './Icons'
// import lightEcoImgSrc from './images/eco-logo.svg'
// import darkEcoImgSrc from './images/eco-logo.svg'

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 48px;
  max-width: 1440px;

  @media screen and (min-width: ${BREAKPOINTS.lg}px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

const LogoSection = styled.div`
  display: flex;
  flex-direction: column;
`

const LogoSectionLeft = styled(LogoSection)`
  display: none;

  @media screen and (min-width: ${BREAKPOINTS.lg}px) {
    display: flex;
  }
`

const LogoSectionBottom = styled(LogoSection)`
  display: flex;

  @media screen and (min-width: ${BREAKPOINTS.lg}px) {
    display: none;
  }
`

// const StyledLogo = styled.img`
//   width: 72px;
//   height: 72px;
//   display: none;

//   @media screen and (min-width: ${BREAKPOINTS.lg}px) {
//     display: block;
//   }
// `

const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 20px 0 0 0;
`

const SocialLink = styled.a`
  display: flex;
`

const FooterLinks = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  @media screen and (min-width: ${BREAKPOINTS.xl}px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 24px;
  }
`

const LinkGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 200px;
  margin: 20px 0 0 0;
  @media screen and (min-width: ${BREAKPOINTS.xl}px) {
    margin: 0;
  }
`

const LinkGroupTitle = styled.span`
  font-size: 16px;
  line-height: 20px;
  font-weight: 535;
`

const ExternalTextLink = styled(ExternalLink)`
  font-size: 16px;
  line-height: 20px;
  color: ${({ theme }) => theme.neutral2};
`

const TextLink = styled(StyledRouterLink)`
  font-size: 16px;
  line-height: 20px;
  color: ${({ theme }) => theme.neutral2};
`

const Copyright = styled.span`
  font-size: 16px;
  line-height: 20px;
  margin: 1rem 0 0 0;
  color: ${({ theme }) => theme.neutral3};
`

const LogoSectionContent = () => {
  // const isDarkMode = useIsDarkMode()
  return (
    <>
      {/* <StyledLogo src={isDarkMode ? darkEcoImgSrc : lightEcoImgSrc} alt="ETCswap Logo" /> */}
      <SocialLinks>
        <TraceEvent
          events={[BrowserEvent.onClick]}
          name={SharedEventName.ELEMENT_CLICKED}
          element={InterfaceElementName.TWITTER_LINK}
        >
          <SocialLink href="https://x.com/ETCswap_org" target="_blank" rel="noopener noreferrer">
            <TwitterIcon size={32} />
          </SocialLink>
        </TraceEvent>
        <SocialLink href="https://discord.gg/3j55xXEEdP" target="_blank" rel="noopener noreferrer">
          <DiscordIcon size={32} />
        </SocialLink>
        <SocialLink href="https://github.com/etcswap" target="_blank" rel="noopener noreferrer">
          <GithubIcon size={32} />
        </SocialLink>
      </SocialLinks>
      <Copyright>
        Made with 💚 by
        <br />
        ETCswap © {new Date().getFullYear()}
        <br />
        All Rights Reserved.
        <br />
        <a href="https://ethereumclassic.com" target="_blank" rel="noopener noreferrer">
          EthereumClassic.com
        </a>
      </Copyright>
    </>
  )
}

export const AboutFooter = () => {
  const shouldDisableNFTRoutes = useDisableNFTRoutes()
  return (
    <Footer>
      <LogoSectionLeft>
        <LogoSectionContent />
      </LogoSectionLeft>

      <FooterLinks>
        <LinkGroup>
          <LinkGroupTitle>V3 Applications</LinkGroupTitle>
          <ExternalTextLink href="https://launchpad.etcswap.org">Launchpad</ExternalTextLink>
          <TextLink to="/swap">Decentralized Exchange</TextLink>
          <TextLink to="/pools">Liquidity Portfolio</TextLink>
          <ExternalTextLink href="https://info.etcswap.org">Markets</ExternalTextLink>
          <ExternalTextLink href="https://www.geckoterminal.com/ethereum_classic/etcswap-v3/pools">
            Screener
          </ExternalTextLink>
          {/* <TextLink to="/tokens">Tokens</TextLink> */}
          {!shouldDisableNFTRoutes && <TextLink to="/nfts">NFT Marketplace</TextLink>}
        </LinkGroup>
        <LinkGroup>
          <LinkGroupTitle>Products</LinkGroupTitle>
          <ExternalTextLink href="https://v3.etcswap.org">ETCswap V3</ExternalTextLink>
          <ExternalTextLink href="https://launchpad.etcswap.org">Launchpad</ExternalTextLink>
          <ExternalTextLink href="https://classicusd.com">Classic USD</ExternalTextLink>
          <ExternalTextLink href="https://wrappedether.org">Wrapped Ether</ExternalTextLink>
          <ExternalTextLink href="https://v2.etcswap.org">ETCswap V2</ExternalTextLink>
          <ExternalTextLink href="https://hummingbot.org/exchanges/etcSwap/">Hummingbot</ExternalTextLink>
          <ExternalTextLink href="https://www.geckoterminal.com/ethereum_classic/pools">
            Gecko Terminal
          </ExternalTextLink>
        </LinkGroup>
        <LinkGroup>
          <LinkGroupTitle>Ethereum Classic</LinkGroupTitle>
          <TraceEvent
            events={[BrowserEvent.onClick]}
            name={SharedEventName.ELEMENT_CLICKED}
            element={InterfaceElementName.CAREERS_LINK}
          ></TraceEvent>
          <TraceEvent
            events={[BrowserEvent.onClick]}
            name={SharedEventName.ELEMENT_CLICKED}
            element={InterfaceElementName.BLOG_LINK}
          >
            <ExternalTextLink href="https://ethereumclassic.org/news">News</ExternalTextLink>
            <ExternalTextLink href="https://ethereumclassic.org/faqs">FAQs</ExternalTextLink>
            <ExternalTextLink href="https://ethereumclassic.org/why-classic">Why Classic?</ExternalTextLink>
            <ExternalTextLink href="https://ethereumclassic.org/knowledge">Knowledge</ExternalTextLink>
            <ExternalTextLink href="https://ethereumclassic.org/videos">Videos</ExternalTextLink>
          </TraceEvent>
        </LinkGroup>
        <LinkGroup>
          <LinkGroupTitle>Network</LinkGroupTitle>
          <TraceEvent
            events={[BrowserEvent.onClick]}
            name={SharedEventName.ELEMENT_CLICKED}
            element={InterfaceElementName.CAREERS_LINK}
          ></TraceEvent>
          <TraceEvent
            events={[BrowserEvent.onClick]}
            name={SharedEventName.ELEMENT_CLICKED}
            element={InterfaceElementName.BLOG_LINK}
          >
            <ExternalTextLink href="https://ethereumclassic.org/services">Services</ExternalTextLink>
            <ExternalTextLink href="https://ethereumclassic.org/community">ETC Community</ExternalTextLink>
            <ExternalTextLink href="https://ethereumclassic.org/network">Network Tools</ExternalTextLink>
            <ExternalTextLink href="https://ethereumclassic.org/mining">Mining</ExternalTextLink>
            <ExternalTextLink href="https://ethereumclassic.org/development">Developers</ExternalTextLink>
          </TraceEvent>
        </LinkGroup>
      </FooterLinks>

      <LogoSectionBottom>
        <LogoSectionContent />
      </LogoSectionBottom>
    </Footer>
  )
}
