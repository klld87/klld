import ethers from 'ethers';
import axios from 'axios';
import { ChainId, Token, Fetcher, WETH, Route } from '@uniswap/sdk';

import {
  ERC20_ABI,
  KOOL_TOKEN_ADDR,
  AID_TOKEN_ADDR,
  NFT_ABI,
  BAR_ABI,
  NFT_ADDRESS,
  BAR_ADDRESS,
  KOOL_ABI,
} from './constants';

export const getContract = (provider, tokenAddress, contract) => {
  return new ethers.Contract(tokenAddress, contract, provider);
};

export const getBalance = async (provider, tokenAddress, userAddress) => {
  const tokenContract = getContract(provider, tokenAddress, ERC20_ABI);
  try {
    return await tokenContract.balanceOf(userAddress);
  } catch {
    return '0';
  }
};

export const checkIngridients = async (ingridients, address) => {
  let failCount = 0;

  for (const ingridient of ingridients) {
    const getBalance = await getBalanceOf(address, ingridient.tokenId);
    if (ingridient.amount > getBalance) {
      failCount += 1;
    }
  }

  return failCount === 0;
};

export const getNFTTotalSupply = async (tokenId) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const contract = new ethers.Contract(NFT_ADDRESS, NFT_ABI, provider);
  const totalSupply = await contract.totalSupply(tokenId);
  return totalSupply / 1;
};

export const getBalanceOf = async (address, tokenId) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const contract = new ethers.Contract(NFT_ADDRESS, NFT_ABI, provider);
  const balanceOf = await contract.balanceOf(address, tokenId);
  return balanceOf / 1;
};

export const getNFTCirculatingSupply = async (tokenId) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const contract = new ethers.Contract(NFT_ADDRESS, NFT_ABI, provider);
  const circulatingSupply = await contract.circulatingSupply(tokenId);
  return circulatingSupply / 1;
};

export const approveKOOL = (amount) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const contract = new ethers.Contract(KOOL_TOKEN_ADDR, KOOL_ABI, provider);
  const signTransactions = contract.connect(signer);
  return signTransactions
    .approve(BAR_ADDRESS, amount)
    .then((data) => {
      return data;
    })
    .catch(() => {
      return null;
    });
};

export const getETHBalance = async (address) => {
  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const ETHbalance = await provider.getBalance(address);
    return ethers.utils.formatEther(ETHbalance);
  } catch {
    return 0;
  }
};

export const getDrink = (tokenId, amount) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const contract = new ethers.Contract(BAR_ADDRESS, BAR_ABI, provider);
  const signTransactions = contract.connect(signer);
  return signTransactions
    .getDrink(tokenId, amount)
    .then((data) => {
      return data;
    })
    .catch((error) => {
      if (error?.code === 4001) {
        return null;
      }
      const parseData = JSON.parse(JSON.stringify(error));
      const getMessage = parseData.error.message || null;
      return getMessage;
    });
};

export const getNFTPrice = async (tokenId) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const contract = new ethers.Contract(BAR_ADDRESS, BAR_ABI, provider);
  const price = await contract.prices(tokenId);
  return ethers.utils.formatEther(price);
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
  } catch {
    return 0.38; // hardcode
  }
};
