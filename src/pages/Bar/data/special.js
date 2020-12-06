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

// Backgrounds
import paperBG1 from '../../../images/bgPaper/1.png';

// Seasons
import specialSeason from '../../../images/seasons/special.png';

const specialCards = [
  {
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
    claimed: 5,
    totalClaimed: 5,
    season: specialSeason,
  },
  {
    title: 'KOOL MAN',
    cover: koolManCardCover,
    titleBlur: chadCradBlur,
    background: paperBG1,
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
    initialPrice: '0.99 ETH',
    claimed: 15,
    totalClaimed: 0,
    season: specialSeason,
  },
  {
    title: 'KOOL BAG',
    cover: koolBagCardCover,
    titleBlur: chadCradBlur,
    background: paperBG1,
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
    initialPrice: '399 KOOL',
    claimed: 20,
    totalClaimed: 0,
    season: specialSeason,
  },
  {
    title: 'KOOL KEY CHAIN',
    cover: keychainCardCover,
    titleBlur: chadCradBlur,
    background: paperBG1,
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
    initialPrice: '0.5 ETH',
    claimed: 250,
    totalClaimed: 250,
    season: specialSeason,
  },
  {
    title: 'KOOL GEM kit',
    cover: gemkitCardCover,
    titleBlur: chadCradBlur,
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
    initialPrice: '399 KOOL',
    claimed: 123,
    totalClaimed: 250,
    season: specialSeason,
  },
  {
    title: 'KOOL ZERO ',
    cover: zeroCardCover,
    titleBlur: chadCradBlur,
    background: paperBG1,
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
    initialPrice: 'free',
    claimed: 250,
    totalClaimed: 250,
    season: specialSeason,
  },
  {
    title: 'Non-drinker Sergey',
    cover: sergeyCardCover,
    titleBlur: chadCradBlur,
    background: paperBG1,
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
    initialPrice: '0.3 ETH',
    claimed: 3,
    totalClaimed: 20,
    season: specialSeason,
  },
];

export default specialCards;
