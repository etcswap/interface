import { ChainId } from '@uniswap/sdk-core'
import { useWeb3React } from '@web3-react/core'
import { useIsNftPage } from 'hooks/useIsNftPage'
import { useEffect } from 'react'
import { useDarkModeManager } from 'theme/components/ThemeToggle'

import { darkTheme, lightTheme } from '../colors'

const initialStyles = {
  width: '200vw',
  height: '200vh',
  transform: 'translate(-50vw, -100vh)',
}
const backgroundResetStyles = {
  width: '100vw',
  height: '100vh',
  transform: 'unset',
}

type TargetBackgroundStyles = typeof initialStyles | typeof backgroundResetStyles

const backgroundRadialGradientElement = document.getElementById('background-radial-gradient')
const setBackground = (newValues: TargetBackgroundStyles) =>
  Object.entries(newValues).forEach(([key, value]) => {
    if (backgroundRadialGradientElement) {
      backgroundRadialGradientElement.style[key as keyof typeof backgroundResetStyles] = value
    }
  })

function setDefaultBackground(backgroundRadialGradientElement: HTMLElement, darkMode?: boolean) {
  setBackground(initialStyles)
  const defaultLightGradient =
    'radial-gradient(100% 100% at 50% 0%, rgba(255, 184, 226, 0) 0%, rgba(255, 255, 255, 0) 100%), #FFFFFF'
  const defaultDarkGradient = 'linear-gradient(180deg, #131313 0%, #131313 100%)'
  backgroundRadialGradientElement.style.background = darkMode ? defaultDarkGradient : defaultLightGradient
}

