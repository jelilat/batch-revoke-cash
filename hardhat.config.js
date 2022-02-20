"use strict";
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require('@nomiclabs/hardhat-ethers');
require("@nomiclabs/hardhat-etherscan");
const dotenv = require('dotenv');
dotenv.config();

const infuraId = process.env.INFURA_ID;
const etherscanKey = process.env.ETHERSCAN_KEY;
const privateKey = process.env.PRIVATE_KEY;
module.exports = {
    etherscan: {
        apiKey: etherscanKey,
    },
    defaultNetwork: "rinkeby",
    networks: {
        hardhat: {},
        rinkeby: {
            url: `https://rinkeby.infura.io/v3/${infuraId}`,
            accounts: [privateKey],
        }
    },
    solidity: {
        version: "0.8.9",
        settings: {
            optimizer: {
                enabled: true,
                runs: 200
            }
        }
    }
};
