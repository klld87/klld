import styled, { keyframes } from 'styled-components';

import { SectionHeading } from '../../styles/typography';

import cherry from './cherry.png';
import pear from './pear.png';
import watermelon from './watermelon.png';
import fruits from '../../images/fruits-bg.jpg';
import barPageCover from '../../images/barPageCover.png';

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

export const Heading = styled(SectionHeading)`
  @media (min-width: 1024px) {
    &:after {
      content: '';
      display: inline-block;
      vertical-align: middle;
      width: 138px;
      height: 133px;
      margin-left: 10px;
      background-image: url(${cherry});
      background-repeat: no-repeat;
      background-size: contain;
    }
  }
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 25px;
  margin: 0 0 35px;
  padding: 0;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 30px;
    margin-bottom: 95px;
  }
`;

export const Item = styled.li`
  display: block;
`;

export const ItemLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  padding: 10px;
  font-size: 20px;
  font-weight: 700;
  color: #000;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.8) 0%,
      rgba(255, 255, 255, 0.8) 100%
    ),
    url(${fruits});
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
  border-radius: 15px;
  box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.85);

  @media (max-width: 1023px) {
    max-width: 300px;
    margin: 0 auto;
  }

  @media (min-width: 1024px) {
    height: 107px;
    font-size: 35px;
  }

  @media (min-width: 1200px) {
    transition: all 0.3s;

    &:hover {
      transform: scale(1.05);
      box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.85);
    }
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
