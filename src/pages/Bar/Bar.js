import * as React from 'react';

// Components
import BarHeader from '../../components/BarHeader';
import Container from '../../components/Container';
import NFTCocktailsCover from '../../components/NFTCocktailsCover';
import TokenStats from '../../components/TokenStats';
import SeasonCard from '../../components/SeasonCard';
import SpecialEditionBanner from '../../components/SpecialEditionBanner';
import SpecialCard from '../../components/SpecialCard';
import Footer from '../../components/Footer';

// Modals
import HowItWorksModal from '../../modals/HowItWorks';
import NFTWalletModal from '../../modals/NFTWallet';
import NFTBarModal from '../../modals/NFTBar';

// Card covers
import appleCardCover from '../../images/tokenCards/apple.png';
import cheeryCardCover from '../../images/tokenCards/cheery.png';
import orangeCardCover from '../../images/tokenCards/orange.png';
import grapesCardCover from '../../images/tokenCards/grapes.png';
import bananaCardCover from '../../images/tokenCards/banana.png';

// Card blurs
import greenBlur from '../../images/cardBlurs/green.png';
import redBlur from '../../images/cardBlurs/red.png';
import orangeBlur from '../../images/cardBlurs/orange.png';
import violetBlur from '../../images/cardBlurs/violet.png';

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
    titleBlurImage: redBlur,
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
    titleBlurImage: orangeBlur,
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
    titleBlurImage: violetBlur,
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
    titleBlurImage: redBlur,
    seasonImage: season1,
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
        <TokenStats pageFrom="bar" />
        {seasonCards.map((seaconCard) => (
          <SeasonCard key={seaconCard.title} {...seaconCard} />
        ))}
        <SpecialEditionBanner />
        <SpecialCard />
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
