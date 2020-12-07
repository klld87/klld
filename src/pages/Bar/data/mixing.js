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
    cover: ohCover,
    withCountDown: true,
    bgColor: '#3BDCFF',
    background: paperBG1,
  },
];

export default mixingCards;
