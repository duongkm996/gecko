import Web3 from "web3";
require("dotenv").config();

export const web3 = new Web3(process.env.REACT_APP_RPC_URL_BSC);

export const web3socket = new Web3(process.env.REACT_APP_RPC_URL_WSS_BSC_2);
