//Below is the plugin to build Smart Contracts tests
require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/fVgj6baZIWiW3YIsYqEwhVBgeL4gssMj',
      accounts: ['64f313c212460dc6043e8296b75d0770ff2a6ba265b812b3859c0926d17c3067']
    }
  }
}