import React, { useEffect, useState } from 'react';
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
    } catch {}
  };

  const setProvider = () => {
    if (typeof window.ethereum !== 'undefined') {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      setWeb3Provider(provider);
    }
  };

  useEffect(() => {
    // if (typeof window.ethereum !== 'undefined') {
    // if (Boolean(localStorage.getItem('isConnected'))) {
    // }
    // connect();
    setProvider();
    handleGetKoolPrice();
  }, []);

  useEffect(() => {
    const listenAccountsChanged = async () => {
      window.ethereum.on('accountsChanged', (data) => {
        if (!data.length && userAddress) {
          setUserAddress(null);
          localStorage.removeItem('isConnected');
        } else if (data.length && !userAddress) {
          localStorage.setItem('isConnected', true);
          setUserAddress(data[1]);
        } else if (data[1] !== userAddress) {
          setUserAddress(data[1]);
        }
      });
    };

    listenAccountsChanged();
  }, [userAddress]);

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
    }
  }, [userAddress, isEthEnabled, web3Provider]);

  return (
    <Wrapper>
      <WalletPanel
        isWalletUnlocked={userAddress !== null}
        koolBalance={koolBalance}
        aidBalance={aidBalance}
        onUnlock={connect}
      />
      <Header />
      <KoolMainSection isUnlocked={isEthEnabled} />
      <TokenStats koolPrice={koolPrice} />
      <HowItWorks />
      <Trade />
      <News />
      <Footer />
    </Wrapper>
  );
};

export default MainPage;
