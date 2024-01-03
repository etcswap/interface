# ETCswap Interface

[![codecov](https://codecov.io/gh/Uniswap/interface/branch/main/graph/badge.svg?token=YVT2Y86O82)](https://codecov.io/gh/Uniswap/interface)

[![Unit Tests](https://github.com/Uniswap/interface/actions/workflows/unit-tests.yaml/badge.svg)](https://github.com/Uniswap/interface/actions/workflows/unit-tests.yaml)
[![Integration Tests](https://github.com/Uniswap/interface/actions/workflows/integration-tests.yaml/badge.svg)](https://github.com/Uniswap/interface/actions/workflows/integration-tests.yaml)
[![Lint](https://github.com/Uniswap/interface/actions/workflows/lint.yml/badge.svg)](https://github.com/Uniswap/interface/actions/workflows/lint.yml)
[![Release](https://github.com/Uniswap/interface/actions/workflows/release.yaml/badge.svg)](https://github.com/Uniswap/interface/actions/workflows/release.yaml)
[![Crowdin](https://badges.crowdin.net/uniswap-interface/localized.svg)](https://crowdin.com/project/uniswap-interface)

An open source interface for ETCswap -- a protocol for decentralized exchange of Ethereum Classic tokens.

- Website: [etcswap.org](https://etcswap.org/)
- Interface: [app.etcswap.org](https://app.etcswap.org)
- Docs: [uniswap.org/docs/](https://docs.uniswap.org/)
- Twitter: [@EthClassicDAO](https://twitter.com/EthClassicDAO)
- Reddit: [/r/EthereumClassic](https://www.reddit.com/r/ethereumclassic/)
- Email: [contact@etcswap.org](mailto:contact@etcswap.org)
- Discord: [Ethereum Classic](https://ethereumclassic.org/discord)
- Protocol Whitepapers:
  - [V1](https://hackmd.io/C-DvwDSfSxuh-Gd4WKE_ig)
  - [V2](https://uniswap.org/whitepaper.pdf)
  - [V3](https://uniswap.org/whitepaper-v3.pdf)

## Accessing the ETCswap Interface

To access the ETCswap Interface, use an IPFS gateway link from the
[latest release](https://github.com/etcswap/interface/releases/latest),
or visit [app.etcswap.org](https://app.etcswap.org).

## Unsupported tokens

Check out `useUnsupportedTokenList()` in [src/state/lists/hooks.ts](./src/state/lists/hooks.ts) for blocking tokens in your instance of the interface.

You can block an entire list of tokens by passing in a tokenlist like [here](./src/constants/lists.ts)

## Contributions

For steps on local deployment, development, and code contribution, please see [CONTRIBUTING](./CONTRIBUTING.md).

#### PR Title
Your PR title must follow [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/#summary), and should start with one of the following [types](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#type):

- build: Changes that affect the build system or external dependencies (example scopes: yarn, eslint, typescript)
- ci: Changes to our CI configuration files and scripts (example scopes: vercel, github, cypress)
- docs: Documentation only changes
- feat: A new feature
- fix: A bug fix
- perf: A code change that improves performance
- refactor: A code change that neither fixes a bug nor adds a feature
- style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- test: Adding missing tests or correcting existing tests

Example commit messages:

- feat: adds support for gnosis safe wallet
- fix: removes a polling memory leak
- chore: bumps redux version

Other things to note:

- Please describe the change using verb statements (ex: Removes X from Y)
- PRs with multiple changes should use a list of verb statements
- Add any relevant unit / integration tests
- Changes will be previewable via vercel. Non-obvious changes should include instructions for how to reproduce them


## Accessing ETCswap V2: This protocol was deployed to Ethereum Classic in 2022

The ETCswap Interface supports swapping, adding liquidity, removing liquidity and migrating liquidity for ETCswap protocol V2.

- Swap on ETCswap V2: <https://app.etcswap.org/swap?use=v2>
- View V2 liquidity: <https://app.etcswap.org/pools/v2>
- Add V2 liquidity: <https://app.etcswap.org/add/v2>
- Migrate V2 liquidity to V3: <https://app.etcswap.org/migrate/v2>

## Accessing ETCswap V1: This protocol was never deployed to Ethereum Classic

The ETCswap V1 interface for mainnet and testnets is not accessible because this protocol was never deployed to Ethereum Classic. Deployment began with the V2 protocol.
linked from the [v1.0.0 release](https://github.com/etcswap/uniswap-interface/releases/tag/v1.0.0).
