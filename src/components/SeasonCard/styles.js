import styled from 'styled-components';

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
  right: 0;
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
  padding: 0 55px 30px 55px;

  @media (min-width: 1024px) {
    margin: ${({ position }) =>
      position === 'right' ? '0 0 -25px -100px' : '0 -60px -30px 0;'};
    flex-direction: row;
    padding: 0;
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
    margin: 0 28px 0 0;
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
