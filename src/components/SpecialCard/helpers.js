export const getType = (
  openSeaLink,
  isWalletUnlocked,
  isTokensLoading,
  symbol,
  priceAmount,
  ethBalance,
  aidBalance,
  koolBalance,
  isAllClaimed,
  isFree,
  isLoadingBalance,
  isApproved
) => {
  if (openSeaLink) {
    return 'openSea';
  }
  if (isApproved) {
    return 'approve';
  }
  if (isWalletUnlocked) {
    if (isTokensLoading || isLoadingBalance) {
      return 'loading';
    } else {
      if (isAllClaimed) {
        return 'openSea';
      } else {
        if (isFree) {
          return 'free';
        }
        if (symbol === 'ETH') {
          if (priceAmount > ethBalance) {
            return 'insufficientFunds';
          }
        } else if (symbol === 'AID') {
          if (priceAmount > aidBalance) {
            return 'insufficientFunds';
          }
        } else if (symbol === 'KOOL') {
          if (priceAmount > koolBalance) {
            return 'insufficientFunds';
          }
        }
        return symbol === 'KOOL' ? 'approve' : 'getNFT2';
      }
    }
  }
  return 'unlockWallet';
};

export const isDisabled = (
  openSeaLink,
  isWalletUnlocked,
  isTokensLoading,
  symbol,
  priceAmount,
  ethBalance,
  aidBalance,
  koolBalance,
  isAllClaimed,
  isFree,
  isLoadingBalance,
  isApproved
) => {
  if (openSeaLink) {
    return false;
  }
  if (isApproved) {
    return false;
  }
  if (isWalletUnlocked) {
    if (isTokensLoading || isLoadingBalance) {
      return true;
    } else {
      if (isAllClaimed) {
        return true;
      } else {
        if (isFree) {
          return false;
        }
        if (symbol === 'ETH') {
          if (priceAmount > ethBalance) {
            return true;
          }
        } else if (symbol === 'AID') {
          if (priceAmount > aidBalance) {
            return true;
          }
        } else if (symbol === 'KOOL') {
          if (priceAmount > koolBalance) {
            return true;
          }
        }
        return false;
      }
    }
  }
  return false;
};

export const getTitle = (
  openSeaLink,
  isWalletUnlocked,
  isTokensLoading,
  symbol,
  priceAmount,
  ethBalance,
  aidBalance,
  koolBalance,
  isAllClaimed,
  isFree,
  isLoadingBalance,
  isApproved
) => {
  if (openSeaLink) {
    return 'GET ON OPENSEA';
  }
  if (isApproved) {
    return 'GET NFT';
  }
  if (isWalletUnlocked) {
    if (isTokensLoading || isLoadingBalance) {
      return 'loading...';
    } else {
      if (isAllClaimed) {
        return 'GET ON OPENSEA';
      } else {
        if (isFree) {
          return 'CLAIM FOR FREE';
        }
        if (symbol === 'ETH') {
          if (priceAmount > ethBalance) {
            return `NEED ${Number(priceAmount - ethBalance).toFixed(3)} ETH`;
          }
        } else if (symbol === 'AID') {
          if (priceAmount > aidBalance) {
            return `NEED ${Number(priceAmount - aidBalance).toFixed(2)} AID`;
          }
        } else if (symbol === 'KOOL') {
          if (priceAmount > koolBalance) {
            return `NEED ${Number(priceAmount - koolBalance).toFixed(2)} KOOL`;
          }
        }
        return symbol === 'KOOL' ? 'APPROVE KOOL' : 'GET NFT';
      }
    }
  }
  return 'UNLOCK WALLET';
};
