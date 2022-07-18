# This is my attempt to build a DAO

### **Welcome 👋**
To run this DAO, clone this repo and follow these commands:

1. Run `npm install` at the root of your directory
2. Run `npm start` to start the project
3. open localhost:3000 and give it a try!

### We attempt to deploy our own:
 - Membership NFTs (ERC1155 so that multiple people can own it)
 - ERC20 token
 - Custom governance contract
 - Treasury 

### We'll be using "thirdweb" which lets us work with smart contracts using just JavaScript.
https://thirdweb.com/ 

### Special scripts
 - Run `node scripts/2-deploy-drop.js ` to create & deploy an ERC-1155 contract to Rinkeby.
 - Run `node scripts/3-config-nft.js ` to deploy metadata associated with our membership NFT.
 - Run `node scripts/5-deploy-token.js ` to create an ERC20 token and deploy it.
 - Run `node scripts/7-airdrop-token.js ` to airdrop treasury tokens to DAO members.
 - Run `node scripts/10-create-vote-proposals ` to create vote proposals(you need to edit this script for the proposals to work)
 - Run `node scripts/11-revoke-roles ` to Remove admin powers

### Special Thanks to buildspace