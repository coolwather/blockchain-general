import { HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-waffle";
import * as dotenv from 'dotenv';

dotenv.config();

const ACCOUNTS = {
  count: 10,
  mnemonic: process.env.MNEMONIC || '',
  path: "m/44'/60'/0'/0",
};

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.11",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  defaultNetwork: 'localhost',
  networks: {
    localhost: {
      url: "http://127.0.0.1:7545",
      accounts: ACCOUNTS
    },
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/e673797441fc4517ab2dbd6ef36686b7",
      accounts: [
        "08141073f8a519b93255153c334438bb9cd998eb9b51f9723cc07931655c90df",
      ],
    },
  },
};

export default config;
