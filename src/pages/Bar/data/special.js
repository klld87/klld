// Covers
import chadCardCover from '../../../images/specialCardCovers/chad.png';
import koolManCardCover from '../../../images/specialCardCovers/man.png';
import koolBagCardCover from '../../../images/specialCardCovers/bag.png';
import keychainCardCover from '../../../images/specialCardCovers/keychain.png';
import gemkitCardCover from '../../../images/specialCardCovers/gemkit.png';
import zeroCardCover from '../../../images/specialCardCovers/zero.png';
import sergeyCardCover from '../../../images/specialCardCovers/sergey.png';

// Blurs
import chadCradBlur from '../../../images/cardBlurs/chad.png';
import manCradBlur from '../../../images/cardBlurs/man.png';
import bagCradBlur from '../../../images/cardBlurs/bag.png';
import keychainCradBlur from '../../../images/cardBlurs/keychain.png';
import gemkitCradBlur from '../../../images/cardBlurs/gemkit.png';
import zeroCradBlur from '../../../images/cardBlurs/zero.png';

// Backgrounds
import paperBG1 from '../../../images/bgPaper/1.png';
import paperBG2 from '../../../images/bgPaper/2.png';
import paperBG3 from '../../../images/bgPaper/3.png';

// Seasons
import specialSeason from '../../../images/seasons/special.png';

const specialCards = [
  {
    openSeaLink:
      'https://opensea.io/assets/0xd07dc4262bcdbf85190c01c996b4c06a461d2430/22280',
    title: 'KOOL CHAD',
    cover: chadCardCover,
    titleBlur: chadCradBlur,
    background: paperBG1,
    bgColor: '#FFD639',
    position: 'right',
    coverSizes: {
      desktop: {
        width: 376,
        height: 483,
      },
      mobile: {
        width: 265,
        height: 354,
      },
    },
    description: "Be a chad. Stay $KOOL, but don't drink it",
    contents:
      'Sugar, Fructose, Lysergic acid, Synthetic Banana Flavor, Epinephrine Powder, Cortisol Powder, Yellow 5',
    howToUse: 'soon',
    parity: 'super rare',
    initialPrice: '0.2 ETH',
    season: specialSeason,
  },
  {
    tokenId: 14,
    title: 'KOOL MAN',
    cover: koolManCardCover,
    titleBlur: manCradBlur,
    background: paperBG2,
    bgColor: '#3BDCFF',
    position: 'left',
    coverSizes: {
      desktop: {
        width: 235,
        height: 380,
      },
      mobile: {
        width: 177,
        height: 286,
      },
    },
    description: 'For the most passionate Kool-Aid fans',
    contents: 'Empty',
    howToUse: 'soon',
    parity: 'super rare',
    symbol: 'ETH',
    price: '0.99 ETH',
    season: specialSeason,
  },
  {
    tokenId: 15,
    title: 'KOOL BAG',
    cover: koolBagCardCover,
    titleBlur: bagCradBlur,
    background: paperBG3,
    bgColor: '#E87D9D',
    position: 'right',
    coverSizes: {
      desktop: {
        width: 234,
        height: 349,
      },
      mobile: {
        width: 169,
        height: 252,
      },
    },
    description:
      'Eco-friendly. You can keep your whole Kool-Aid collection there',
    contents: 'Empty',
    howToUse: 'soon',
    parity: 'rare',
    symbol: 'KOOL',
    price: '399 KOOL',
    season: specialSeason,
  },
  {
    tokenId: 16,
    title: 'KOOL KEY CHAIN',
    cover: keychainCardCover,
    titleBlur: keychainCradBlur,
    background: paperBG2,
    bgColor: '#3BDCFF',
    position: 'left',
    coverSizes: {
      desktop: {
        width: 309,
        height: 224,
      },
      mobile: {
        width: 191,
        height: 138,
      },
    },
    description: 'Perfectly matches your private key',
    contents: 'Empty',
    howToUse: 'soon',
    parity: 'rare',
    price: '299 AID',
    season: specialSeason,
  },
  {
    tokenId: 17,
    title: 'KOOL GEM kit',
    cover: gemkitCardCover,
    titleBlur: gemkitCradBlur,
    background: paperBG1,
    bgColor: '#DC894E',
    position: 'right',
    coverSizes: {
      desktop: {
        width: 373,
        height: 135,
      },
      mobile: {
        width: 275,
        height: 100,
      },
    },
    description: 'Kool-Aid-soaked stamps might become pretty expensive',
    contents: 'Empty',
    howToUse: 'soon',
    parity: 'common',
    price: '499 AID',
    season: specialSeason,
  },
  {
    tokenId: 1,
    title: 'KOOL ZERO ',
    cover: zeroCardCover,
    titleBlur: zeroCradBlur,
    background: paperBG3,
    bgColor: '#3BDCFF',
    position: 'left',
    coverSizes: {
      desktop: {
        width: 312,
        height: 416,
      },
      mobile: {
        width: 188,
        height: 250,
      },
    },
    description: 'Tasteless but extremely addictive',
    contents: 'Sugar, Fructose, Lysergic acid, Zero Matter',
    howToUse: 'soon',
    parity: 'common flavor',
    price: 'free',
    season: specialSeason,
  },
  {
    tokenId: 2,
    title: 'Non-drinker Sergey',
    cover: sergeyCardCover,
    titleBlur: gemkitCradBlur,
    background: paperBG2,
    bgColor: '#DC894E',
    position: 'right',
    coverSizes: {
      desktop: {
        width: 392,
        height: 395,
      },
      mobile: {
        width: 190,
        height: 190,
      },
    },
    description: 'Empty',
    contents: 'Empty',
    howToUse: 'soon',
    parity: 'super rare',
    price: '0.3 ETH',
    season: specialSeason,
  },
];

export default specialCards;
