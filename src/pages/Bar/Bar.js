import * as React from 'react';

// Components
import Header from '../../components/Header';
import Container from '../../components/Container';
import NFTCocktailsCover from '../../components/NFTCocktailsCover';
import TokenStats from '../../components/TokenStats';
import SeasonCard from '../../components/SeasonCard';
import Footer from '../../components/Footer';

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
    cover: null,
    titleBlurImage: null,
  },
];

const Bar = (props) => {
  const {} = props;

  return (
    <Wrapper>
      <Header />
      <Container>
        <NFTCocktailsCover />
        <TokenStats />
        {seasonCards.map((seaconCard) => (
          <SeasonCard key={seaconCard.title} {...seaconCard} />
        ))}
        <Footer />
      </Container>
    </Wrapper>
  );
};

export default Bar;
