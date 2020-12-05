import * as React from 'react';
import { Preload } from 'react-preload';

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

// Card covers
import appleCardCover from '../../images/tokenCards/apple.png';
import cheeryCardCover from '../../images/tokenCards/cheery.png';
import orangeCardCover from '../../images/tokenCards/orange.png';
import grapesCardCover from '../../images/tokenCards/grapes.png';
import bananaCardCover from '../../images/tokenCards/banana.png';

// Card blurs
import greenBlur from '../../images/cardBlurs/green.png';
import greenBlurMobile from '../../images/cardBlurs/greenMobile.png';

// Season cards
import season1 from '../../images/seasons/1.png';

// Styles
import { Wrapper } from './styles';

const seasonCards = [
  {
    position: 'left',
    title: 'Green Apple Pump',
    description: "You'll get some gains, if you drink plenty of it",
    contents:
      'Sugar, Fructose, Lysergic acid,Synthetic Apple  Flavor, Pump Powder, Yellow 5, Blue 1',
    parity: 'COMMON FLAVOR',
    price: 200,
    totalClaimed: 45,
    limitClaimed: 250,
    cover: appleCardCover,
    titleBlurImage: greenBlur,
    titleBlurMobileImage: greenBlurMobile,
    seasonImage: season1,
  },
  {
    position: 'right',
    title: 'Red Cherry Dump',
    description: 'The cherry on the cake with red candles',
    contents:
      'Sugar, Fructose, Lysergic acid, Synthetic Cherry Flavor, Dump Powder, Red 40',
    parity: 'COMMON FLAVOR',
    price: 200,
    totalClaimed: 45,
    limitClaimed: 250,
    cover: cheeryCardCover,
    titleBlurImage: greenBlur,
    titleBlurMobileImage: greenBlurMobile,
    seasonImage: season1,
  },
  {
    position: 'left',
    title: 'Bitcoin Orange',
    description: 'The cherry on the cake with red candles',
    contents:
      'Sugar, Fructose, Lysergic acid, Synthetic Cherry Flavor, Dump Powder, Red 40',
    parity: 'COMMON FLAVOR',
    price: 150,
    totalClaimed: 45,
    limitClaimed: 250,
    cover: orangeCardCover,
    titleBlurImage: greenBlur,
    titleBlurMobileImage: greenBlurMobile,
    seasonImage: season1,
  },
  {
    position: 'right',
    title: 'Grapes of ETH',
    description: "Please, don't rip the G letter off",
    contents:
      'Sugar, Fructose, Lysergic acid, Synthetic Grape Flavor, Crystal ETH, Red 40, Blue 1',
    parity: 'COMMON FLAVOR',
    price: 150,
    totalClaimed: 123,
    limitClaimed: 300,
    cover: grapesCardCover,
    titleBlurImage: greenBlur,
    titleBlurMobileImage: greenBlurMobile,
    seasonImage: season1,
  },
  {
    position: 'left',
    title: 'Banana Fomo',
    description: 'Drives you bananas and makes you panic buy',
    contents:
      'Sugar, Fructose, Lysergic acid, Synthetic Banana Flavor, Epinephrine Powder, Cortisol Powder, Yellow 5',
    parity: 'COMMON FLAVOR',
    price: 150,
    totalClaimed: 250,
    limitClaimed: 250,
    cover: bananaCardCover,
    titleBlurImage: greenBlur,
    titleBlurMobileImage: greenBlurMobile,
    seasonImage: season1,
  },
];

const Bar = () => {
  const [isHowItWorksModalOpen, setHowItWorksModalOpen] = React.useState(false);
  const [isNFTWalletModalOpen, setNFTWalletModalOpen] = React.useState(false);
  const [isNFTBarModalOpen, setNFTBarModalOpen] = React.useState(false);
  const [isWalletModalOpen, setWalletModalOpen] = React.useState(false);
  const [isWalletConnectModalOpen, setWalletConnectModalOpen] = React.useState(
    false
  );

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

  const onUnlockWallet = (walletType) => {
    if (walletType === 'metaMask') {
      // Do somethind fix me
    } else {
      setWalletModalOpen(false);
      setWalletConnectModalOpen(true);
    }
  };

  const loadingIndicator = (
    <div style={{ flex: 1, backgroundColor: 'red' }}>
      <p>loadingIndicator</p>
    </div>
  );

  return (
    <Preload
      loadingIndicator={loadingIndicator}
      autoResolveDelay={2000}
      resolveOnError={true}
      mountChildren={true}
    >
      <Wrapper>
        <BarHeader
          onOpenNFTWalletModal={toggleNFTWalletModal}
          unlockWallet={toggleWalletModal}
          isWalletUnlocked={true} // Fix me
          koolBalance={560} // Fix me
          aidBalance={0} // Fix me
        />
        <Container>
          <NFTCocktailsCover onOpenHowItWorksModal={toggleHowItWorksModal} />
          <TokenStats pageFrom="bar" />
          {seasonCards.map((seaconCard) => (
            <SeasonCard key={seaconCard.title} {...seaconCard} />
          ))}
          <SpecialEditionBanner />
          <SpecialCard />
          <KoolMixingBanner />
          <MixingCard />
          <MixingCard />
          <MixingCard />
          <MixingCard />
          <MixingCard />
          <MixingCard />
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
          koolBalance={560} // Fix me
          aidBalance={0} // Fix me
          aidHarvest={0} // Fix me
        />
        <NFTBarModal
          open={isNFTBarModalOpen}
          onCloseModal={toggleNFTBarModal}
        />
        <WalletModal
          open={isWalletModalOpen}
          onCloseModal={toggleWalletModal}
          isWalletUnlocked={false} // Fix me
          onUnlock={onUnlockWallet}
        />
        <WalletConnectModal
          open={isWalletConnectModalOpen}
          onCloseModal={toggleWalletConnectModal}
        />
        {/* <ParityModal open onCloseModal={() => null} /> */}
        <ScrollToTopButton />
      </Wrapper>
    </Preload>
  );
};

export default Bar;
