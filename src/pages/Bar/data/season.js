// Covers
import appleCardCover from '../../../images/tokenCards/apple.png';
import cheeryCardCover from '../../../images/tokenCards/cheery.png';
import orangeCardCover from '../../../images/tokenCards/orange.png';
import grapesCardCover from '../../../images/tokenCards/grapes.png';
import bananaCardCover from '../../../images/tokenCards/banana.png';

// Blurs
import greenBlur from '../../../images/cardBlurs/green.png';
import redBlur from '../../../images/cardBlurs/red.png';
import orangeBlur from '../../../images/cardBlurs/orange.png';
import grapesBlur from '../../../images/cardBlurs/grapes.png';
import bananaBlur from '../../../images/cardBlurs/banana.png';

// Backgrounds
import paperBG1 from '../../../images/bgPaper/1.png';
import paperBG2 from '../../../images/bgPaper/2.png';
import paperBG3 from '../../../images/bgPaper/3.png';

// Seasons
import season1 from '../../../images/seasons/1.png';

const seasonCards = [
  {
    tokenId: 3,
    tokenOpenSeaLink:
      'https://opensea.io/assets/0x6656b20a5d6ccdc95aea98764285cf9d3e6ff3ce/3',
    title: 'Green Apple Pump',
    cover: appleCardCover,
    titleBlur: greenBlur,
    background: paperBG1,
    bgColor: '#F6EA50',
    position: 'left',
    coverSizes: {
      desktop: {
        width: 374,
        height: 389,
      },
      mobile: {
        width: 271,
        height: 282,
      },
    },
    description: "You'll get some gains, if you drink plenty of it",
    contents:
      'Sugar, Fructose, Lysergic acid,Synthetic Apple  Flavor, Pump Powder, Yellow 5, Blue 1',
    howToUse: 'Mix into Uncommon, Rare and Super Rare cocktails',
    parity: 'common flavor',
    priceAmount: 80,
    price: '80 AID',
    season: season1,
    limit: 15,
  },
  {
    tokenId: 4,
    tokenOpenSeaLink:
      'https://opensea.io/assets/0x6656b20a5d6ccdc95aea98764285cf9d3e6ff3ce/4',
    title: 'Red Cherry Dump',
    cover: cheeryCardCover,
    titleBlur: redBlur,
    background: paperBG2,
    bgColor: '#E87D9D',
    position: 'right',
    coverSizes: {
      desktop: {
        width: 422,
        height: 487,
      },
      mobile: {
        width: 306,
        height: 353,
      },
    },
    description: 'The cherry on the cake with red candles',
    contents:
      'Sugar, Fructose, Lysergic acid, Synthetic Cherry Flavor, Dump Powder, Red 40',
    howToUse: 'Mix into Uncommon, Rare and Super Rare cocktails',
    parity: 'common flavor',
    priceAmount: 80,
    price: '80 AID',
    season: season1,
    limit: 15,
  },
  {
    tokenId: 5,
    tokenOpenSeaLink: 'https://opensea.io/collection/kool-bar',
    title: 'Bitcoin Orange',
    cover: orangeCardCover,
    titleBlur: orangeBlur,
    background: paperBG3,
    bgColor: '#FFD63B',
    position: 'left',
    coverSizes: {
      desktop: {
        width: 401,
        height: 438,
      },
      mobile: {
        width: 290,
        height: 317,
      },
    },
    description: 'Now you can taste the orange coin!',
    contents:
      'Sugar, Fructose, Lysergic acid, Synthetic Orange Flavor, Satoshi DNA Powder, Yellow 6, Yellow 6 Lake, Red 40 Lake',
    howToUse: 'Mix into Uncommon, Rare and Super Rare cocktails',
    parity: 'common flavor',
    priceAmount: 50,
    price: '50 AID',
    season: season1,
    limit: 15,
  },
  {
    tokenId: 6,
    tokenOpenSeaLink:
      'https://opensea.io/assets/0x6656b20a5d6ccdc95aea98764285cf9d3e6ff3ce/6',
    title: 'Grapes of ETH',
    cover: grapesCardCover,
    titleBlur: grapesBlur,
    background: paperBG1,
    bgColor: '#E87D9D',
    position: 'right',
    coverSizes: {
      desktop: {
        width: 358,
        height: 358,
      },
      mobile: {
        width: 280,
        height: 280,
      },
    },
    description: "Please, don't rip the ‘G’ letter off",
    contents:
      'Sugar, Fructose, Lysergic acid, Synthetic Grape Flavor, Crystal ETH, Red 40, Blue 1',
    howToUse: 'Mix into Uncommon, Rare and Super Rare cocktails',
    parity: 'common flavor',
    priceAmount: 80,
    price: '80 AID',
    season: season1,
    limit: 15,
  },
  {
    tokenId: 7,
    tokenOpenSeaLink:
      'https://opensea.io/assets/0x6656b20a5d6ccdc95aea98764285cf9d3e6ff3ce/7',
    title: 'Banana Fomo',
    cover: bananaCardCover,
    titleBlur: bananaBlur,
    background: paperBG2,
    bgColor: '#FFD63B',
    position: 'left',
    coverSizes: {
      desktop: {
        width: 378,
        height: 378,
      },
      mobile: {
        width: 303,
        height: 303,
      },
    },
    description: 'Drives you bananas and makes you panic buy',
    contents:
      'Sugar, Fructose, Lysergic acid, Synthetic Banana Flavor, Epinephrine Powder, Cortisol Powder, Yellow 5',
    howToUse: 'Mix into Uncommon, Rare and Super Rare cocktails',
    parity: 'common flavor',
    priceAmount: 200,
    price: '200 AID',
    season: season1,
  },
];

export default seasonCards;
