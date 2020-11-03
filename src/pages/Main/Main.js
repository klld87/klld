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

  const getWalletBalance = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        setUserAddress(window.ethereum.selectedAddress);

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const address = await signer.getAddress();

        setEthEnabled(true);
        setWeb3Provider(provider);
        setUserAddress(address);
      } catch {
        setEthEnabled(false);
      }
    }
  };

  useEffect(() => {
    getWalletBalance();
    handleGetKoolPrice();
  }, []);

  // useEffect(() => {
  //   if (typeof window.ethereum !== 'undefined') {
  //     window.ethereum.on('accountsChanged', (accounts) => {
  //       if (accounts.length && !userAddress) {
  //         setUserAddress(accounts[1]);
  //       }
  //     });
  //   }
  // }, []);

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
      <WalletPanel
        isWalletUnlocked={userAddress !== null}
        koolBalance={koolBalance}
        aidBalance={aidBalance}
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

/*



// ethereum.selectedAddress - чек что юзер залогинен


ethereum.on('accountsChanged', function (accounts) {
  // Time to reload your interface with accounts[0]!
});
*/
