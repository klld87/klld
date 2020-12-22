import styled, { keyframes } from 'styled-components';

import pear from './pear.png';
import watermelon from './watermelon.png';
import barPageCover from '../../images/barPageCover.png';
import scotchTape from '../../images/scotchTape.png';

const spin = keyframes`
  0% {
    transform: scale(1)
  }

  50% {
    transform: scale(0.2);
  }

  100% {
    transform: scale(1) rotate(360deg)
  }
`;

const appear = keyframes`
  0% {
    transform: scale(1) rotate(360deg);
  }

  25% {
    transform: scale(0);
  }

  50% {
    transform: scale(1) translateY(-10px);
  }

  60% {
    transform: translateY(20px);
  }

  70% {
    transform: translateY(-25px);
  }

  80% {
    transform: translateY(30px);
  }

  90% {
    transform: translateY(-20px);
  }

  100% {
    transform: translateY(0);
  }
`;

export const WelcomeToBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 0 0 0;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: center;
    position: relative;
  }
`;

export const BarCover = styled.div`
  width: 289px;
  height: 419px;
  background-image: url(${barPageCover});
  background-repeat: no-repeat;
  background-size: contain;
  margin: 50px 0;
  position: relative;

  @media (min-width: 1024px) {
    margin: 0;
    width: 370px;
    height: 536px;
  }
`;

export const BarButton = styled.div`
  width: 154px;
  height: 47px;
  background: #fe1600;
  border: 5px solid #ff7562;
  box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.5);
  border-radius: 3px;
  position: absolute;
  bottom: 130px;
  right: 0px;

  @media (min-width: 1024px) {
    bottom: 165px;
    width: 239px;
    height: 61px;
    right: -20px;
  }
`;

export const BarButtonTitle = styled.p`
  font-size: 12px;
  line-height: 17px;
  color: #ffffff;
  margin: 0 30px;
  text-align: center;

  @media (min-width: 1024px) {
    font-size: 18px;
    line-height: 25px;
    margin: 0 50px;
  }
`;

export const WatermelonFruit = styled.div`
  width: 222px;
  height: 203px;
  background-image: url(${watermelon});
  background-repeat: no-repeat;
  background-size: contain;
  animation: ${spin} 1.8s linear infinite;

  @media (min-width: 1024px) {
    position: absolute;
    right: -110px;
    width: 333px;
    background-size: cover;
    height: 304px;
    bottom: -80px;
  }
`;

export const PearFruit = styled.div`
  width: 81px;
  height: 106px;
  background-image: url(${pear});
  background-repeat: no-repeat;
  background-size: contain;
  animation: ${appear} 1.8s ease-in-out infinite;

  @media (min-width: 1024px) {
    position: absolute;
    width: 243px;
    height: 318px;
    background-size: cover;
    transform: rotate(-14.92deg);
    left: 0;
    top: 0;
  }
`;

export const ScotchTape = styled.div`
  width: 86px;
  height: 97px;
  position: absolute;
  background-image: url(${scotchTape});
  background-repeat: no-repeat;
  background-size: contain;
  top: ${({ position }) => (position === 'top' ? '-35px' : 'inherit')};
  left: ${({ position }) => (position === 'top' ? '-30px' : 'inherit')};
  bottom: ${({ position }) => (position === 'top' ? 'inherit' : '-40px')};
  right: ${({ position }) => (position === 'top' ? 'inherit' : '-35px')};

  @media (min-width: 1024px) {
    width: 111px;
    height: 98px;
    top: ${({ position }) => (position === 'top' ? '-40px' : 'inherit')};
    left: ${({ position }) => (position === 'top' ? '-40px' : 'inherit')};
    bottom: ${({ position }) => (position === 'top' ? 'inherit' : '-30px')};
    right: ${({ position }) => (position === 'top' ? 'inherit' : '-45px')};
  }
`;
