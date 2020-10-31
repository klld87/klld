import styled, { keyframes } from 'styled-components';
import Button from '../Button';

import { SectionHeading } from '../../styles/typography';

import pineapple from './pineapple.png';
import opensea from './opensea.png';
import fruits from '../../images/fruits-bg.jpg';
import banana from './banana.png';
import grapes from './grapes.png';

const pineappleGoCrazy = keyframes`
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(30deg);
  }
  50% {
    transform: rotate(0deg);
  }
  75% {
    transform: rotate(30deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

export const Heading = styled(SectionHeading)`
  position: relative;
  padding-top: 60px;
`;

export const HeadingInner = styled.div`
  position: relative;
  display: inline-block;

  span {
    position: relative;
  }

  &:before {
    content: '';
    position: absolute;
    left: -20px;
    top: -120px;
    width: 200px;
    height: 250px;
    margin-left: 10px;
    background-image: url(${pineapple});
    background-repeat: no-repeat;
    background-size: contain;
    z-index: 0;

    animation: ${pineappleGoCrazy} 1.5s linear alternate 5;

    @media (min-width: 480px) {
      left: -90px;
    }

    @media (min-width: 512px) {
      left: -100px;
    }

    @media (min-width: 1024px) {
      left: -110px;
      top: -140px;
      width: 220px;
      height: 300px;
    }
  }
`;

export const Content = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: 1fr;
  grid-gap: 25px;

  @media (min-width: 1024px) {
    grid-template-rows: 1fr 1fr;
    grid-template-columns: calc(60% - 40px) calc(40% - 25px);
    grid-template-areas:
      'image text'
      'image link';
    grid-gap: 25px 65px;
  }

  @media (min-width: 1400px) {
    &:before {
      content: '';
      position: absolute;
      bottom: 50px;
      left: -70px;
      width: 173px;
      height: 187px;
      background-image: url(${banana});
      background-repeat: no-repeat;
      background-size: contain;
    }

    &:after {
      content: '';
      position: absolute;
      top: 60px;
      right: -120px;
      width: 277px;
      height: 270px;
      background-image: url(${grapes});
      background-repeat: no-repeat;
      background-size: contain;
      z-index: 0;
    }
  }
`;

export const Image = styled.img`
  position: relative;
  display: block;
  width: 100%;
  border: 6px solid #05a6b0;
  border-radius: 20px;

  @media (min-width: 1024px) {
    grid-area: image;
  }
`;

export const Text = styled.p`
  position: relative;
  margin: 0;
  padding: 30px;
  font-size: 15px;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.8) 0%,
      rgba(255, 255, 255, 0.8) 100%
    ),
    url(${fruits});
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
  border: 6px solid #2b77be;
  border-radius: 15px;
  z-index: 1;

  &:before {
    content: '';
    position: absolute;
    top: -95px;
    left: -35px;
    width: 129px;
    height: 144px;
    background-repeat: no-repeat;
    background-size: contain;
    background-image: url(${opensea});
  }

  @media (min-width: 1024px) {
    grid-area: text;

    &:before {
      top: -45px;
      left: -100px;
    }
  }

  @media (min-width: 1200px) {
    font-size: 20px;

    &:before {
      top: -80px;
      left: -140px;
      width: 187px;
      height: 209px;
    }
  }
`;

export const Link = styled(Button)`
  background-color: #fcf8e6;
  border-radius: 15px;
  z-index: 1;

  @media (min-width: 1024px) {
    grid-area: link;
  }
`;
