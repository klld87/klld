// Covers
import chadCardCover from '../../../images/specialCardCovers/chad.png';
import koolManCardCover from '../../../images/specialCardCovers/man.png';
import koolBagCardCover from '../../../images/specialCardCovers/bag.png';
import keychainCardCover from '../../../images/specialCardCovers/keychain.png';
import gemkitCardCover from '../../../images/specialCardCovers/gemkit.png';
import zeroCardCover from '../../../images/specialCardCovers/zero.png';
import sergeyCardCover from '../../../images/specialCardCovers/sergey.gif';

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
    price: '0.2 ETH',
    season: specialSeason,
    mobileStyle: {
      top: -160,
    },
  },
  {
    tokenId: 14,
    tokenOpenSeaLink: 'https://opensea.io/collection/kool-bar',
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
    priceAmount: 0.99,
    price: '0.99 ETH',
    season: specialSeason,
  },
  // {
  //   tokenId: 15,
  //   tokenOpenSeaLink: 'https://opensea.io/collection/kool-bar',
  //   title: 'KOOL BAG',
  //   cover: koolBagCardCover,
  //   titleBlur: bagCradBlur,
  //   background: paperBG3,
  //   bgColor: '#E87D9D',
  //   position: 'right',
  //   coverSizes: {
  //     desktop: {
  //       width: 234,
  //       height: 349,
  //     },
  //     mobile: {
  //       width: 169,
  //       height: 252,
  //     },
  //   },
  //   description:
  //     'Eco-friendly. You can keep your whole Kool-Aid collection there',
  //   contents: 'Empty',
  //   howToUse: 'soon',
  //   parity: 'rare',
  //   symbol: 'KOOL',
  //   priceAmount: 399,
  //   price: '399 KOOL',
  //   season: specialSeason,
  // },
  {
    tokenId: 16,
    tokenOpenSeaLink:
      'https://opensea.io/assets/0x6656b20a5d6ccdc95aea98764285cf9d3e6ff3ce/16',
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
    symbol: 'AID',
    priceAmount: 299,
    price: '299 AID',
    season: specialSeason,
    mobileStyle: {
      top: -20,
    },
  },
  {
    tokenId: 17,
    tokenOpenSeaLink:
      'https://opensea.io/assets/0x6656b20a5d6ccdc95aea98764285cf9d3e6ff3ce/17',
    title: 'Kool Collecting Kit',
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
    symbol: 'AID',
    priceAmount: 499,
    price: '499 AID',
    season: specialSeason,
    mobileStyle: {
      top: 20,
      right: -70,
    },
  },
  {
    tokenId: 1,
    tokenOpenSeaLink:
      'https://opensea.io/assets/0x6656b20a5d6ccdc95aea98764285cf9d3e6ff3ce/1',
    title: 'KOOL ZERO',
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
    tokenOpenSeaLink: 'https://opensea.io/collection/kool-bar',
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
    parity: 'rare',
    price: '0.3 ETH',
    symbol: 'ETH',
    priceAmount: 0.3,
    season: specialSeason,
    mobileStyle: {
      top: -50,
    },
  },
];

export default specialCards;
