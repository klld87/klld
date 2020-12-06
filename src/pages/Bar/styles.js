import styled from 'styled-components';

// Images
import BackgroundImage from '../../images/barBackground.png';
import watermelon from '../../images/barFruits/watermelon.png';
import pear from '../../images/barFruits/pear.png';
import grapes from '../../images/barFruits/grapes.png';

export const Wrapper = styled.div`
  background-image: url(${BackgroundImage});
  background-repeat: repeat;
`;

export const WatermelonFruit = styled.div`
  @media (min-width: 1024px) {
    background-image: url(${watermelon});
    background-repeat: no-repeat;
    width: 477px;
    height: 248px;
    background-size: contain;
    position: absolute;
    transform: rotate(0);
    filter: drop-shadow(5px 5px 4px rgba(0, 0, 0, 0.5));
    top: 3200px;
  }
`;

export const PearFruit = styled.div`
  @media (min-width: 1024px) {
    background-image: url(${pear});
    background-repeat: no-repeat;
    width: 155px;
    height: 361px;
    right: 0;
    background-size: contain;
    position: absolute;
    transform: rotate(0);
    filter: drop-shadow(5px 5px 4px rgba(0, 0, 0, 0.5));
    top: 3600px;
  }
`;

export const GrapesFruit = styled.div`
  @media (min-width: 1024px) {
    background-image: url(${grapes});
    background-repeat: no-repeat;
    width: 339px;
    height: 330px;
    background-size: contain;
    position: absolute;
    transform: rotate(0);
    filter: drop-shadow(5px 5px 4px rgba(0, 0, 0, 0.5));
    top: 4000px;
  }
`;
