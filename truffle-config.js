/**
 * For example, your .env file will have the following structure:
 *
 * MNEMONIC = <Your 12 phrase mnemonic>
 * PROJECT_ID = <Your Infura project id>
 *
 * Deployment with Truffle Dashboard (Recommended for best security practice)
 * --------------------------------------------------------------------------
 */

// require('dotenv').config();
// const { MNEMONIC, PROJECT_ID } = process.env;

// const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
    // Configure your compilers
    compilers: {
        solc: {
            version: "0.8.0",
        }
    },
  // contracts_build_directory : "./client/src/contracts",
  contracts_directory: "contracts/",
  contracts_build_directory: "frontend/src/abis/",
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      gas: 700000,
      network_id: "*", // Match any network id
    },
  },
};
