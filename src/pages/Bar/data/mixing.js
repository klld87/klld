// Covers
import punchCover from '../../../images/mixingCard/punch.png';
import ohCover from '../../../images/mixingCard/oh.png';

// Blurs
import navyBlueBlur from '../../../images/cardBlurs/navyBlue.png';
import blueBlur from '../../../images/cardBlurs/blue.png';
import butterBlur from '../../../images/cardBlurs/butter.png';
import dogeBlur from '../../../images/cardBlurs/doge.png';
import dragonfruitBlur from '../../../images/cardBlurs/dragonfruit.png';

// Ingridients covers
import mixingCover from '../../../images/mixingCovers/1.png';

// Backgrounds
import paperBG1 from '../../../images/bgPaper/1.png';
import paperBG2 from '../../../images/bgPaper/2.png';
import paperBG3 from '../../../images/bgPaper/3.png';

const mixingCards = [
  {
    title: 'Moonshine punch',
    cover: punchCover,
    titleBlur: navyBlueBlur,
    bgColor: '#E5BB9D',
    background: paperBG1,
    description: 'How many punches before the moon?',
    contents:
      'fructose, lysergic acid, synthetic blueberry flavor, moondust, blue 1, yellow 5',
    parity: 'uncommon',
    recipe: 'banana fomo x1 + green apple pump x1 + bitcoin orange x2',
    mixedCount: 45,
    sugar: 17,
    acidity: 17,
    toxicity: 17,
    ingridients: [
      {
        cover: mixingCover,
        amount: 1,
        isAvailable: true,
      },
      {
        cover: mixingCover,
        amount: 2,
        isAvailable: false,
      },
      {
        cover: mixingCover,
        amount: 1,
        isAvailable: true,
      },
      {
        cover: mixingCover,
        amount: 1,
        isAvailable: false,
      },
    ],
  },
  {
    title: 'Rugberry',
    cover: ohCover,
    titleBlur: blueBlur,
    bgColor: '#3BDCFF',
    background: paperBG2,
    description: 'The most popular DeFi flavor!',
    contents:
      'Sugar, Fructose, Lysergic acid, Synthetic Blueberry Flavor, Persion Rug Dust, Blue 1',
    parity: 'uncommon',
    recipe: 'Red Cherry Dump x1 + Grapes of ETH x3',
    mixedCount: 67,
    sugar: 24,
    acidity: 4,
    toxicity: 7,
    ingridients: [
      {
        cover: mixingCover,
        amount: 2,
        isAvailable: true,
      },
      {
        cover: mixingCover,
        amount: 3,
        isAvailable: false,
      },
    ],
  },
  {
    title: 'Vitalik Butter',
    cover: ohCover,
    titleBlur: butterBlur,
    bgColor: '#3BDCFF',
    background: paperBG3,
    description: "Don't ask where the milk for this butter came from",
    contents:
      'Sugar, Fructose, Lysergic acid, Butter Flavor, Vitalik Extract, Blue 1, Yellow 5',
    parity: 'uncommon',
    recipe: 'Green Apple Pump x2 + Red Cherry Dump x2',
    mixedCount: 24,
    sugar: 16,
    acidity: 6,
    toxicity: 6,
    ingridients: [
      {
        cover: mixingCover,
        amount: 2,
        isAvailable: true,
      },
      {
        cover: mixingCover,
        amount: 2,
        isAvailable: false,
      },
    ],
  },
  {
    title: 'DOGE food',
    cover: ohCover,
    titleBlur: dogeBlur,
    bgColor: '#3BDCFF',
    background: paperBG1,
    description: 'Very taste. Much kool. So doge food. Wow',
    contents:
      'Many Sugar, Much Fructose, Very Lysergic acid, Little Synthetic Beef Flavor, Such Dry Doge Food,',
    parity: 'rare',
    recipe:
      'Moonshine x1, Banana FOMO x1, Bitcoin Orange x1, Green Apple Pump x1',
    mixedCount: 35,
    sugar: 33,
    acidity: 5,
    toxicity: 6,
    ingridients: [
      {
        cover: mixingCover,
        amount: 1,
        isAvailable: true,
      },
      {
        cover: mixingCover,
        amount: 1,
        isAvailable: false,
      },
      {
        cover: mixingCover,
        amount: 1,
        isAvailable: true,
      },
      {
        cover: mixingCover,
        amount: 1,
        isAvailable: false,
      },
    ],
  },
  {
    title: 'Rekt Dragonfruit',
    cover: ohCover,
    titleBlur: dragonfruitBlur,
    bgColor: '#3BDCFF',
    background: paperBG3,
    description: 'One sip and you are rekt',
    contents:
      'Sugar, Fructose, Lysergic acid, Synthetic Pitaya Flavor, Rekt Cinder, Red 3',
    parity: 'rare',
    recipe: 'Grapes of ETH x1, Vitalik Butter x1, Rugberry x1',
    mixedCount: 35,
    sugar: 47,
    acidity: 4,
    toxicity: 6,
    ingridients: [
      {
        cover: mixingCover,
        amount: 1,
        isAvailable: true,
      },
      {
        cover: mixingCover,
        amount: 2,
        isAvailable: false,
      },
      {
        cover: mixingCover,
        amount: 1,
        isAvailable: true,
      },
    ],
  },
  {
    title: 'CHAD LEMONADE',
    cover: ohCover,
    titleBlur: dogeBlur,
    bgColor: '#3BDCFF',
    background: paperBG2,
    description: 'One sip and you are rekt',
    contents:
      'Sugar, Fructose, Amino Acid Mix, Citric Acid, Chad Juice Flavor, Lemon Flavor, Testosterone Powder, Red 40, Yellow 5',
    parity: 'super rare',
    recipe: 'Banana FOMO x1 + Green Apple Pump x1 + Bitcoin Orange x2',
    mixedCount: 0,
    sugar: 100,
    acidity: 10,
    toxicity: 10,
    ingridients: [
      {
        cover: mixingCover,
        amount: 1,
        isAvailable: true,
      },
      {
        cover: mixingCover,
        amount: 1,
        isAvailable: false,
      },
      {
        cover: mixingCover,
        amount: 1,
        isAvailable: true,
      },
    ],
  },
];

export default mixingCards;
