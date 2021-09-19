import { web3 } from "../web3";

export const fromWei = (amount: string) => {
  return web3.utils.fromWei(amount, "ether");
};

export const toWei = (amount: string) => {
  return web3.utils.toWei(amount, "ether");
};
