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
import EnterAmountModal from '../../modals/EnterAmount';

// Styles
import { Wrapper, WatermelonFruit, PearFruit, GrapesFruit } from './styles';

// Data
import specialCards from './data/special.js';
import seasonCards from './data/season.js';
import mixingCards from './data/mixing';

const Bar = () => {
  const [isHowItWorksModalOpen, setHowItWorksModalOpen] = React.useState(false);
  const [isNFTWalletModalOpen, setNFTWalletModalOpen] = React.useState(false);
  const [isNFTBarModalOpen, setNFTBarModalOpen] = React.useState(false);
  const [isWalletModalOpen, setWalletModalOpen] = React.useState(false);
  const [isWalletConnectModalOpen, setWalletConnectModalOpen] = React.useState(
    false
  );
  const [isParityModalOpen, setParityModalOpen] = React.useState(false);
  const [isEnterAmountModalOpen, setEnterAmountModalOpen] = React.useState(
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

  const toggleParityModal = () => {
    setParityModalOpen(!isParityModalOpen);
  };

  const toggleEnterAmountModal = () => {
    setEnterAmountModalOpen(!isEnterAmountModalOpen);
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
        <WatermelonFruit />
        <PearFruit />
        <GrapesFruit />
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
          {seasonCards.map((seaconCard, seaconCardIndex) => {
            const isLast = seaconCardIndex === seasonCards.length - 1;

            return (
              <SeasonCard
                key={seaconCard.title}
                openParityModal={toggleParityModal}
                onClickButton={toggleEnterAmountModal}
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
                onClickButton={toggleEnterAmountModal}
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
                onClickButton={toggleEnterAmountModal}
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
        <ParityModal
          open={isParityModalOpen}
          onCloseModal={toggleParityModal}
        />
        <EnterAmountModal
          open={isEnterAmountModalOpen}
          onCloseModal={toggleEnterAmountModal}
        />
        <ScrollToTopButton />
      </Wrapper>
    </Preload>
  );
};

export default Bar;
