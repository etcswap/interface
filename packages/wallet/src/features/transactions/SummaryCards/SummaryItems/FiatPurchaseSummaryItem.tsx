import React, { createElement } from 'react'
import { useTranslation } from 'react-i18next'
import { useIsDarkMode } from 'ui/src'
import { getOptionalServiceProviderLogo } from 'uniswap/src/features/fiatOnRamp/utils'
import { getSymbolDisplayText } from 'uniswap/src/utils/currency'
import { NumberType } from 'utilities/src/format/types'
import { LogoWithTxStatus } from 'wallet/src/components/CurrencyLogo/LogoWithTxStatus'
import { AssetType } from 'wallet/src/entities/assets'
import { useLocalizationContext } from 'wallet/src/features/language/LocalizationContext'
import { useCurrencyInfo } from 'wallet/src/features/tokens/useCurrencyInfo'
import {
  SummaryItemProps,
  TransactionSummaryLayoutProps,
} from 'wallet/src/features/transactions/SummaryCards/types'
import { TXN_HISTORY_ICON_SIZE } from 'wallet/src/features/transactions/SummaryCards/utils'
import {
  FiatPurchaseTransactionInfo,
  TransactionDetails,
} from 'wallet/src/features/transactions/types'
import { buildCurrencyId } from 'wallet/src/utils/currencyId'

export function FiatPurchaseSummaryItem({
  transaction,
  layoutElement,
}: SummaryItemProps & {
  transaction: TransactionDetails & { typeInfo: FiatPurchaseTransactionInfo }
}): JSX.Element {
  const { t } = useTranslation()
  const { formatNumberOrString } = useLocalizationContext()

  const { chainId, typeInfo } = transaction
  const {
    inputCurrency,
    inputCurrencyAmount,
    outputCurrency,
    outputCurrencyAmount,
    inputSymbol,
    outputSymbol,
    serviceProviderLogo,
    institutionLogoUrl,
  } = typeInfo

  const outputCurrencyInfo = useCurrencyInfo(
    outputCurrency?.metadata.contractAddress
      ? buildCurrencyId(chainId, outputCurrency?.metadata.contractAddress)
      : undefined
  )

  const cryptoSymbol =
    outputSymbol ??
    getSymbolDisplayText(outputCurrencyInfo?.currency.symbol) ??
    t('transaction.currency.unknown')

  const cryptoPurchaseAmount =
    formatNumberOrString({ value: outputCurrencyAmount }) + ' ' + cryptoSymbol

  const isDarkMode = useIsDarkMode()
  const serviceProviderLogoUrl = getOptionalServiceProviderLogo(serviceProviderLogo, isDarkMode)

  const formatFiatTokenPrice = (): string => {
    return formatNumberOrString({
      value: inputCurrencyAmount && inputCurrencyAmount > 0 ? inputCurrencyAmount : undefined,
      type: NumberType.FiatTokenPrice,
      currencyCode: inputSymbol ?? inputCurrency?.code ?? 'usd',
    })
  }

  const isTransfer = inputSymbol && inputSymbol === outputSymbol

  const caption =
    outputCurrencyAmount !== undefined && outputCurrencyAmount !== null
      ? isTransfer
        ? cryptoPurchaseAmount
        : t('fiatOnRamp.summary.total', {
            cryptoAmount: cryptoPurchaseAmount,
            fiatAmount: formatFiatTokenPrice(),
          })
      : formatFiatTokenPrice()

  return createElement(layoutElement as React.FunctionComponent<TransactionSummaryLayoutProps>, {
    caption,
    icon: (
      <LogoWithTxStatus
        assetType={AssetType.Currency}
        chainId={transaction.chainId}
        currencyInfo={outputCurrencyInfo}
        institutionLogoUrl={institutionLogoUrl}
        serviceProviderLogoUrl={serviceProviderLogoUrl}
        size={TXN_HISTORY_ICON_SIZE}
        txStatus={transaction.status}
        txType={transaction.typeInfo.type}
      />
    ),
    transaction,
  })
}