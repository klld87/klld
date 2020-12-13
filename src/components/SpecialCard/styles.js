import styled, { keyframes } from 'styled-components';

import loadingFruit from '../../images/fruits/loading.png';

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
  margin: ${({ isLast }) => (isLast ? '136px 0 0 0' : '136px 0')};
  justify-content: center;

  @media (min-width: 1024px) {
    margin: 180px 0 230px 0;
    justify-content: inherit;
    padding: 0 100px;
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
  left: 0;
  margin: 0 auto;
  right: ${({ mobileStyle }) =>
    typeof mobileStyle?.right !== 'undefined' ? `${mobileStyle.right}px` : '0'};
  top: ${({ mobileStyle }) =>
    typeof mobileStyle?.top !== 'undefined'
      ? `${mobileStyle.top}px`
      : '-100px'};

  @media (min-width: 1024px) {
    width: ${({ desktopSizes }) => `${desktopSizes.width}px`};
    height: ${({ desktopSizes }) => `${desktopSizes.height}px`};
    left: ${({ position }) => (position === 'left' ? '100px' : 'inherit')};
    top: 50%;
    right: 0;
    transform: translate(0, -50%);
    margin: initial;
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
    width: ${({ position }) => (position === 'left' ? '80%' : '90%')};
    padding: ${({ position, desktopSizes }) =>
      position === 'left'
        ? `20px 50px 0 ${desktopSizes.width / 2}px`
        : '20px 105px 0 50px'};
  }
`;

export const SeasonCard = styled.div`
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
  height: 91px;
  top: 108px;
  right: 0;
  background-size: cover;

  @media (min-width: 1024px) {
    width: 542px;
    height: 116px;
    top: -110px;
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
  padding: 0 55px 30px 55px;

  @media (min-width: 1024px) {
    margin: ${({ position }) =>
      position === 'right' ? '0 0 -25px -52px' : '0 -52px -30px 0'};
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
