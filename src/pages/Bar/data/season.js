// Covers
import appleCardCover from '../../../images/tokenCards/apple.png';
import cheeryCardCover from '../../../images/tokenCards/cheery.png';
import orangeCardCover from '../../../images/tokenCards/orange.png';
import grapesCardCover from '../../../images/tokenCards/grapes.png';
import bananaCardCover from '../../../images/tokenCards/banana.png';

// Blurs
import greenBlur from '../../../images/cardBlurs/green.png';
import greenBlurMobile from '../../../images/cardBlurs/greenMobile.png';

// Seasons
import season1 from '../../../images/seasons/1.png';

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

export default seasonCards;
