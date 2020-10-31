import React, { useEffect, useState } from 'react';
import Web3 from 'web3';

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

  useEffect(() => {
    const enableEth = async () => {
      if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider);
        await window.ethereum.enable();
        setEthEnabled(true);
      }
    };

    enableEth();
  }, []);

  return (
    <Wrapper>
      <Header />
      <KoolMainSection />
      <TokenStats />
      <HowItWorks />
      <Trade />
      <News />
      <Footer />
    </Wrapper>
  );
};

export default MainPage;
