// Covers
import rugberryCover from '../../../images/mixingCard/rugberry.png';
import punchCover from '../../../images/mixingCard/punch.png';
import ohCover from '../../../images/mixingCard/oh.png';
import butterCover from '../../../images/mixingCard/butter.png';
import dogeCover from '../../../images/mixingCard/doge.gif';
import dragonfruitCover from '../../../images/mixingCard/dragonfruit.gif';

// Blurs
import blueBlur from '../../../images/cardBlurs/blue.png';
import navyBlueBlur from '../../../images/cardBlurs/navyBlue.png';
import butterBlur from '../../../images/cardBlurs/butter.png';
import dogeBlur from '../../../images/cardBlurs/doge.png';
import dragonfruitBlur from '../../../images/cardBlurs/dragonfruit.png';

// Ingridients covers
import redCherryDumpIngr from '../../../images/mixingCovers/redCherryDump.png';
import grapesofETHIngr from '../../../images/mixingCovers/grapesofETH.png';
import bananaFomoIngr from '../../../images/mixingCovers/bananaFomo.png';
import greenAppleIngr from '../../../images/mixingCovers/greenApple.png';
import bitcoinOrangeIngr from '../../../images/mixingCovers/bitcoinOrange.png';

// Backgrounds
import paperBG1 from '../../../images/bgPaper/1.png';
import paperBG2 from '../../../images/bgPaper/2.png';
import paperBG3 from '../../../images/bgPaper/3.png';

const mixingCards = [
  {
    tokenId: 8,
    title: 'Rugberry',
    cover: rugberryCover,
    titleBlur: blueBlur,
    bgColor: '#3BDCFF',
    background: paperBG1,
    description: 'The most popular DeFi flavor!',
    contents:
      'Sugar, Fructose, Lysergic acid, Synthetic Blueberry Flavor, Persion Rug Dust, Blue 1',
    parity: 'uncommon',
    recipe: 'Red Cherry Dump x1 + Grapes of ETH x3',
    sugar: 24,
    acidity: 4,
    toxicity: 7,
    ingridients: [
      {
        cover: redCherryDumpIngr,
        amount: 1,
        tokenId: 4,
      },
      {
        cover: grapesofETHIngr,
        amount: 3,
        tokenId: 6,
      },
    ],
    includeMixing: [{ tokenId: 12, amount: 1 }],
  },
  {
    tokenId: 9,
    title: 'Moonshine punch',
    cover: punchCover,
    titleBlur: navyBlueBlur,
    bgColor: '#E5BB9D',
    background: paperBG2,
    description: 'How many punches before the moon?',
    contents:
      'Sugar, Fructose, Lysergic acid, Methyl Flavor, Moondust, Blue 1, Yellow 5',
    parity: 'uncommon',
    recipe: 'Banana FOMO x1 + Green Apple Pump x1 + Bitcoin Orange x2',
    sugar: 17,
    acidity: 6,
    toxicity: 7,
    ingridients: [
      {
        cover: bananaFomoIngr,
        amount: 1,
        tokenId: 7,
      },
      {
        cover: greenAppleIngr,
        amount: 1,
        tokenId: 3,
      },
      {
        cover: bitcoinOrangeIngr,
        amount: 2,
        tokenId: 5,
      },
    ],
    includeMixing: [{ tokenId: 11, amount: 1 }],
  },
  {
    tokenId: 10,
    title: 'Vitalik Butter',
    cover: butterCover,
    titleBlur: butterBlur,
    bgColor: '#E5BB9D',
    background: paperBG3,
    description: "Don't ask where the milk for this butter came from",
    contents:
      'Sugar, Fructose, Lysergic acid, Butter Flavor, Vitalik Extract, Blue 1, Yellow 5',
    parity: 'uncommon',
    recipe: 'Green Apple Pump x2 + Red Cherry Dump x2',
    sugar: 16,
    acidity: 6,
    toxicity: 6,
    ingridients: [
      {
        cover: greenAppleIngr,
        amount: 2,
        tokenId: 3,
      },
      {
        cover: redCherryDumpIngr,
        amount: 2,
        tokenId: 4,
      },
    ],
    includeMixing: [{ tokenId: 12, amount: 1 }],
  },
  {
    tokenId: 11,
    title: 'Doge Food',
    cover: dogeCover,
    titleBlur: dogeBlur,
    bgColor: '#E5BB9D',
    background: paperBG2,
    description: 'Very taste. Much kool. So doge food. Wow',
    contents:
      'Many Sugar, Much Fructose, Very Lysergic acid, Little Synthetic Beef Flavor, Such Dry Doge Food',
    parity: 'rare',
    recipe:
      'Moonshine x1, Banana FOMO x1, Bitcoin Orange x1, Green Apple Pump x1',
    sugar: 33,
    acidity: 5,
    toxicity: 6,
    ingridients: [
      {
        cover: punchCover,
        amount: 1,
        tokenId: 9,
      },
      {
        cover: bananaFomoIngr,
        amount: 1,
        tokenId: 3,
      },
      {
        cover: bitcoinOrangeIngr,
        amount: 1,
        tokenId: 4,
      },
      {
        cover: greenAppleIngr,
        amount: 1,
        tokenId: 3,
      },
    ],
  },
  {
    tokenId: 12,
    title: 'Rekt Dragonfruit',
    cover: dragonfruitCover,
    titleBlur: dragonfruitBlur,
    bgColor: '#E5BB9D',
    background: paperBG1,
    description: 'One sip and you are rekt',
    contents:
      'Sugar, Fructose, Lysergic acid, Synthetic Pitaya Flavor, Rekt Cinder, Red 3',
    parity: 'rare',
    recipe: 'Grapes of ETH x1, Vitalik Butter x1, Rugberry x1',
    sugar: 47,
    acidity: 4,
    toxicity: 6,
    ingridients: [
      {
        cover: grapesofETHIngr,
        amount: 1,
        tokenId: 6,
      },
      {
        cover: butterCover,
        amount: 1,
        tokenId: 10,
      },
      {
        cover: rugberryCover,
        amount: 1,
        tokenId: 8,
      },
    ],
  },
  {
    cover: ohCover,
    withCountDown: true,
    countDown: new Date('Jan 8 2021 20:00:00 GMT+0000'),
    bgColor: '#3BDCFF',
    background: paperBG1,
    // tokenId: 13,
    // title: 'Chad Lemonade',
  },
];

export default mixingCards;
