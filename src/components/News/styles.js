import styled, { keyframes } from 'styled-components';

import { SectionHeading } from '../../styles/typography';
import { TextStroke } from '../../styles/typography';

import cherry from './cherry.png';
import pear from './pear.png';
import watermelon from './watermelon.png';
import fruits from '../../images/fruits-bg.jpg';

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

export const Flavors = styled.p`
  position: relative;
  margin: 0;
  font-family: 'Kool Beans';
  font-size: 50px;
  line-height: 1.1;
  ${TextStroke}
  overflow: hidden;

  &:before,
  &:after {
    content: '';
    position: absolute;
    background-repeat: no-repeat;
    background-size: contain;
    z-index: 0;
  }

  &:before {
    top: 20px;
    left: 0;
    width: 250px;
    height: 250px;
    background-image: url(${pear});

    @media (min-width: 1024px) {
      animation: ${appear} 1.8s ease-in-out infinite;
    }
  }

  &:after {
    top: 0;
    right: 0;
    width: 200px;
    height: 200px;
    background-image: url(${watermelon});

    @media (min-width: 1024px) {
      animation: ${spin} 1.8s linear infinite;
    }
  }

  @media (min-width: 1024px) {
    font-size: 75px;

    &:before {
      top: 0;
      width: 350px;
      height: 350px;
    }

    &:after {
      top: auto;
      bottom: 0;
      right: 0;
      width: 300px;
      height: 300px;
    }
  }
`;

export const FlavorText = styled.span`
  position: relative;
  display: block;
  text-align: center;
  color: ${({ color }) => color || '#fff'};
  z-index: 1;
`;
