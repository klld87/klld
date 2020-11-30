import styled, { keyframes } from 'styled-components';

import Container from '../Container';

import background from '../../images/statsBlockBG.svg';
import backgroundMobile from '../../images/statsBlockMobileBG.svg';

// Fruits
import strawberryFruit from '../../images/fruits/strawberry.png';
import appleFruit from '../../images/fruits/apple.png';
import orangeFruit from '../../images/fruits/tinyorange.png';

const bouncing = keyframes`
  0% {
    transform: translateY(0);
  }

  25% {
    transform: translateY(-20px);
  }

  50% {
    transform: translateY(0);
  }

  75% {
    transform: translateY(-30px);
  }

  100% {
    transform: translateY(0);
  }
`;

export const StyledContainer = styled(Container)`
  @media (max-width: 576px) {
    overflow: hidden;
  }
`;

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
    margin: ${({ pageFrom }) =>
      pageFrom === 'bar' ? '30px 0 53px 0' : '80px 0 53px 0'};
  }
`;

export const StatsValue = styled.h3`
  margin: 0;
  font-weight: bold;
  font-size: 35px;
  line-height: 30px;
  color: #ffffff;
  text-align: center;

  @media (max-width: 831px) {
    text-shadow: -3px 0 #000000, 0 3px #000000, 3px 0 #000000, 0 -3px #000000;
  }

  @media (min-width: 832px) {
    color: #000;
  }
`;

export const StatsName = styled.p`
  margin: 0;
  font-weight: bold;
  font-size: 35px;
  line-height: 30px;
  color: #ffffff;
  text-align: center;

  @media (max-width: 831px) {
    text-shadow: -3px 0 #000000, 0 3px #000000, 3px 0 #000000, 0 -3px #000000;
  }

  @media (min-width: 832px) {
    color: #000;
  }
`;

export const Strawberry = styled.div`
  background-image: url(${strawberryFruit});
  background-size: contain;
  background-repeat: no-repeat;
  width: 88px;
  height: 94px;
  position: absolute;
  top: -30px;
  left: -15px;

  @media (min-width: 1100px) {
    width: 120px;
    height: 120px;
    top: -60px;
    left: -40px;
  }
`;

export const Apple = styled.div`
  background-image: url(${appleFruit});
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  width: 79px;
  height: 72px;
  bottom: -30px;
  right: -20px;

  @media (min-width: 1100px) {
    width: 110px;
    height: 110px;
    right: -60px;
  }
`;

export const Loader = styled.span`
  display: block;
  margin: 0 auto;
  width: 30px;
  height: 30px;
  background-image: url(${orangeFruit});
  background-repeat: no-repeat;
  background-size: contain;
  text-indent: -999999px;
  animation: ${bouncing} 1.5s ease-in-out infinite;
`;
