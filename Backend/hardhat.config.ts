import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";
dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    hardhat: {
      forking: {
        enabled: true,
        url: "https://eth-mainnet.g.alchemy.com/v2/_iScTTmFgRiz_2zUUhQXVT1LAxBBxuSP"
      }
    },
    sepolia: {
      url: process.env.Sepolia_rpc,
      //@ts-ignore
      accounts: [process.env.Private_Key],
    },
  },
  etherscan:{
    apiKey: process.env.EtherscanAPI_KEY,
  }
};

export default config;
