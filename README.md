## Lit Protocol SkaleHello World Example

* yarn install
* node index.mjs

* update `checkAndSignAuthMessage` with either `skale` for mainnet and `skaleTestnet` for testnet
```javascript
const authSig = await checkAndSignAuthMessage({
chain: '', // add skaleTestnet or skale for mainnet
});
```

* NOTE: need to add SIWE for running node applications just shows a simple connection using various chain ID's