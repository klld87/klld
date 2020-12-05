import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 0;
  margin: 136px 0;
  justify-content: center;

  @media (min-width: 1024px) {
    padding: 0 50px;
    margin: 180px 0 230px 0;
    justify-content: inherit;
  }
`;

export const Cover = styled.div`
  background-image: ${({ background }) => `url(${background})`};
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  width: ${({ mobileSizes }) => `${mobileSizes.width}px`};
  height: ${({ mobileSizes }) => `${mobileSizes.height}px`};
  top: -100px;
  right: 0;
  margin: 0 auto;

  @media (min-width: 1024px) {
    width: ${({ desktopSizes }) => `${desktopSizes.width}px`};
    height: ${({ desktopSizes }) => `${desktopSizes.height}px`};
    top: 50%;
    right: 0;
    transform: translate(0, -50%);
    margin: initial;
  }
`;

export const Body = styled.div`
  background-color: #ffd639;
  border: 2px solid #263f26;
  border-radius: 15px;
  width: 100%;

  @media (min-width: 1024px) {
    padding: 15px 15px 20px 410px;
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
    width: 484px;
    height: 131px;
    top: -130px;
    right: 240px;
    background-size: contain;
  }
`;

export const Title = styled.p`
  margin: 0;
  font-family: 'Kool Beans';
  font-size: 30px;
  line-height: 20px;
  text-align: center;
  color: #ffffff;

  @media (min-width: 1024px) {
    font-size: 40px;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
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
  font-size: 18px;

  @media (min-width: 1024px) {
    font-size: 20px;
  }
`;

export const ContentText = styled.span`
  font-weight: normal;
  text-transform: lowercase;
  font-size: 15px;

  @media (min-width: 1024px) {
    font-size: 17px;
  }
`;

export const Actions = styled.div``;

export const Button = styled.div`
  width: 100%;
  height: 42px;
  background: #263f26;
  border-radius: 15px;
  border: 1px solid #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px 0 0 0;
`;

export const ButtonTitle = styled.p`
  margin: 0;
  font-size: 20px;
  line-height: 20px;
  color: #ffffff;
`;

export const ParityBlock = styled.div`
  position: relative;
`;

export const Parity = styled.div`
  width: 45px;
  height: 45px;
  background: linear-gradient(
    0deg,
    rgba(113, 135, 255, 0.65),
    rgba(113, 135, 255, 0.65)
  );
  border-radius: 100%;
  position: absolute;
  top: -10px;
  right: 50px;
  border: 2px solid #263f26;

  &:hover {
    cursor: pointer;
  }
`;
