import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0 0 30px 0;

  @media (min-width: 1024px) {
    margin: 0 0 50px 0;
  }
`;

export const Cover = styled.div`
  width: 271px;
  height: 282px;
  background-image: ${({ background }) => `url(${background})`};
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;

  @media (min-width: 1024px) {
    width: 400px;
    height: 430px;
    position: relative;
    display: table;
  }
`;

export const Body = styled.div`
  background-color: #f6ea50;
  border: 4px solid #263f26;
  border-radius: 15px;
  padding: 100px 0 0 0;
  margin: 160px 0 0 0;
  position: relative;

  @media (min-width: 1024px) {
    padding: 0;
    margin: 0;
  }
`;

export const TitleBlur = styled.div`
  background-repeat: no-repeat;
  height: 61px;
  background-size: contain;
  display: flex;
  align-items: center;
  justify-content: center;
  background-position: 100% 100%;
  background-image: ${({ background }) => `url(${background})`};

  @media (min-width: 1024px) {
    position: absolute;
    background-size: cover;
    width: 100%;
    background-position: 50% 50%;
    height: 102px;
    top: -50px;
  }
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 30px;
  color: #ffffff;
  font-family: 'Kool Beans';
  text-shadow: -2px 0 #000000, 0 2px #000000, 2px 0 #000000, 0 -2px #000000;

  @media (min-width: 1024px) {
    font-size: 35px;
    line-height: 70px;
    margin: 0 0 0 100px;
  }
`;

export const SeasonCardImage = styled.div`
  width: 70px;
  height: 70px;
  background-image: ${({ image }) => `url(${image})`};
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  right: 0;
  top: -35px;
  border-radius: 35px;

  @media (min-width: 1024px) {
    width: 104px;
    height: 104px;
    z-index: 2;
    right: -40px;
  }
`;

export const Row = styled.div`
  padding: 20px 30px;

  @media (min-width: 1024px) {
    padding: 20px 30px 20px 120px;
    margin: 50px 0 0 0;
  }
`;

export const ContentTitle = styled.p`
  margin: 0;
  font-weight: bold;
  font-size: 20px;
  color: #263f26;
  text-transform: uppercase;
  margin: 0 0 20px 0;
`;

export const ContentText = styled.span`
  font-weight: normal;
  text-transform: lowercase;
  font-size: 17px;
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 55px;

  @media (min-width: 1024px) {
    flex-direction: row;
    position: absolute;
    width: 100%;
    bottom: -20px;
    justify-content: flex-end;
    padding: 0;
  }
`;

export const Button = styled.div`
  width: 100%;
  height: 30px;
  background: #263f26;
  border: 2px solid #000000;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 25px 0;

  &:hover {
    cursor: pointer;
  }

  @media (min-width: 1024px) {
    margin: 0;
    width: 215px;
    height: 40px;

    &:nth-child(1) {
      margin: 0 30px 0 0;
    }
  }
`;

export const ButtonTitle = styled.p`
  margin: 0;
  font-size: 20px;
  color: #ffe8c5;

  @media (min-width: 1024px) {
    font-size: 20px;
  }
`;
