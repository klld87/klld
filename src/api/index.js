import ethers from 'ethers';
import { ERC20_ABI, KOOL_TOKEN_ADDR, AID_TOKEN_ADDR } from './constants';

export const getContract = (provider, tokenAddress) => {
  return new ethers.Contract(tokenAddress, ERC20_ABI, provider);
};

export const getBalance = async (provider, tokenAddress, userAddress) => {
  const tokenContract = getContract(provider, tokenAddress);
  try {
    return await tokenContract.balanceOf(userAddress);
  } catch (e) {
    console.log(e);
    return '0';
  }
};

export const getKoolBalance = async (provider, userAddress) =>
  getBalance(provider, KOOL_TOKEN_ADDR, userAddress);

export const getAidBalance = async (provider, userAddress) =>
  getBalance(provider, AID_TOKEN_ADDR, userAddress);
