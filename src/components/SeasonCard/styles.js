import styled, { keyframes } from 'styled-components';

import loadingFruit from '../../images/fruits/loading.png';
import happyKool from '../../images/happyKool.png';
import climberKool from '../../images/climberKool.png';
import happyKoolDrink from '../../images/happyKoolDrink.png';
import arthur from '../../images/arthur.png';

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

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 0;
  margin: ${({ isLast }) => (isLast ? '190px 0 0 0' : '190px 0 240px 0')};
  justify-content: center;

  @media (min-width: 1024px) {
    margin: 180px 0 230px 0;
    justify-content: inherit;
    padding: 0 50px;
    align-items: ${({ position }) =>
      position === 'left' ? 'flex-end' : 'flex-start'};
  }
`;

export const Cover = styled.div`
  background-image: ${({ background }) => `url(${background})`};
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  width: ${({ mobileSizes }) => `${mobileSizes.width}px`};
  height: ${({ mobileSizes }) => `${mobileSizes.height}px`};
  margin: 0 auto;
  left: 0;
  right: 0;
  top: -150px;

  @media (min-width: 1024px) {
    width: ${({ desktopSizes }) => `${desktopSizes.width}px`};
    height: ${({ desktopSizes }) => `${desktopSizes.height}px`};
    left: ${({ position }) => (position === 'left' ? '50px' : 'inherit')};
    right: ${({ position }) => (position === 'left' ? 'inherit' : '0px')};
    top: 50%;
    right: 0;
    transform: translate(0, -50%);
    margin: initial;
    z-index: 2;
    transition: all 0.2s ease-in-out;

    &:hover {
      transform: scale(1.2);
      top: -40px;
    }
  }
`;

export const Body = styled.div`
  background-color: ${({ bgColor }) => bgColor};
  border: 2px solid #263f26;
  background-image: ${({ background }) => `url(${background})`};
  background-repeat: repeat;
  background-size: cover;
  border-radius: 15px;
  width: 100%;

  @media (min-width: 1024px) {
    width: 80%;
    padding: ${({ position, desktopSizes }) =>
      position === 'left'
        ? `40px 50px 0 ${desktopSizes.width / 2}px`
        : '40px 105px 0 100px'};
  }
`;

export const SeasonCardImage = styled.div`
  width: 76px;
  height: 71px;
  background-image: ${({ image }) => `url(${image})`};
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  border-radius: 35px;
  right: ${({ position }) => (position === 'left' ? '0' : 'inherit')};
  top: -35px;

  @media (min-width: 1024px) {
    width: 104px;
    height: 104px;
    z-index: 2;
    left: 50px;
    top: -50px;
    left: ${({ position }) => (position === 'left' ? 'inherit' : '50px')};
    right: ${({ position }) => (position === 'left' ? '50px' : 'inherit')};
  }
`;

export const TitleBlur = styled.div`
  background-image: ${({ background }) => `url(${background})`};
  background-repeat: no-repeat;
  background-position: 50% 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 1;
  width: 100%;
  right: 0;
  background-size: cover;
  height: 64px;
  top: 130px;

  @media (min-width: 1024px) {
    width: 542px;
    height: 116px;
    top: -70px;
    background-size: contain;
    left: ${({ position }) => (position === 'left' ? 'inherit' : '200px')};
    right: ${({ position }) => (position === 'left' ? '260px' : 'inherit')};
  }
`;

export const Title = styled.p`
  margin: 0;
  font-family: 'Kool Beans';
  font-size: 30px;
  line-height: 20px;
  text-align: center;
  color: #ffffff;
  text-shadow: -1px 0 #000000, 0 1px #000000, 1px 0 #000000, 0 -1px #000000;

  @media (min-width: 1024px) {
    font-size: 40px;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  padding: 208px 20px 35px 20px;

  @media (min-width: 1024px) {
    padding: 0 45px 0 0;
  }
`;

export const ContentTitle = styled.p`
  font-weight: bold;
  color: #263f26;
  text-transform: uppercase;
  margin: 0 0 20px 0;
  font-size: 15px;
  line-height: 20px;
`;

export const ContentText = styled.span`
  font-weight: normal;
  text-transform: lowercase;
  font-size: 15px;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${({ position }) =>
    position === 'left' ? 'flex-end' : 'flex-start'};
  flex-direction: column;
  margin: 0;
  padding: 30px 15px;

  @media (min-width: 1024px) {
    padding: 0 55px 30px 55px;
    margin: ${({ position }) =>
      position === 'right' ? '0 0 -25px -100px' : '0 -52px -30px 0'};
    flex-direction: ${({ position }) =>
      position === 'right' ? 'row' : 'row-reverse'};
    padding: 0;
    justify-content: flex-start;
  }
`;

export const Button = styled.div`
  width: 100%;
  height: 42px;
  background: #263f26;
  border-radius: 15px;
  border: 1px solid #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0 20px 0;

  @media (min-width: 1024px) {
    width: 215px;
    z-index: 2;
    margin: ${({ position }) =>
      position === 'right' ? '0 28px 0 0' : '0 0 0 28px'};
  }
`;

export const ButtonTitle = styled.p`
  margin: 0;
  font-size: 20px;
  line-height: 20px;
  color: #ffffff;
`;

export const ParityBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ParityRow = styled.div`
  margin: -22px 0 0 20px;
`;

export const LoadingClaimed = styled.span`
  display: block;
  margin: 0 auto;
  width: 44px;
  height: 37px;
  background-image: url(${loadingFruit});
  background-repeat: no-repeat;
  background-size: contain;
  text-indent: -999999px;
  animation: ${bouncing} 1.5s ease-in-out infinite;
`;

export const HappyKool = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: block;
    width: 158px;
    height: 170px;
    background-image: url(${happyKool});
    background-repeat: no-repeat;
    background-size: contain;
    position: absolute;
    right: -25px;
    bottom: 20px;
  }
`;

export const ClimberKool = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: block;
    width: 222px;
    height: 303px;
    background-image: url(${climberKool});
    background-repeat: no-repeat;
    background-size: contain;
    position: absolute;
    left: -94px;
    bottom: -110px;
    z-index: 3;
  }
`;

export const HappyKoolDrink = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: block;
    width: 145px;
    height: 118px;
    background-image: url(${happyKoolDrink});
    background-repeat: no-repeat;
    background-size: contain;
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
`;

const ArthurAnimate = keyframes`
  0% {
    top: -27px;
  }

  25% {
    top: -137px;
  }

  50% {
    top: -27px;
  }

  75% {
    top: -137px;
  }

  100% {
    top: -27px;
  }
`;

export const Arthur = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: block;
    background-image: url(${arthur});
    background-repeat: no-repeat;
    background-size: contain;
    position: absolute;
    width: 167px;
    height: 129px;
    animation: ${ArthurAnimate} 5s ease-in-out infinite;
    right: 112px;
    z-index: 1;
  }
`;
