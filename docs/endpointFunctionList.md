
# Endpoint maps

<p align="center">
  <a href="https://www.npmjs.com/package/okx-api">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://github.com/sieblyio/okx-api/blob/master/docs/images/logoDarkMode2.svg?raw=true#gh-dark-mode-only">
      <img alt="SDK Logo" src="https://github.com/sieblyio/okx-api/blob/master/docs/images/logoBrightMode2.svg?raw=true#gh-light-mode-only">
    </picture>
  </a>
</p>

Each REST client is a JavaScript class, which provides functions individually mapped to each endpoint available in the exchange's API offering. 

The following table shows all methods available in each REST client, whether the method requires authentication (automatically handled if API keys are provided), as well as the exact endpoint each method is connected to.

This can be used to easily find which method to call, once you have [found which endpoint you're looking to use](https://github.com/sieblyio/awesome-crypto-examples/wiki/How-to-find-SDK-functions-that-match-API-docs-endpoint).

All REST clients are in the [src](/src) folder. For usage examples, make sure to check the [examples](/examples) folder.

List of clients:
- [rest-client](#rest-clientts)
- [websocket-api-client](#websocket-api-clientts)


If anything is missing or wrong, please open an issue or let us know in our [Node.js Traders](https://t.me/nodetraders) telegram group!

## How to use table

Table consists of 4 parts:

- Function name
- AUTH
- HTTP Method
- Endpoint

**Function name** is the name of the function that can be called through the SDK. Check examples folder in the repo for more help on how to use them!

**AUTH** is a boolean value that indicates if the function requires authentication - which means you need to pass your API key and secret to the SDK.

**HTTP Method** shows HTTP method that the function uses to call the endpoint. Sometimes endpoints can have same URL, but different HTTP method so you can use this column to differentiate between them.

**Endpoint** is the URL that the function uses to call the endpoint. Best way to find exact function you need for the endpoint is to search for URL in this table and find corresponding function name.


# rest-client.ts

This table includes all endpoints from the official Exchange API docs and corresponding SDK functions for each endpoint that are found in [rest-client.ts](/src/rest-client.ts). 

| Function | AUTH | HTTP Method | Endpoint |
| -------- | :------: | :------: | -------- |
| [getAccountInstruments()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L504) | :closed_lock_with_key:  | GET | `/api/v5/account/instruments` |
| [getBalance()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L510) | :closed_lock_with_key:  | GET | `/api/v5/account/balance` |
| [getPositions()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L514) | :closed_lock_with_key:  | GET | `/api/v5/account/positions` |
| [getPositionsHistory()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L518) | :closed_lock_with_key:  | GET | `/api/v5/account/positions-history` |
| [getAccountPositionRisk()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L524) | :closed_lock_with_key:  | GET | `/api/v5/account/account-position-risk` |
| [getBills()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L531) | :closed_lock_with_key:  | GET | `/api/v5/account/bills` |
| [getBillsArchive()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L536) | :closed_lock_with_key:  | GET | `/api/v5/account/bills-archive` |
| [getAccountBillSubtypes()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L544) | :closed_lock_with_key:  | GET | `/api/v5/account/subtypes` |
| [requestBillsHistoryDownloadLink()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L558) | :closed_lock_with_key:  | POST | `/api/v5/account/bills-history-archive` |
| [getRequestedBillsHistoryLink()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L567) | :closed_lock_with_key:  | GET | `/api/v5/account/bills-history-archive` |
| [getAccountConfiguration()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L573) | :closed_lock_with_key:  | GET | `/api/v5/account/config` |
| [setPositionMode()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L577) | :closed_lock_with_key:  | POST | `/api/v5/account/set-position-mode` |
| [setSettleCurrency()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L583) | :closed_lock_with_key:  | POST | `/api/v5/account/set-settle-currency` |
| [setFeeType()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L589) | :closed_lock_with_key:  | POST | `/api/v5/account/set-fee-type` |
| [setLeverage()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L593) | :closed_lock_with_key:  | POST | `/api/v5/account/set-leverage` |
| [getMaxBuySellAmount()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L598) | :closed_lock_with_key:  | GET | `/api/v5/account/max-size` |
| [getMaxAvailableTradableAmount()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L611) | :closed_lock_with_key:  | GET | `/api/v5/account/max-avail-size` |
| [changePositionMargin()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L621) | :closed_lock_with_key:  | POST | `/api/v5/account/position/margin-balance` |
| [movePositions()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L632) | :closed_lock_with_key:  | POST | `/api/v5/account/move-positions` |
| [getMovePositionsHistory()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L640) | :closed_lock_with_key:  | GET | `/api/v5/account/move-positions-history` |
| [getLeverage()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L646) | :closed_lock_with_key:  | GET | `/api/v5/account/leverage-info` |
| [getLeverageV2()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L658) | :closed_lock_with_key:  | GET | `/api/v5/account/leverage-info` |
| [getLeverageEstimatedInfo()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L666) | :closed_lock_with_key:  | GET | `/api/v5/account/adjust-leverage-info` |
| [getMaxLoan()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L677) | :closed_lock_with_key:  | GET | `/api/v5/account/max-loan` |
| [getFeeRates()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L686) | :closed_lock_with_key:  | GET | `/api/v5/account/trade-fee` |
| [getInterestAccrued()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L697) | :closed_lock_with_key:  | GET | `/api/v5/account/interest-accrued` |
| [getInterestRate()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L709) | :closed_lock_with_key:  | GET | `/api/v5/account/interest-rate` |
| [setGreeksDisplayType()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L713) | :closed_lock_with_key:  | POST | `/api/v5/account/set-greeks` |
| [setIsolatedMode()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L717) | :closed_lock_with_key:  | POST | `/api/v5/account/set-isolated-mode` |
| [getMaxWithdrawals()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L724) | :closed_lock_with_key:  | GET | `/api/v5/account/max-withdrawal` |
| [getAccountRiskState()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L728) | :closed_lock_with_key:  | GET | `/api/v5/account/risk-state` |
| [setAccountCollateralAssets()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L732) | :closed_lock_with_key:  | POST | `/api/v5/account/set-collateral-assets` |
| [getAccountCollateralAssets()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L746) | :closed_lock_with_key:  | GET | `/api/v5/account/collateral-assets` |
| [submitQuickMarginBorrowRepay()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L758) | :closed_lock_with_key:  | POST | `/api/v5/account/quick-margin-borrow-repay` |
| [getQuickMarginBorrowRepayHistory()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L767) | :closed_lock_with_key:  | GET | `/api/v5/account/quick-margin-borrow-repay-history` |
| [borrowRepayVIPLoan()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L776) | :closed_lock_with_key:  | POST | `/api/v5/account/borrow-repay` |
| [getVIPLoanBorrowRepayHistory()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L785) | :closed_lock_with_key:  | GET | `/api/v5/account/borrow-repay-history` |
| [getVIPInterestAccrued()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L789) | :closed_lock_with_key:  | GET | `/api/v5/account/vip-interest-accrued` |
| [getVIPInterestDeducted()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L793) | :closed_lock_with_key:  | GET | `/api/v5/account/vip-interest-deducted` |
| [getVIPLoanOrders()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L799) | :closed_lock_with_key:  | GET | `/api/v5/account/vip-loan-order-list` |
| [getVIPLoanOrder()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L805) | :closed_lock_with_key:  | GET | `/api/v5/account/vip-loan-order-detail` |
| [getBorrowInterestLimits()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L811) | :closed_lock_with_key:  | GET | `/api/v5/account/interest-limits` |
| [getFixedLoanBorrowLimit()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L818) | :closed_lock_with_key:  | GET | `/api/v5/account/fixed-loan/borrowing-limit` |
| [getFixedLoanBorrowQuote()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L822) | :closed_lock_with_key:  | GET | `/api/v5/account/fixed-loan/borrowing-quote` |
| [submitFixedLoanBorrowOrder()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L831) | :closed_lock_with_key:  | POST | `/api/v5/account/fixed-loan/borrowing-order` |
| [updateFixedLoanBorrowOrder()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L844) | :closed_lock_with_key:  | POST | `/api/v5/account/fixed-loan/amend-borrowing-order` |
| [manualRenewFixedLoanBorrowOrder()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L857) | :closed_lock_with_key:  | POST | `/api/v5/account/fixed-loan/manual-reborrow` |
| [repayFixedLoanBorrowOrder()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L871) | :closed_lock_with_key:  | POST | `/api/v5/account/fixed-loan/repay-borrowing-order` |
| [convertFixedLoanToMarketLoan()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L882) | :closed_lock_with_key:  | POST | `/api/v5/account/fixed-loan/convert-to-market-loan` |
| [reduceFixedLoanLiabilities()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L893) | :closed_lock_with_key:  | POST | `/api/v5/account/fixed-loan/reduce-liabilities` |
| [getFixedLoanBorrowOrders()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L908) | :closed_lock_with_key:  | GET | `/api/v5/account/fixed-loan/borrowing-orders-list` |
| [manualBorrowRepay()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L917) | :closed_lock_with_key:  | POST | `/api/v5/account/spot-manual-borrow-repay` |
| [setAutoRepay()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L931) | :closed_lock_with_key:  | POST | `/api/v5/account/set-auto-repay` |
| [getBorrowRepayHistory()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L939) | :closed_lock_with_key:  | GET | `/api/v5/account/spot-borrow-repay-history` |
| [positionBuilder()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L945) | :closed_lock_with_key:  | POST | `/api/v5/account/position-builder` |
| [updateRiskOffsetAmount()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L949) | :closed_lock_with_key:  | POST | `/api/v5/account/set-riskOffset-amt` |
| [getGreeks()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L961) | :closed_lock_with_key:  | GET | `/api/v5/account/greeks` |
| [getPMLimitation()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L965) | :closed_lock_with_key:  | GET | `/api/v5/account/position-tiers` |
| [updateRiskOffsetType()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L973) | :closed_lock_with_key:  | POST | `/api/v5/account/set-riskOffset-type` |
| [activateOption()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L981) | :closed_lock_with_key:  | POST | `/api/v5/account/activate-option` |
| [activateFeature()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L994) | :closed_lock_with_key:  | POST | `/api/v5/account/activate-feature` |
| [setAutoLoan()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1000) | :closed_lock_with_key:  | POST | `/api/v5/account/set-auto-loan` |
| [presetAccountLevelSwitch()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1004) | :closed_lock_with_key:  | POST | `/api/v5/account/account-level-switch-preset` |
| [getAccountSwitchPrecheck()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1015) | :closed_lock_with_key:  | GET | `/api/v5/account/set-account-switch-precheck` |
| [setAccountMode()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1024) | :closed_lock_with_key:  | POST | `/api/v5/account/set-account-level` |
| [resetMMPStatus()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1030) | :closed_lock_with_key:  | POST | `/api/v5/account/mmp-reset` |
| [setMMPConfig()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1038) | :closed_lock_with_key:  | POST | `/api/v5/account/mmp-config` |
| [getMMPConfig()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1042) | :closed_lock_with_key:  | GET | `/api/v5/account/mmp-config` |
| [setTradingConfig()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1046) | :closed_lock_with_key:  | POST | `/api/v5/account/set-trading-config` |
| [precheckSetDeltaNeutral()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1052) | :closed_lock_with_key:  | GET | `/api/v5/account/precheck-set-delta-neutral` |
| [submitOrder()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1067) | :closed_lock_with_key:  | POST | `/api/v5/trade/order` |
| [submitMultipleOrders()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1071) | :closed_lock_with_key:  | POST | `/api/v5/trade/batch-orders` |
| [cancelOrder()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1075) | :closed_lock_with_key:  | POST | `/api/v5/trade/cancel-order` |
| [cancelMultipleOrders()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1079) | :closed_lock_with_key:  | POST | `/api/v5/trade/cancel-batch-orders` |
| [amendOrder()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1085) | :closed_lock_with_key:  | POST | `/api/v5/trade/amend-order` |
| [amendMultipleOrders()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1089) | :closed_lock_with_key:  | POST | `/api/v5/trade/amend-batch-orders` |
| [closePositions()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1093) | :closed_lock_with_key:  | POST | `/api/v5/trade/close-position` |
| [getOrderDetails()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1097) | :closed_lock_with_key:  | GET | `/api/v5/trade/order` |
| [getOrderList()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1101) | :closed_lock_with_key:  | GET | `/api/v5/trade/orders-pending` |
| [getOrderHistory()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1108) | :closed_lock_with_key:  | GET | `/api/v5/trade/orders-history` |
| [getOrderHistoryArchive()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1115) | :closed_lock_with_key:  | GET | `/api/v5/trade/orders-history-archive` |
| [getFills()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1124) | :closed_lock_with_key:  | GET | `/api/v5/trade/fills` |
| [getFillsHistory()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1131) | :closed_lock_with_key:  | GET | `/api/v5/trade/fills-history` |
| [getEasyConvertCurrencies()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1136) | :closed_lock_with_key:  | GET | `/api/v5/trade/easy-convert-currency-list` |
| [submitEasyConvert()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1149) | :closed_lock_with_key:  | POST | `/api/v5/trade/easy-convert` |
| [getEasyConvertHistory()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1158) | :closed_lock_with_key:  | GET | `/api/v5/trade/easy-convert-history` |
| [getOneClickRepayCurrencyList()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1167) | :closed_lock_with_key:  | GET | `/api/v5/trade/one-click-repay-currency-list` |
| [submitOneClickRepay()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1181) | :closed_lock_with_key:  | POST | `/api/v5/trade/one-click-repay` |
| [getOneClickRepayHistory()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1189) | :closed_lock_with_key:  | GET | `/api/v5/trade/one-click-repay-history` |
| [cancelMassOrder()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1193) | :closed_lock_with_key:  | POST | `/api/v5/trade/mass-cancel` |
| [cancelAllAfter()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1205) | :closed_lock_with_key:  | POST | `/api/v5/trade/cancel-all-after` |
| [getAccountRateLimit()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1212) | :closed_lock_with_key:  | GET | `/api/v5/trade/account-rate-limit` |
| [submitOrderPrecheck()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1216) | :closed_lock_with_key:  | POST | `/api/v5/trade/order-precheck` |
| [placeAlgoOrder()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1226) | :closed_lock_with_key:  | POST | `/api/v5/trade/order-algo` |
| [cancelAlgoOrder()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1230) | :closed_lock_with_key:  | POST | `/api/v5/trade/cancel-algos` |
| [amendAlgoOrder()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1236) | :closed_lock_with_key:  | POST | `/api/v5/trade/amend-algos` |
| [cancelAdvanceAlgoOrder()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1242) | :closed_lock_with_key:  | POST | `/api/v5/trade/cancel-advance-algos` |
| [getAlgoOrderDetails()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1248) | :closed_lock_with_key:  | GET | `/api/v5/trade/order-algo` |
| [getAlgoOrderList()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1254) | :closed_lock_with_key:  | GET | `/api/v5/trade/orders-algo-pending` |
| [getAlgoOrderHistory()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1260) | :closed_lock_with_key:  | GET | `/api/v5/trade/orders-algo-history` |
| [placeGridAlgoOrder()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1272) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/grid/order-algo` |
| [amendGridAlgoOrder()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1276) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/grid/amend-order-algo` |
| [stopGridAlgoOrder()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1293) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/grid/stop-order-algo` |
| [closeGridContractPosition()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1297) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/grid/close-position` |
| [cancelGridContractCloseOrder()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1303) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/grid/cancel-close-order` |
| [instantTriggerGridAlgoOrder()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1313) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/grid/order-instant-trigger` |
| [getGridAlgoOrderList()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1325) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/grid/orders-algo-pending` |
| [getGridAlgoOrderHistory()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1332) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/grid/orders-algo-history` |
| [getGridAlgoOrderDetails()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1339) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/grid/orders-algo-details` |
| [getGridAlgoSubOrders()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1349) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/grid/sub-orders` |
| [getGridAlgoOrderPositions()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1361) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/grid/positions` |
| [spotGridWithdrawIncome()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1368) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/grid/withdraw-income` |
| [computeGridMarginBalance()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1372) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/grid/compute-margin-balance` |
| [adjustGridMarginBalance()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1383) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/grid/margin-balance` |
| [adjustGridInvestment()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1392) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/grid/adjust-investment` |
| [getGridAIParameter()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1403) |  | GET | `/api/v5/tradingBot/grid/ai-param` |
| [computeGridMinInvestment()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1412) |  | POST | `/api/v5/tradingBot/grid/min-investment` |
| [getRSIBackTesting()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1419) |  | GET | `/api/v5/tradingBot/public/rsi-back-testing` |
| [getMaxGridQuantity()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1427) |  | GET | `/api/v5/tradingBot/grid/grid-quantity` |
| [createSignal()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1441) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/signal/create-signal` |
| [getSignals()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1445) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/signal/signals` |
| [createSignalBot()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1449) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/signal/order-algo` |
| [cancelSignalBots()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1455) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/signal/stop-order-algo` |
| [updateSignalMargin()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1464) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/signal/margin-balance` |
| [updateSignalTPSL()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1472) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/signal/amendTPSL` |
| [setSignalInstruments()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1480) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/signal/set-instruments` |
| [getSignalBotOrder()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1491) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/signal/orders-algo-details` |
| [getActiveSignalBot()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1501) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/signal/orders-algo-details` |
| [getSignalBotHistory()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1508) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/signal/orders-algo-history` |
| [getSignalBotPositions()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1515) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/signal/positions` |
| [getSignalBotPositionHistory()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1522) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/signal/positions-history` |
| [closeSignalBotPosition()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1531) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/signal/close-position` |
| [placeSignalBotSubOrder()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1539) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/signal/sub-order` |
| [cancelSubOrder()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1543) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/signal/cancel-sub-order` |
| [getSignalBotSubOrders()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1550) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/signal/sub-orders` |
| [getSignalBotEventHistory()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1554) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/signal/event-history` |
| [submitRecurringBuyOrder()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1566) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/recurring/order-algo` |
| [amendRecurringBuyOrder()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1572) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/recurring/amend-order-algo` |
| [stopRecurringBuyOrder()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1581) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/recurring/stop-order-algo` |
| [getRecurringBuyOrders()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1590) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/recurring/orders-algo-pending` |
| [getRecurringBuyOrderHistory()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1599) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/recurring/orders-algo-history` |
| [getRecurringBuyOrderDetails()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1608) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/recurring/orders-algo-details` |
| [getRecurringBuySubOrders()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1617) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/recurring/sub-orders` |
| [getCopytradingSubpositions()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1629) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/current-subpositions` |
| [getCopytradingSubpositionsHistory()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1635) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/subpositions-history` |
| [submitCopytradingAlgoOrder()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1641) | :closed_lock_with_key:  | POST | `/api/v5/copytrading/algo-order` |
| [closeCopytradingSubposition()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1647) | :closed_lock_with_key:  | POST | `/api/v5/copytrading/close-subposition` |
| [getCopytradingInstruments()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1656) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/instruments` |
| [setCopytradingInstruments()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1665) | :closed_lock_with_key:  | POST | `/api/v5/copytrading/set-instruments` |
| [getCopytradingProfitDetails()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1677) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/profit-sharing-details` |
| [getCopytradingTotalProfit()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1686) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/total-profit-sharing` |
| [getCopytradingUnrealizedProfit()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1692) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/unrealized-profit-sharing-details` |
| [getCopytradingTotalUnrealizedProfit()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1701) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/total-unrealized-profit-sharing` |
| [applyCopytradingLeadTrading()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1713) | :closed_lock_with_key:  | POST | `/api/v5/copytrading/apply-lead-trading` |
| [stopCopytradingLeadTrading()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1724) | :closed_lock_with_key:  | POST | `/api/v5/copytrading/stop-lead-trading` |
| [updateCopytradingProfitSharing()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1732) | :closed_lock_with_key:  | POST | `/api/v5/copytrading/amend-profit-sharing-ratio` |
| [getCopytradingAccount()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1746) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/config` |
| [setCopytradingFirstCopy()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1750) | :closed_lock_with_key:  | POST | `/api/v5/copytrading/first-copy-settings` |
| [updateCopytradingCopySettings()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1758) | :closed_lock_with_key:  | POST | `/api/v5/copytrading/amend-copy-settings` |
| [stopCopytradingCopy()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1766) | :closed_lock_with_key:  | POST | `/api/v5/copytrading/stop-copy-trading` |
| [getCopytradingCopySettings()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1778) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/copy-settings` |
| [getCopytradingBatchLeverageInfo()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1785) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/batch-leverage-info` |
| [setCopytradingBatchLeverage()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1791) | :closed_lock_with_key:  | POST | `/api/v5/copytrading/batch-set-leverage` |
| [getCopytradingMyLeadTraders()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1797) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/current-lead-traders` |
| [getCopytradingLeadTradersHistory()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1803) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/lead-traders-history` |
| [getCopytradingConfig()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1809) |  | GET | `/api/v5/copytrading/public-config` |
| [getCopytradingLeadRanks()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1815) |  | GET | `/api/v5/copytrading/public-lead-traders` |
| [getCopytradingLeadWeeklyPnl()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1821) |  | GET | `/api/v5/copytrading/public-weekly-pnl` |
| [getCopytradingLeadDailyPnl()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1828) |  | GET | `/api/v5/copytrading/public-pnl` |
| [getCopytradingLeadStats()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1834) |  | GET | `/api/v5/copytrading/public-stats` |
| [getCopytradingLeadPreferences()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1840) |  | GET | `/api/v5/copytrading/public-preference-currency` |
| [getCopytradingLeadOpenPositions()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1847) |  | GET | `/api/v5/copytrading/public-current-subpositions` |
| [getCopytradingLeadPositionHistory()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1853) |  | GET | `/api/v5/copytrading/public-subpositions-history` |
| [getCopyTraders()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1859) |  | GET | `/api/v5/copytrading/public-copy-traders` |
| [getCopytradingLeadPrivateRanks()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1865) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/lead-traders` |
| [getCopytradingLeadPrivateWeeklyPnl()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1871) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/weekly-pnl` |
| [getCopytradingPLeadPrivateDailyPnl()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1878) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/pnl` |
| [geCopytradingLeadPrivateStats()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1884) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/stats` |
| [getCopytradingLeadPrivatePreferences()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1890) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/preference-currency` |
| [getCopytradingLeadPrivateOpenPositions()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1897) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/performance-current-subpositions` |
| [getCopytradingLeadPrivatePositionHistory()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1906) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/performance-subpositions-history` |
| [getCopyTradersPrivate()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1915) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/copy-traders` |
| [getTickers()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1927) |  | GET | `/api/v5/market/tickers` |
| [getTicker()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1935) |  | GET | `/api/v5/market/ticker` |
| [getOrderBook()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1939) |  | GET | `/api/v5/market/books` |
| [getRpiOrderBook()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1946) |  | GET | `/api/v5/market/books-rpi` |
| [getFullOrderBook()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1953) |  | GET | `/api/v5/market/books-full` |
| [getCandles()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1960) |  | GET | `/api/v5/market/candles` |
| [getHistoricCandles()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1964) |  | GET | `/api/v5/market/history-candles` |
| [getTrades()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1968) |  | GET | `/api/v5/market/trades` |
| [getHistoricTrades()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1972) |  | GET | `/api/v5/market/history-trades` |
| [getOptionTradesByInstrument()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1982) |  | GET | `/api/v5/market/option/instrument-family-trades` |
| [getOptionTrades()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1988) |  | GET | `/api/v5/public/option-trades` |
| [get24hrTotalVolume()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1992) |  | GET | `/api/v5/market/platform-24-volume` |
| [getBlockCounterParties()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2002) | :closed_lock_with_key:  | GET | `/api/v5/rfq/counterparties` |
| [createBlockRFQ()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2006) | :closed_lock_with_key:  | POST | `/api/v5/rfq/create-rfq` |
| [cancelBlockRFQ()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2010) | :closed_lock_with_key:  | POST | `/api/v5/rfq/cancel-rfq` |
| [cancelMultipleBlockRFQs()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2016) | :closed_lock_with_key:  | POST | `/api/v5/rfq/cancel-batch-rfqs` |
| [cancelAllRFQs()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2022) | :closed_lock_with_key:  | POST | `/api/v5/rfq/cancel-all-rfqs` |
| [executeBlockQuote()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2026) | :closed_lock_with_key:  | POST | `/api/v5/rfq/execute-quote` |
| [getQuoteProducts()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2032) | :closed_lock_with_key:  | GET | `/api/v5/rfq/maker-instrument-settings` |
| [updateBlockQuoteProducts()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2036) | :closed_lock_with_key:  | POST | `/api/v5/rfq/maker-instrument-settings` |
| [resetBlockMmp()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2044) | :closed_lock_with_key:  | POST | `/api/v5/rfq/mmp-reset` |
| [updateBlockMmpConfig()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2052) | :closed_lock_with_key:  | POST | `/api/v5/rfq/mmp-config` |
| [getBlockMmpConfig()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2058) | :closed_lock_with_key:  | GET | `/api/v5/rfq/mmp-config` |
| [createBlockQuote()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2062) | :closed_lock_with_key:  | POST | `/api/v5/rfq/create-quote` |
| [cancelBlockQuote()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2068) | :closed_lock_with_key:  | POST | `/api/v5/rfq/cancel-quote` |
| [cancelMultipleBlockQuotes()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2074) | :closed_lock_with_key:  | POST | `/api/v5/rfq/cancel-batch-quotes` |
| [cancelAllBlockQuotes()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2080) | :closed_lock_with_key:  | POST | `/api/v5/rfq/cancel-all-quotes` |
| [cancelAllBlockAfter()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2084) | :closed_lock_with_key:  | POST | `/api/v5/rfq/cancel-all-after` |
| [getBlockRFQs()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2093) | :closed_lock_with_key:  | GET | `/api/v5/rfq/rfqs` |
| [getBlockQuotes()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2097) | :closed_lock_with_key:  | GET | `/api/v5/rfq/quotes` |
| [getBlockTrades()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2101) | :closed_lock_with_key:  | GET | `/api/v5/rfq/trades` |
| [getPublicRFQBlockTrades()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2105) |  | GET | `/api/v5/rfq/public-trades` |
| [getBlockTickers()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2109) |  | GET | `/api/v5/market/block-tickers` |
| [getBlockTicker()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2116) |  | GET | `/api/v5/market/block-ticker` |
| [getBlockPublicTrades()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2120) |  | GET | `/api/v5/public/block-trades` |
| [submitSpreadOrder()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2132) | :closed_lock_with_key:  | POST | `/api/v5/sprd/order` |
| [cancelSpreadOrder()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2138) | :closed_lock_with_key:  | POST | `/api/v5/sprd/cancel-order` |
| [cancelAllSpreadOrders()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2145) | :closed_lock_with_key:  | POST | `/api/v5/sprd/mass-cancel` |
| [updateSpreadOrder()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2153) | :closed_lock_with_key:  | POST | `/api/v5/sprd/amend-order` |
| [getSpreadOrder()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2159) | :closed_lock_with_key:  | GET | `/api/v5/sprd/order` |
| [getSpreadActiveOrders()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2166) | :closed_lock_with_key:  | GET | `/api/v5/sprd/orders-pending` |
| [getSpreadOrdersRecent()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2172) | :closed_lock_with_key:  | GET | `/api/v5/sprd/orders-history` |
| [getSpreadOrdersArchive()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2178) | :closed_lock_with_key:  | GET | `/api/v5/sprd/orders-history-archive` |
| [getSpreadTrades()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2184) | :closed_lock_with_key:  | GET | `/api/v5/sprd/trades` |
| [getSpreads()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2188) |  | GET | `/api/v5/sprd/spreads` |
| [getSpreadOrderBook()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2192) |  | GET | `/api/v5/sprd/books` |
| [getSpreadTicker()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2199) |  | GET | `/api/v5/market/sprd-ticker` |
| [getSpreadPublicTrades()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2203) |  | GET | `/api/v5/sprd/public-trades` |
| [getSpreadCandles()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2209) |  | GET | `/api/v5/market/sprd-candles` |
| [getSpreadHistoryCandles()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2213) |  | GET | `/api/v5/market/sprd-history-candles` |
| [cancelSpreadAllAfter()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2219) | :closed_lock_with_key:  | POST | `/api/v5/sprd/cancel-all-after` |
| [getInstruments()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2234) |  | GET | `/api/v5/public/instruments` |
| [getEventContractSeries()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2242) |  | GET | `/api/v5/public/event-contract/series` |
| [getEventContractEvents()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2252) |  | GET | `/api/v5/public/event-contract/events` |
| [getEventContractMarkets()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2262) |  | GET | `/api/v5/public/event-contract/markets` |
| [getDeliveryExerciseHistory()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2268) |  | GET | `/api/v5/public/delivery-exercise-history` |
| [getOpenInterest()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2272) |  | GET | `/api/v5/public/open-interest` |
| [getFundingRate()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2276) |  | GET | `/api/v5/public/funding-rate` |
| [getFundingRateHistory()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2280) |  | GET | `/api/v5/public/funding-rate-history` |
| [getMinMaxLimitPrice()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2286) |  | GET | `/api/v5/public/price-limit` |
| [getOptionMarketData()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2290) |  | GET | `/api/v5/public/opt-summary` |
| [getEstimatedDeliveryExercisePrice()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2298) |  | GET | `/api/v5/public/estimated-price` |
| [getDiscountRateAndInterestFreeQuota()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2304) |  | GET | `/api/v5/public/discount-rate-interest-free-quota` |
| [getSystemTime()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2308) |  | GET | `/api/v5/public/time` |
| [getHistoricalMarketData()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2312) |  | GET | `/api/v5/public/market-data-history` |
| [getMarkPrice()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2318) |  | GET | `/api/v5/public/mark-price` |
| [getPositionTiers()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2322) |  | GET | `/api/v5/public/position-tiers` |
| [getInterestRateAndLoanQuota()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2326) |  | GET | `/api/v5/public/interest-rate-loan-quota` |
| [getVIPInterestRateAndLoanQuota()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2330) |  | GET | `/api/v5/public/vip-interest-rate-loan-quota` |
| [getUnderlying()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2334) |  | GET | `/api/v5/public/underlying` |
| [getInsuranceFund()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2338) |  | GET | `/api/v5/public/insurance-fund` |
| [getMmInstrumentTypes()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2342) |  | GET | `/api/v5/public/mm-instrument-types` |
| [getDeltaHedgeCurrencies()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2349) |  | GET | `/api/v5/public/delta-hedge-currencies` |
| [getUnitConvert()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2355) |  | GET | `/api/v5/public/convert-contract-coin` |
| [getOptionTickBands()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2359) |  | GET | `/api/v5/public/instrument-tick-bands` |
| [getPremiumHistory()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2366) |  | GET | `/api/v5/public/premium-history` |
| [getIndexTickers()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2370) |  | GET | `/api/v5/market/index-tickers` |
| [getIndexCandles()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2377) |  | GET | `/api/v5/market/index-candles` |
| [getHistoricIndexCandles()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2381) |  | GET | `/api/v5/market/history-index-candles` |
| [getMarkPriceCandles()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2385) |  | GET | `/api/v5/market/mark-price-candles` |
| [getHistoricMarkPriceCandles()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2389) |  | GET | `/api/v5/market/history-mark-price-candles` |
| [getOracle()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2395) |  | GET | `/api/v5/market/open-oracle` |
| [getExchangeRate()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2399) |  | GET | `/api/v5/market/exchange-rate` |
| [getIndexComponents()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2403) |  | GET | `/api/v5/market/index-components` |
| [getEconomicCalendar()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2407) | :closed_lock_with_key:  | GET | `/api/v5/public/economic-calendar` |
| [getPublicBlockTrades()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2413) |  | GET | `/api/v5/market/block-trades` |
| [getSupportCoin()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2423) |  | GET | `/api/v5/rubik/stat/trading-data/support-coin` |
| [getOpenInterestHistory()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2427) |  | GET | `/api/v5/rubik/stat/contracts/open-interest-history` |
| [getTakerVolume()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2436) |  | GET | `/api/v5/rubik/stat/taker-volume` |
| [getContractTakerVolume()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2446) |  | GET | `/api/v5/rubik/stat/taker-volume-contract` |
| [getMarginLendingRatio()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2452) |  | GET | `/api/v5/rubik/stat/margin/loan-ratio` |
| [getTopTradersAccountRatio()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2461) |  | GET | `/api/v5/rubik/stat/contracts/long-short-account-ratio-contract-top-trader` |
| [getTopTradersContractPositionRatio()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2470) |  | GET | `/api/v5/rubik/stat/contracts/long-short-position-ratio-contract-top-trader` |
| [getLongShortContractRatio()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2479) |  | GET | `/api/v5/rubik/stat/contracts/long-short-account-ratio-contract` |
| [getLongShortRatio()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2488) |  | GET | `/api/v5/rubik/stat/contracts/long-short-account-ratio` |
| [getContractsOpenInterestAndVolume()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2500) |  | GET | `/api/v5/rubik/stat/contracts/open-interest-volume` |
| [getOptionsOpenInterestAndVolume()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2512) |  | GET | `/api/v5/rubik/stat/option/open-interest-volume` |
| [getPutCallRatio()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2519) |  | GET | `/api/v5/rubik/stat/option/open-interest-volume-ratio` |
| [getOpenInterestAndVolumeExpiry()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2529) |  | GET | `/api/v5/rubik/stat/option/open-interest-volume-expiry` |
| [getOpenInterestAndVolumeStrike()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2539) |  | GET | `/api/v5/rubik/stat/option/open-interest-volume-strike` |
| [getTakerFlow()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2550) |  | GET | `/api/v5/rubik/stat/option/taker-block-volume` |
| [getCurrencies()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2560) | :closed_lock_with_key:  | GET | `/api/v5/asset/currencies` |
| [getBalances()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2564) | :closed_lock_with_key:  | GET | `/api/v5/asset/balances` |
| [getNonTradableAssets()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2568) | :closed_lock_with_key:  | GET | `/api/v5/asset/non-tradable-assets` |
| [getAccountAssetValuation()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2572) | :closed_lock_with_key:  | GET | `/api/v5/asset/asset-valuation` |
| [fundsTransfer()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2578) | :closed_lock_with_key:  | POST | `/api/v5/asset/transfer` |
| [getFundsTransferState()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2583) | :closed_lock_with_key:  | GET | `/api/v5/asset/transfer-state` |
| [getAssetBillsDetails()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2594) | :closed_lock_with_key:  | GET | `/api/v5/asset/bills` |
| [getAssetBillsHistoric()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2616) | :closed_lock_with_key:  | GET | `/api/v5/asset/bills-history` |
| [getLightningDeposits()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2630) | :closed_lock_with_key:  | GET | `/api/v5/asset/deposit-lightning` |
| [getDepositAddress()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2638) | :closed_lock_with_key:  | GET | `/api/v5/asset/deposit-address` |
| [getDepositHistory()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2642) | :closed_lock_with_key:  | GET | `/api/v5/asset/deposit-history` |
| [submitWithdraw()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2648) | :closed_lock_with_key:  | POST | `/api/v5/asset/withdrawal` |
| [submitWithdrawLightning()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2652) | :closed_lock_with_key:  | POST | `/api/v5/asset/withdrawal-lightning` |
| [cancelWithdrawal()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2660) | :closed_lock_with_key:  | POST | `/api/v5/asset/cancel-withdrawal` |
| [getWithdrawalHistory()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2664) | :closed_lock_with_key:  | GET | `/api/v5/asset/withdrawal-history` |
| [getDepositWithdrawStatus()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2668) | :closed_lock_with_key:  | GET | `/api/v5/asset/deposit-withdraw-status` |
| [getExchanges()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2674) |  | GET | `/api/v5/asset/exchange-list` |
| [applyForMonthlyStatement()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2678) | :closed_lock_with_key:  | POST | `/api/v5/asset/monthly-statement` |
| [getMonthlyStatement()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2682) | :closed_lock_with_key:  | GET | `/api/v5/asset/monthly-statement` |
| [getConvertCurrencies()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2686) | :closed_lock_with_key:  | GET | `/api/v5/asset/convert/currencies` |
| [getConvertCurrencyPair()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2690) | :closed_lock_with_key:  | GET | `/api/v5/asset/convert/currency-pair` |
| [estimateConvertQuote()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2699) | :closed_lock_with_key:  | POST | `/api/v5/asset/convert/estimate-quote` |
| [convertTrade()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2703) | :closed_lock_with_key:  | POST | `/api/v5/asset/convert/trade` |
| [getConvertHistory()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2707) | :closed_lock_with_key:  | GET | `/api/v5/asset/convert/history` |
| [getSubAccountList()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2718) | :closed_lock_with_key:  | GET | `/api/v5/users/subaccount/list` |
| [resetSubAccountAPIKey()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2722) | :closed_lock_with_key:  | POST | `/api/v5/users/subaccount/modify-apikey` |
| [getSubAccountBalances()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2732) | :closed_lock_with_key:  | GET | `/api/v5/account/subaccount/balances` |
| [getSubAccountFundingBalances()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2738) | :closed_lock_with_key:  | GET | `/api/v5/asset/subaccount/balances` |
| [getSubAccountMaxWithdrawal()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2745) | :closed_lock_with_key:  | GET | `/api/v5/account/subaccount/max-withdrawal` |
| [getSubAccountTransferHistory()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2752) | :closed_lock_with_key:  | GET | `/api/v5/asset/subaccount/bills` |
| [getManagedSubAccountTransferHistory()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2763) | :closed_lock_with_key:  | GET | `/api/v5/asset/subaccount/managed-subaccount-bills` |
| [transferSubAccountBalance()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2773) | :closed_lock_with_key:  | POST | `/api/v5/asset/subaccount/transfer` |
| [setSubAccountTransferOutPermission()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2779) | :closed_lock_with_key:  | POST | `/api/v5/users/subaccount/set-transfer-out` |
| [getSubAccountCustodyTradingList()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2789) | :closed_lock_with_key:  | GET | `/api/v5/users/entrust-subaccount-list` |
| [setSubAccountLoanAllocation()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2795) | :closed_lock_with_key:  | POST | `/api/v5/account/subaccount/set-loan-allocation` |
| [getSubAccountBorrowInterestAndLimit()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2808) | :closed_lock_with_key:  | GET | `/api/v5/account/subaccount/interest-limits` |
| [getStakingOffers()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2825) | :closed_lock_with_key:  | GET | `/api/v5/finance/staking-defi/offers` |
| [submitStake()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2833) | :closed_lock_with_key:  | POST | `/api/v5/finance/staking-defi/purchase` |
| [redeemStake()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2844) | :closed_lock_with_key:  | POST | `/api/v5/finance/staking-defi/redeem` |
| [cancelStakingRequest()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2852) | :closed_lock_with_key:  | POST | `/api/v5/finance/staking-defi/cancel` |
| [getActiveStakingOrders()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2860) | :closed_lock_with_key:  | GET | `/api/v5/finance/staking-defi/orders-active` |
| [getStakingOrderHistory()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2873) | :closed_lock_with_key:  | GET | `/api/v5/finance/staking-defi/orders-history` |
| [getETHStakingProductInfo()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2893) |  | GET | `/api/v5/finance/staking-defi/eth/product-info` |
| [getSOLStakingProductInfo()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2897) |  | GET | `/api/v5/finance/staking-defi/sol/product-info` |
| [purchaseETHStaking()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2901) | :closed_lock_with_key:  | POST | `/api/v5/finance/staking-defi/eth/purchase` |
| [redeemETHStaking()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2908) | :closed_lock_with_key:  | POST | `/api/v5/finance/staking-defi/eth/redeem` |
| [getETHStakingBalance()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2912) | :closed_lock_with_key:  | GET | `/api/v5/finance/staking-defi/eth/balance` |
| [getETHStakingHistory()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2916) | :closed_lock_with_key:  | GET | `/api/v5/finance/staking-defi/eth/purchase-redeem-history` |
| [cancelRedeemETHStaking()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2929) | :closed_lock_with_key:  | POST | `/api/v5/finance/staking-defi/eth/cancel-redeem` |
| [getAPYHistory()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2940) |  | GET | `/api/v5/finance/staking-defi/eth/apy-history` |
| [getSavingBalance()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2950) | :closed_lock_with_key:  | GET | `/api/v5/finance/savings/balance` |
| [savingsPurchaseRedemption()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2954) | :closed_lock_with_key:  | POST | `/api/v5/finance/savings/purchase-redempt` |
| [setLendingRate()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2963) | :closed_lock_with_key:  | POST | `/api/v5/finance/savings/set-lending-rate` |
| [getLendingHistory()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2970) | :closed_lock_with_key:  | GET | `/api/v5/finance/savings/lending-history` |
| [getPublicBorrowInfo()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2974) |  | GET | `/api/v5/finance/savings/lending-rate-summary` |
| [getPublicBorrowHistory()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2978) |  | GET | `/api/v5/finance/savings/lending-rate-history` |
| [getLendingOffers()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2990) |  | GET | `/api/v5/finance/fixed-loan/lending-offers` |
| [getLendingAPYHistory()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2994) |  | GET | `/api/v5/finance/fixed-loan/lending-apy-history` |
| [getLendingVolume()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2998) |  | GET | `/api/v5/finance/fixed-loan/pending-lending-volume` |
| [placeLendingOrder()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3005) | :closed_lock_with_key:  | POST | `/api/v5/finance/fixed-loan/lending-order` |
| [amendLendingOrder()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3009) | :closed_lock_with_key:  | POST | `/api/v5/finance/fixed-loan/amend-lending-order` |
| [getLendingOrders()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3016) | :closed_lock_with_key:  | GET | `/api/v5/finance/fixed-loan/lending-orders-list` |
| [getLendingSubOrders()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3023) | :closed_lock_with_key:  | GET | `/api/v5/finance/fixed-loan/lending-sub-orders` |
| [getBorrowableCurrencies()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3036) |  | GET | `/api/v5/finance/flexible-loan/borrow-currencies` |
| [getCollateralAssets()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3044) |  | GET | `/api/v5/finance/flexible-loan/collateral-assets` |
| [getMaxLoanAmount()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3050) | :closed_lock_with_key:  | POST | `/api/v5/finance/flexible-loan/max-loan` |
| [adjustCollateral()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3054) | :closed_lock_with_key:  | POST | `/api/v5/finance/flexible-loan/adjust-collateral` |
| [getLoanInfo()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3061) | :closed_lock_with_key:  | GET | `/api/v5/finance/flexible-loan/loan-info` |
| [getLoanHistory()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3065) | :closed_lock_with_key:  | GET | `/api/v5/finance/flexible-loan/loan-history` |
| [getAccruedInterest()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3072) | :closed_lock_with_key:  | GET | `/api/v5/finance/flexible-loan/interest-accrued` |
| [getDcdCurrencyPairs()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3088) | :closed_lock_with_key:  | GET | `/api/v5/finance/sfp/dcd/currency-pair` |
| [getDcdProducts()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3092) | :closed_lock_with_key:  | GET | `/api/v5/finance/sfp/dcd/products` |
| [requestDcdQuote()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3096) | :closed_lock_with_key:  | POST | `/api/v5/finance/sfp/dcd/quote` |
| [submitDcdTrade()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3100) | :closed_lock_with_key:  | POST | `/api/v5/finance/sfp/dcd/trade` |
| [requestDcdRedeemQuote()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3104) | :closed_lock_with_key:  | POST | `/api/v5/finance/sfp/dcd/redeem-quote` |
| [submitDcdRedeem()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3110) | :closed_lock_with_key:  | POST | `/api/v5/finance/sfp/dcd/redeem` |
| [getDcdOrderStatus()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3114) | :closed_lock_with_key:  | GET | `/api/v5/finance/sfp/dcd/order-status` |
| [getDcdOrderHistory()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3120) | :closed_lock_with_key:  | GET | `/api/v5/finance/sfp/dcd/order-history` |
| [getStableRewardsProductInfo()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3133) | :closed_lock_with_key:  | GET | `/api/v5/finance/stable-rewards/product-info` |
| [requestStableRewardsQuote()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3143) | :closed_lock_with_key:  | POST | `/api/v5/finance/stable-rewards/quote` |
| [submitStableRewardsTrade()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3150) | :closed_lock_with_key:  | POST | `/api/v5/finance/stable-rewards/trade` |
| [getStableRewardsBalance()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3156) | :closed_lock_with_key:  | GET | `/api/v5/finance/stable-rewards/balance` |
| [getStableRewardsApyHistory()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3162) |  | GET | `/api/v5/finance/stable-rewards/apy-history` |
| [getStableRewardsSubscribeRedeemHistory()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3169) | :closed_lock_with_key:  | GET | `/api/v5/finance/stable-rewards/subscribe-redeem-history` |
| [getOkusdLimits()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3184) | :closed_lock_with_key:  | GET | `/api/v5/finance/okusd/limits` |
| [subscribeOkusd()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3188) | :closed_lock_with_key:  | POST | `/api/v5/finance/okusd/subscribe` |
| [redeemOkusd()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3194) | :closed_lock_with_key:  | POST | `/api/v5/finance/okusd/redeem` |
| [getGlpTodayPerformance()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3204) | :closed_lock_with_key:  | GET | `/api/v5/users/glp/today-performance` |
| [getGlpHistoricalPerformance()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3208) | :closed_lock_with_key:  | GET | `/api/v5/users/glp/historical-performance` |
| [getAffiliatePerformanceSummary()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3221) | :closed_lock_with_key:  | GET | `/api/v5/affiliate/performance/summary` |
| [getInviteeDetail()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3227) | :closed_lock_with_key:  | GET | `/api/v5/affiliate/invitee/detail` |
| [getAffiliateInviteeList()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3231) | :closed_lock_with_key:  | GET | `/api/v5/affiliate/invitee/list` |
| [getAffiliateLinkList()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3237) | :closed_lock_with_key:  | GET | `/api/v5/affiliate/link/list` |
| [getAffiliateCoInviterLinkList()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3243) | :closed_lock_with_key:  | GET | `/api/v5/affiliate/co-inviter/list` |
| [getAffiliateSubAffiliateList()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3249) | :closed_lock_with_key:  | GET | `/api/v5/affiliate/sub-affiliate/list` |
| [getAffiliateRebateInfo()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3255) | :closed_lock_with_key:  | GET | `/api/v5/users/partner/if-rebate` |
| [getSystemStatus()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3265) |  | GET | `/api/v5/system/status` |
| [getAnnouncements()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3277) |  | GET | `/api/v5/support/announcements` |
| [getAnnouncementTypes()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3286) |  | GET | `/api/v5/support/announcement-types` |
| [createSubAccount()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3301) | :closed_lock_with_key:  | POST | `/api/v5/broker/nd/create-subaccount` |
| [deleteSubAccount()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3310) | :closed_lock_with_key:  | POST | `/api/v5/broker/nd/delete-subaccount` |
| [createSubAccountAPIKey()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3314) | :closed_lock_with_key:  | POST | `/api/v5/broker/nd/subaccount/apikey` |

# websocket-api-client.ts

This table includes all endpoints from the official Exchange API docs and corresponding SDK functions for each endpoint that are found in [websocket-api-client.ts](/src/websocket-api-client.ts). 

This client provides WebSocket API endpoints which allow for faster interactions with the OKX API via a WebSocket connection.

| Function | AUTH | HTTP Method | Endpoint |
| -------- | :------: | :------: | -------- |
| [submitNewOrder()](https://github.com/sieblyio/okx-api/blob/master/src/websocket-api-client.ts#L89) | :closed_lock_with_key:  | WS | `order` |
| [submitMultipleOrders()](https://github.com/sieblyio/okx-api/blob/master/src/websocket-api-client.ts#L104) | :closed_lock_with_key:  | WS | `batch-orders` |
| [cancelOrder()](https://github.com/sieblyio/okx-api/blob/master/src/websocket-api-client.ts#L119) | :closed_lock_with_key:  | WS | `cancel-order` |
| [cancelMultipleOrders()](https://github.com/sieblyio/okx-api/blob/master/src/websocket-api-client.ts#L134) | :closed_lock_with_key:  | WS | `batch-cancel-orders` |
| [amendOrder()](https://github.com/sieblyio/okx-api/blob/master/src/websocket-api-client.ts#L149) | :closed_lock_with_key:  | WS | `amend-order` |
| [amendMultipleOrders()](https://github.com/sieblyio/okx-api/blob/master/src/websocket-api-client.ts#L164) | :closed_lock_with_key:  | WS | `batch-amend-orders` |
| [massCancelOrders()](https://github.com/sieblyio/okx-api/blob/master/src/websocket-api-client.ts#L179) | :closed_lock_with_key:  | WS | `mass-cancel` |
| [submitSpreadOrder()](https://github.com/sieblyio/okx-api/blob/master/src/websocket-api-client.ts#L194) | :closed_lock_with_key:  | WS | `sprd-order` |
| [amendSpreadOrder()](https://github.com/sieblyio/okx-api/blob/master/src/websocket-api-client.ts#L209) | :closed_lock_with_key:  | WS | `sprd-amend-order` |
| [cancelSpreadOrder()](https://github.com/sieblyio/okx-api/blob/master/src/websocket-api-client.ts#L226) | :closed_lock_with_key:  | WS | `sprd-cancel-order` |
| [massCancelSpreadOrders()](https://github.com/sieblyio/okx-api/blob/master/src/websocket-api-client.ts#L243) | :closed_lock_with_key:  | WS | `sprd-mass-cancel` |