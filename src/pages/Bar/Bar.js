import * as React from 'react';
import ethers from 'ethers';

// Components
import BarHeader from '../../components/BarHeader';
import Container from '../../components/Container';
import NFTCocktailsCover from '../../components/NFTCocktailsCover';
import TokenStats from '../../components/TokenStats';
import SeasonCard from '../../components/SeasonCard';
import SpecialEditionBanner from '../../components/SpecialEditionBanner';
import SpecialCard from '../../components/SpecialCard';
import KoolMixingBanner from '../../components/KoolMixingBanner';
import MixingCard from '../../components/MixingCard';
import Footer from '../../components/Footer';
import ScrollToTopButton from '../../components/ScrollToTopButton';

// Modals
import HowItWorksModal from '../../modals/HowItWorks';
import NFTWalletModal from '../../modals/NFTWallet';
import NFTBarModal from '../../modals/NFTBar';
import WalletModal from '../../modals/Wallet';
import WalletConnectModal from '../../modals/WalletConnect';
import ParityModal from '../../modals/Parity';

// Styles
import { Wrapper, WatermelonFruit, PearFruit, GrapesFruit } from './styles';

// Data
import specialCards from './data/special.js';
import seasonCards from './data/season.js';
import mixingCards from './data/mixing';

// Api
import { getKoolPrice, getKoolBalance, getAidBalance } from '../../api';

const Bar = () => {
  const [isHowItWorksModalOpen, setHowItWorksModalOpen] = React.useState(false);
  const [isNFTWalletModalOpen, setNFTWalletModalOpen] = React.useState(false);
  const [isNFTBarModalOpen, setNFTBarModalOpen] = React.useState(false);
  const [isWalletModalOpen, setWalletModalOpen] = React.useState(false);
  const [isWalletConnectModalOpen, setWalletConnectModalOpen] = React.useState(
    false
  );
  const [isParityModalOpen, setParityModalOpen] = React.useState(false);
  const [koolPrice, setKoolPrice] = React.useState(null);
  const [web3Provider, setWeb3Provider] = React.useState(null);
  const isFirstRender = React.useRef(true);
  const [userAddress, setUserAddress] = React.useState(null);
  const [isEthEnabled, setEthEnabled] = React.useState(false);
  const [koolBalance, setKoolBalance] = React.useState(null);
  const [aidBalance, setAidBalance] = React.useState(null);

  const handleGetKoolPrice = async () => {
    const price = await getKoolPrice();
    const formattedPrice = (Math.round(price * 100) / 100).toString();
    setKoolPrice(formattedPrice);
  };

  const setProvider = () => {
    if (typeof window.ethereum !== 'undefined') {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      setWeb3Provider(provider);
    }
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

  React.useEffect(() => {
    setProvider();
    handleGetKoolPrice();

    if (typeof window.ethereum !== 'undefined') {
      window.ethereum.on('accountsChanged', handleAccountChange);

      if (Boolean(localStorage.getItem('IS_KOOL_METAMASK_CONNECTED'))) {
        onUnlockWallet('metaMask');
      }
    }
  }, []);

  const getBalances = async () => {
    const kool = await getKoolBalance(web3Provider, userAddress);
    const aid = await getAidBalance(web3Provider, userAddress);

    setKoolBalance(kool);
    setAidBalance(aid);
  };

  React.useEffect(() => {
    if (userAddress && web3Provider) {
      if (!isEthEnabled) setEthEnabled(true);
      getBalances();
    } else {
      setEthEnabled(false);
    }
  }, [userAddress, isEthEnabled, web3Provider]);

  const toggleHowItWorksModal = () => {
    setHowItWorksModalOpen(!isHowItWorksModalOpen);
  };

  const toggleNFTWalletModal = () => {
    setNFTWalletModalOpen(!isNFTWalletModalOpen);
  };

  const toggleNFTBarModal = () => {
    setNFTBarModalOpen(!isNFTBarModalOpen);
  };

  const toggleWalletModal = () => {
    setWalletModalOpen(!isWalletModalOpen);
  };

  const toggleWalletConnectModal = () => {
    setWalletConnectModalOpen(!isWalletConnectModalOpen);
  };

  const toggleParityModal = () => {
    setParityModalOpen(!isParityModalOpen);
  };

  const onUnlockWallet = async (walletType) => {
    if (walletType === 'metaMask') {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });
      const address = accounts[0];
      setUserAddress(address);
      setEthEnabled(true);
      localStorage.setItem('IS_KOOL_METAMASK_CONNECTED', true);
    } else {
      setWalletModalOpen(false);
      setWalletConnectModalOpen(true);
    }
  };

  return (
    <Wrapper>
      <WatermelonFruit />
      <PearFruit />
      <GrapesFruit />
      <BarHeader
        onOpenNFTWalletModal={toggleNFTWalletModal}
        unlockWallet={toggleWalletModal}
        isWalletUnlocked={userAddress !== null}
        koolBalance={koolBalance}
        aidBalance={aidBalance}
      />
      <Container>
        <NFTCocktailsCover onOpenHowItWorksModal={toggleHowItWorksModal} />
        <TokenStats koolPrice={koolPrice} pageFrom="bar" />
        {seasonCards.map((seaconCard, seaconCardIndex) => {
          const isLast = seaconCardIndex === seasonCards.length - 1;

          return (
            <SeasonCard
              key={seaconCard.title}
              openParityModal={toggleParityModal}
              refetchUserBalance={getBalances}
              isLast={isLast}
              {...seaconCard}
            />
          );
        })}
        <SpecialEditionBanner />
        {specialCards.map((specialCard, specialCardIndex) => {
          const isLast = specialCardIndex === specialCards.length - 1;

          return (
            <SpecialCard
              key={specialCard.title}
              openParityModal={toggleParityModal}
              refetchUserBalance={getBalances}
              isLast={isLast}
              {...specialCard}
            />
          );
        })}
        <KoolMixingBanner />
        {mixingCards.map((mixingCard, mixingCardIndex) => {
          const isLast = mixingCardIndex === mixingCards.length - 1;

          return (
            <MixingCard
              key={mixingCard.title}
              openParityModal={toggleParityModal}
              isLast={isLast}
              {...mixingCard}
            />
          );
        })}
        <Footer />
      </Container>
      <HowItWorksModal
        open={isHowItWorksModalOpen}
        onCloseModal={toggleHowItWorksModal}
      />
      <NFTWalletModal
        open={isNFTWalletModalOpen}
        onCloseModal={toggleNFTWalletModal}
        openNFTBar={() => {
          toggleNFTWalletModal();
          toggleNFTBarModal();
        }}
        koolBalance={koolBalance}
        aidBalance={aidBalance}
        aidHarvest={0}
      />
      <NFTBarModal open={isNFTBarModalOpen} onCloseModal={toggleNFTBarModal} />
      <WalletModal
        open={isWalletModalOpen}
        onCloseModal={toggleWalletModal}
        isWalletUnlocked={userAddress !== null}
        onUnlock={onUnlockWallet}
      />
      <WalletConnectModal
        open={isWalletConnectModalOpen}
        onCloseModal={toggleWalletConnectModal}
      />
      <ParityModal open={isParityModalOpen} onCloseModal={toggleParityModal} />
      <ScrollToTopButton />
    </Wrapper>
  );
};

export default Bar;
