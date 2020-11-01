import ethers from 'ethers';
import axios from 'axios';
import { ChainId, Token, Fetcher, WETH, Route } from '@uniswap/sdk';

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

export const getKoolBalance = async (provider, userAddress) => {
  const balance = await getBalance(provider, KOOL_TOKEN_ADDR, userAddress);
  return ethers.utils.formatEther(balance);
};

export const getAidBalance = async (provider, userAddress) => {
  const balance = await getBalance(provider, AID_TOKEN_ADDR, userAddress);
  return ethers.utils.formatEther(balance);
};

export const getKoolPrice = async () => {
  const chainId = ChainId.MAINNET;
  let ethInfo;

  try {
    const tkn = new Token(chainId, KOOL_TOKEN_ADDR, 18);
    const pair = await Fetcher.fetchPairData(tkn, WETH[tkn.chainId]);
    const route = new Route([pair], WETH[tkn.chainId]);

    ethInfo = await axios(
      'https://api.coinpaprika.com/v1/tickers/eth-ethereum'
    );

    const ethPrice = ethInfo.data.quotes.USD.price;
    const koolPriceInEth = route.midPrice.invert().toSignificant(6);

    return Number(ethPrice) * Number(koolPriceInEth);
  } catch (err) {
    console.log(err);
    return 0.38; // hardcode
  }
};
