import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 190px 0 250px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  @media (min-width: 1024px) {
    justify-content: center;
    margin: 130px 0 140px 0;
    align-items: flex-end;
  }
`;

export const Cover = styled.div`
  background-image: ${({ background }) => `url(${background})`};
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  width: 271px;
  height: 282px;
  top: -160px;

  @media (min-width: 1024px) {
    width: 374px;
    height: 390px;
    top: -40px;
    left: 0;
  }
`;

export const Body = styled.div`
  background: #f6ea50;
  width: 100%;
  border: 4px solid #263f26;
  border-radius: 15px;
  padding: 100px 0 0 0;

  @media (min-width: 1024px) {
    padding: 0;
    margin: 0;
    width: 80%;
  }
`;

export const TitleBlur = styled.div`
  background-image: ${({ mobileBackground }) => `url(${mobileBackground})`};
  width: 100%;
  height: 61px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  background-size: contain;

  @media (min-width: 1024px) {
    background-image: ${({ background }) => `url(${background})`};
    width: 575px;
    background-size: contain;
    background-position: 0 50%;
    height: 102px;
    position: absolute;
    top: -60px;
    right: 200px;
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
    font-size: 35px;
    line-height: 70px;
    margin: 0 0 0 60px;
  }
`;

export const SeasonCardImage = styled.div`
  width: 76px;
  height: 71px;
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
    padding: 0 40px 0 120px;
    margin: 20px 0 0 0;
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
    right: 0;
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
