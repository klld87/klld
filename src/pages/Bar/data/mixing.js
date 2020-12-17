// Covers
import rugberryCover from '../../../images/mixingCard/rugberry.png';
import ohCover from '../../../images/mixingCard/oh.png';

// Blurs
import blueBlur from '../../../images/cardBlurs/blue.png';

// Ingridients covers
import redCherryDumpIngr from '../../../images/mixingCovers/redCherryDump.png';
import grapesofETHIngr from '../../../images/mixingCovers/grapesofETH.png';

// Backgrounds
import paperBG1 from '../../../images/bgPaper/1.png';
import paperBG2 from '../../../images/bgPaper/2.png';

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
  },
  {
    // tokenId: 9,
    title: 'Moonshine punch',
    cover: ohCover,
    withCountDown: true,
    countDown: new Date('Dec 20 2020 18:00:00 GMT+0000'),
    bgColor: '#E5BB9D',
    background: paperBG2,
  },
  // {
  //   tokenId: 10,
  //   title: 'Vitalik Butter',
  // },
  // {
  //   tokenId: 11,
  //   title: 'Doge Food',
  // },
  // {
  //   tokenId: 12,
  //   title: 'Rekt Dragonfrui',
  // },
  // {
  //   tokenId: 13,
  //   title: 'Chad Lemonade',
  // }
];

export default mixingCards;