export default function RadialGradientByChainUpdater(): null {
  const { chainId } = useWeb3React()
  const [darkMode] = useDarkModeManager()
  const isNftPage = useIsNftPage()

  // manage background color
  useEffect(() => {
    if (!backgroundRadialGradientElement) {
      return
    }

    if (isNftPage) {
      setBackground(initialStyles)
      backgroundRadialGradientElement.style.background = darkMode ? darkTheme.surface1 : lightTheme.surface1
      return
    }

    switch (chainId) {
      case ChainId.MAINNET: // #627EEA
      case ChainId.GOERLI:
      case ChainId.SEPOLIA: {
        setBackground(backgroundResetStyles)
        const ethereumLightGradient =
          'radial-gradient(100% 100% at 50% 0%, rgba(210, 218, 249, 0.5) 0%, rgba(233, 236, 252, 0.5) 50%, rgba(255, 255, 255, 1) 100%), #FFFFFF'
        const ethereumDarkGradient =
          'radial-gradient(100% 100% at 50% 0%, rgba(6, 12, 45, 0.5) 0%, rgba(3, 6, 22, 0.5) 50%, rgba(13, 13, 13, 1) 100%), #0D0E0E'
        backgroundRadialGradientElement.style.background = darkMode ? ethereumDarkGradient : ethereumLightGradient
        break
      }
      case ChainId.CLASSIC: // #33FF99
      case ChainId.CLASSIC_MORDOR: {
        setBackground(backgroundResetStyles)
        const classicLightGradient =
          'radial-gradient(100% 100% at 50% 0%, rgba(204, 255, 229, 0.5) 0%, rgba(230, 255, 242, 0.5) 50%, rgba(255, 255, 255, 1) 100%), #FFFFFF'
        const classicDarkGradient =
          'radial-gradient(100% 100% at 50% 0%, rgba(0, 51, 26, 0.5) 0%, rgba(0, 26, 13, 0.5) 50%, rgba(13, 13, 13, 1) 100%), #0D0E0E'
        backgroundRadialGradientElement.style.background = darkMode ? classicDarkGradient : classicLightGradient
        break
      }
      case ChainId.ARBITRUM_ONE: // #28A0F0
      case ChainId.ARBITRUM_GOERLI: {
        setBackground(backgroundResetStyles)
        const arbitrumLightGradient =
          'radial-gradient(100% 100% at 50% 0%, rgba(207, 234, 252, 0.5) 0%, rgba(231, 244, 253, 0.5) 50%, rgba(255, 255, 255, 1) 100%), #FFFFFF'
        const arbitrumDarkGradient =
          'radial-gradient(100% 100% at 50% 0%, rgba(4, 29, 47, 0.5) 0%, rgba(2, 15, 23, 0.5) 50%, rgba(13, 13, 13, 1) 100%), #0D0E0E'
        backgroundRadialGradientElement.style.background = darkMode ? arbitrumDarkGradient : arbitrumLightGradient
        break
      }
      case ChainId.AVALANCHE: {
        // #E84142
        setBackground(backgroundResetStyles)
        const avaxLightGradient =
          'radial-gradient(100% 100% at 50% 0%, rgba(249, 210, 210, 0.5) 0%, rgba(252, 233, 233, 0.5) 50.52%, rgba(255, 255, 255, 1) 100%), #FFFFFF'
        const avaxDarkGradient =
          'radial-gradient(100% 100% at 50% 0%, rgba(45, 6, 6, 0.5) 0%, rgba(22, 3, 3, 0.5) 50%, rgba(13, 13, 13, 1) 100%), #0D0E0E'
        backgroundRadialGradientElement.style.background = darkMode ? avaxDarkGradient : avaxLightGradient
        break
      }
      case ChainId.BASE: {
        // #0052FF
        setBackground(backgroundResetStyles)
        const baseLightGradient =
          'radial-gradient(100% 100% at 50% 0%, rgba(204, 220, 255, 0.5) 0%, rgba(230, 238, 255, 0.5) 50%, rgba(252, 255, 255, 1) 100%), #FFFFFF'
        const baseDarkGradient =
          'radial-gradient(100% 100% at 50% 0%, rgba(0, 16, 51, 0.5) 0%, rgba(0, 8, 26, 0.5) 50%, rgba(13, 13, 13, 1) 100%), #0D0E0E'
        backgroundRadialGradientElement.style.background = darkMode ? baseDarkGradient : baseLightGradient
        break
      }
      case ChainId.BNB: {
        // #F0B90B
        setBackground(backgroundResetStyles)
        const bscLightGradient =
          'radial-gradient(100% 100% at 50% 0%, rgba(253, 242, 206, 0.5) 0%, rgba(254, 249, 231, 0.5) 50%, rgba(255, 255, 255, 1) 100%), #FFFFFF'
        const bscDarkGradient =
          'radial-gradient(100% 100% at 50% 0%, rgba(49, 39, 2, 0.5) 0%, rgba(24, 19, 1, 0.5) 50%, rgba(13, 13, 13, 1) 100%), #0D0E0E'
        backgroundRadialGradientElement.style.background = darkMode ? bscDarkGradient : bscLightGradient
        break
      }
      case ChainId.CELO: // #FCFF52
      case ChainId.CELO_ALFAJORES: {
        setBackground(backgroundResetStyles)
        const celoLightGradient =
          'radial-gradient(100% 100% at 50% 0%, rgba(254, 255, 204, 0.5) 0%, rgba(255, 255, 230, 0.5) 50%, rgba(255, 255, 255, 1) 100%), #FFFFFF'
        const celoDarkGradient =
          'radial-gradient(100% 100% at 50% 0%, rgba(51, 51, 0, 0.5) 0%, rgba(26, 26, 0, 0.5) 50%, rgba(13, 13, 13, 1) 100%, #0D0E0E'
        backgroundRadialGradientElement.style.background = darkMode ? celoDarkGradient : celoLightGradient
        break
      }
      case ChainId.OPTIMISM: // #FF0420
      case ChainId.OPTIMISM_GOERLI: {
        setBackground(backgroundResetStyles)
        const optimismLightGradient =
          'radial-gradient(100% 100% at 50% 0%, rgba(255, 204, 210, 0.5) 0%, rgba(255, 230, 232, 0.5) 50%, rgba(255, 255, 255, 1) 100%), #FFFFFF'
        const optimismDarkGradient =
          'radial-gradient(100% 100% at 50% 0%, rgba(51, 0, 4, 0.5) 0%, rgba(26, 0, 2, 0.5) 50%, rgba(13, 13, 13, 1) 100%), #0D0E0E'
        backgroundRadialGradientElement.style.background = darkMode ? optimismDarkGradient : optimismLightGradient
        break
      }
      case ChainId.POLYGON: // #A457FF
      case ChainId.POLYGON_MUMBAI: {
        setBackground(backgroundResetStyles)
        const polygonLightGradient =
          'radial-gradient(100% 100% at 50% 0%, rgba(228, 204, 255, 0.5) 0%, rgba(241, 230, 255, 0.5) 50%, rgba(255, 255, 255, 1) 100%), #FFFFFF'
        const polygonDarkGradient =
          'radial-gradient(100% 100% at 50% 0%, rgba(22, 0, 51, 0.5) 0%, rgba(11, 0, 26, 0.5) 50%, rgba(13, 13, 13, 1) 100%), #0D0E0E'
        backgroundRadialGradientElement.style.background = darkMode ? polygonDarkGradient : polygonLightGradient
        break
      }
      default: {
        setDefaultBackground(backgroundRadialGradientElement, darkMode)
      }
    }
  }, [darkMode, chainId, isNftPage])
  return null
}
