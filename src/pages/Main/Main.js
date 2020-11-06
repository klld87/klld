import React, { useEffect, useState, useRef } from 'react';
import ethers from 'ethers';
import { getKoolPrice, getKoolBalance, getAidBalance } from '../../api';

// styles
import { Wrapper } from './styles';

// components
import WalletPanel from '../../components/WalletPanel';
import Header from '../../components/Header';
import KoolMainSection from '../../components/KoolMainSection';
import TokenStats from '../../components/TokenStats';
import HowItWorks from '../../components/HowItWorks';
import Trade from '../../components/Trade';
import News from '../../components/News';
import Footer from '../../components/Footer';

const MainPage = () => {
  const isFirstRender = useRef(true);
  const [isEthEnabled, setEthEnabled] = useState(false);
  const [web3Provider, setWeb3Provider] = useState(null);
  const [userAddress, setUserAddress] = useState(null);

  const [koolBalance, setKoolBalance] = useState(null);
  const [aidBalance, setAidBalance] = useState(null);
  const [koolPrice, setKoolPrice] = useState(null);

  const handleGetKoolPrice = async () => {
    const price = await getKoolPrice();
    const formattedPrice = (Math.round(price * 100) / 100).toString();
    setKoolPrice(formattedPrice);
  };

  const connect = async () => {
    try {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });
      const address = accounts[0];
      setUserAddress(address);
      setEthEnabled(true);
      localStorage.setItem('IS_KOOL_METAMASK_CONNECTED', true);
    } catch {}
  };

  const setProvider = () => {
    if (typeof window.ethereum !== 'undefined') {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      setWeb3Provider(provider);
    }
  };

  const signOut = () => {
    localStorage.removeItem('IS_KOOL_METAMASK_CONNECTED');
    setUserAddress(null);
  };

  const handleAccountChange = (accounts) => {
    // first render check to load/not load account info that depends on singed out or not
    const isInitialAccountRender = isFirstRender.current;
    if (isFirstRender.current) {
      isFirstRender.current = false;
    }

    if (
      isInitialAccountRender &&
      !Boolean(localStorage.getItem('IS_KOOL_METAMASK_CONNECTED'))
    ) {
      return;
    }

    if (accounts.length === 0) {
      setUserAddress(null);
      localStorage.removeItem('IS_KOOL_METAMASK_CONNECTED');
    } else {
      localStorage.setItem('IS_KOOL_METAMASK_CONNECTED', true);
      setUserAddress(accounts[0]);
    }
  };

  useEffect(() => {
    setProvider();
    handleGetKoolPrice();

    if (typeof window.ethereum !== 'undefined') {
      window.ethereum.on('accountsChanged', handleAccountChange);
    }
  }, []);

  useEffect(() => {
    const getBalances = async () => {
      const kool = await getKoolBalance(web3Provider, userAddress);
      const aid = await getAidBalance(web3Provider, userAddress);

      setKoolBalance(kool);
      setAidBalance(aid);
    };

    if (userAddress && web3Provider) {
      if (!isEthEnabled) setEthEnabled(true);
      getBalances();
    } else {
      setEthEnabled(false);
    }
  }, [userAddress, isEthEnabled, web3Provider]);

  return (
    <Wrapper id="main">
      <WalletPanel
        isWalletUnlocked={userAddress !== null}
        koolBalance={koolBalance}
        aidBalance={aidBalance}
        onUnlock={connect}
        onSignOut={signOut}
        userAddress={userAddress}
      />
      <Header />
      <KoolMainSection isUnlocked={isEthEnabled} onUnlock={connect} />
      <TokenStats koolPrice={koolPrice} />
      <HowItWorks />
      <Trade />
      <News />
      <Footer />
    </Wrapper>
  );
};

export default MainPage;
