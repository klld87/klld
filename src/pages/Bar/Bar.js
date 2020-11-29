import * as React from 'react';

// Components
import BarHeader from '../../components/BarHeader';
import Container from '../../components/Container';
import NFTCocktailsCover from '../../components/NFTCocktailsCover';
import TokenStats from '../../components/TokenStats';
import SeasonCard from '../../components/SeasonCard';
import Footer from '../../components/Footer';

// Modals
import HowItWorksModal from '../../modals/HowItWorks';
import NFTWalletModal from '../../modals/NFTWallet';
import NFTBarModal from '../../modals/NFTBar';

// Card covers
import appleCardCover from '../../images/tokenCards/apple.png';

// Card blurs
import greenBlur from '../../images/cardBlurs/green.png';

// Styles
import { Wrapper } from './styles';

const seasonCards = [
  {
    season: 1,
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
  },
];

const Bar = () => {
  const [isHowItWorksModalOpen, setHowItWorksModalOpen] = React.useState(false);
  const [isNFTWalletModalOpen, setNFTWalletModalOpen] = React.useState(false);
  const [isNFTBarModalOpen, setNFTBarModalOpen] = React.useState(false);

  const toggleHowItWorksModal = () => {
    setHowItWorksModalOpen(!isHowItWorksModalOpen);
  };

  const toggleNFTWalletModal = () => {
    setNFTWalletModalOpen(!isNFTWalletModalOpen);
  };

  const toggleNFTBarModal = () => {
    setNFTBarModalOpen(!isNFTBarModalOpen);
  };

  return (
    <Wrapper>
      <BarHeader onOpenNFTWalletModal={toggleNFTWalletModal} />
      <Container>
        <NFTCocktailsCover onOpenHowItWorksModal={toggleHowItWorksModal} />
        <TokenStats />
        {seasonCards.map((seaconCard) => (
          <SeasonCard key={seaconCard.title} {...seaconCard} />
        ))}
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
      />
      <NFTBarModal open={isNFTBarModalOpen} onCloseModal={toggleNFTBarModal} />
    </Wrapper>
  );
};

export default Bar;
