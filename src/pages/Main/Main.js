import React, { useEffect, useState } from 'react';
import ethers from 'ethers';
import { getKoolPrice, getKoolBalance, getAidBalance } from '../../api';

// styles
import { Wrapper } from './styles';

// components
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

  const [koolBalance, setKoolBalance] = useState('0');
  const [aidBalance, setAidBalance] = useState('0');
  const [koolPrice, setKoolPrice] = useState(null);

  const enableEth = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.enable();
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const address = await signer.getAddress();

        setEthEnabled(true);
        setWeb3Provider(provider);
        setUserAddress(address);
      } catch (err) {
        console.log(err);
        setEthEnabled(false);
      }
    }
  };

  const handleGetKoolPrice = async () => {
    const price = await getKoolPrice();
    const formattedPrice = (Math.round(price * 100) / 100).toString();
    setKoolPrice(formattedPrice);
  };

  useEffect(() => {
    enableEth();
    handleGetKoolPrice();
  }, []);

  useEffect(() => {
    const getBalances = async () => {
      const kool = await getKoolBalance(web3Provider, userAddress);
      const aid = await getAidBalance(web3Provider, userAddress);

      setKoolBalance(kool);
      setAidBalance(aid);
    };

    if (userAddress && web3Provider) {
      getBalances();
    }
  }, [userAddress, web3Provider]);

  return (
    <Wrapper>
      <Header
        isUnlocked={isEthEnabled}
        koolBalance={koolBalance}
        aidBalance={aidBalance}
      />
      <KoolMainSection />
      <TokenStats koolPrice={koolPrice} />
      <HowItWorks />
      <Trade />
      <News />
      <Footer />
    </Wrapper>
  );
};

export default MainPage;
