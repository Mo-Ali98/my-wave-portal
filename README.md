# wave-portal-contract

## A smart contract created and deployed using Solidity.
 Smart contract created and deployed onto the Ethereum network for the [waveportal-project](https://github.com/Mo-Ali98/waveportal-project).
 Written in Solidity

### Get started
1. Run `npm install` at the root of your directory

2. 📈 Deploy to Rinkeby testnet.
  Create an [Alchemy](https://www.alchemy.com/) account and a project, Grab the API URL KEY.
  change the `hardhat.config.js` file to the one below.

 ```javascript
 require("@nomiclabs/hardhat-waffle");

 module.exports = {
   solidity: "0.8.0",
   networks: {
     rinkeby: {
       url: "YOUR_ALCHEMY_API_URL",
       accounts: ["YOUR_PRIVATE_RINKEBY_ACCOUNT_KEY"],
     },
   },
 };
```
3. Run this command to deploy on the Rinkeby testnet.
`npx hardhat run scripts/deploy.js --network rinkeby`

4. Copy the address of the deployed contract for your frontend Web3 app!

Shoutout [BuildSpace](https://buildspace.so/) for the course! 🔥
