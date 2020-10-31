import styled from 'styled-components';

import background from '../../images/statsBlockBG.svg';
import backgroundMobile from '../../images/statsBlockMobileBG.svg';

// Fruits
import strawberryFruit from '../../images/fruits/strawberry.svg';
import appleFruit from '../../images/fruits/apple.svg';

export const StatsList = styled.div`
  margin: 44px 0 40px 0;
  border: 6px solid rgba(0, 0, 0, 0.5);
  border-radius: 25px;
  padding: 40px 0;
  position: relative;
  background-image: url(${backgroundMobile});
  background-size: cover;
  background-repeat: no-repeat;

  @media (min-width: 1024px) {
    background-image: url(${background});
    margin: 44px 0 53px 0;
  }
`;

export const StatsValue = styled.h3`
  margin: 0;
  font-weight: bold;
  font-size: 35px;
  line-height: 30px;
  color: #ffffff;
  text-align: center;
  text-shadow: -3px 0 #000000, 0 3px #000000, 3px 0 #000000, 0 -3px #000000;
`;

export const StatsName = styled.p`
  margin: 0;
  font-weight: bold;
  font-size: 35px;
  line-height: 30px;
  color: #ffffff;
  text-align: center;
  text-shadow: -3px 0 #000000, 0 3px #000000, 3px 0 #000000, 0 -3px #000000;
`;

export const Strawberry = styled.div`
  background-image: url(${strawberryFruit});
  background-size: cover;
  background-repeat: no-repeat;
  width: 98px;
  height: 104px;
  position: absolute;
  top: -30px;
  left: -30px;
`;

export const Apple = styled.div`
  background-image: url(${appleFruit});
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  width: 89px;
  height: 82px;
  bottom: -30px;
  right: -35px;
`;
