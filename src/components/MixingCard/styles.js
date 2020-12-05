import styled from 'styled-components';

import magicJug from '../../images/magicJug.png';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 160px 0 275px 0;
  position: relative;
  padding: 0 50px;
`;

export const Cover = styled.div`
  left: 60px;
  width: 382px;
  height: 510px;
  top: 50%;
  background-image: ${({ background }) => `url(${background})`};
  transform: translate(0, -50%);
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
`;

export const Body = styled.div`
  background-color: #e5bb9d;
  border: 2px solid #000000;
  border-radius: 15px;
  width: 100%;
  padding: 15px 15px 20px 410px;
`;

export const TitleBlur = styled.div`
  background-image: ${({ background }) => `url(${background})`};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 50% 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 1;
  width: 484px;
  height: 131px;
  top: -130px;
  right: 240px;
`;

export const Title = styled.p`
  margin: 0;
  font-family: 'Kool Beans';
  font-size: 40px;
  line-height: 20px;
  text-align: center;
  color: #ffffff;
`;

export const Jug = styled.div`
  background-image: url(${magicJug});
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  z-index: 2;
  width: 156px;
  height: 189px;
  top: -110px;
  right: -10px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Content = styled.div`
  padding: 0 45px 0 0;
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

export const IngridientsBlock = styled.div`
  background-color: #3bdcff;
  width: 300px;
  z-index: 2;
  padding: 20px 45px 20px 45px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  border: 2px solid #000000;
  min-width: 300px;
`;

export const IngridientsLabel = styled.p`
  margin: 0;
  font-weight: bold;
  font-size: 15px;
  line-height: 20px;
  text-align: center;
  color: #263f26;
  text-transform: uppercase;
`;

export const IngridientsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 16px 0 0 0;
  position: relative;
`;

export const IngridientsPlus = styled.p`
  margin: -10px 0 0 0;
  position: absolute;
  font-weight: bold;
  font-size: 50px;
  color: #263f26;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
`;

export const StatsList = styled.div`
  display: flex;
  flex-direction: row;
  margin: 15px 0 0 0;
`;

export const StatsItem = styled.p`
  margin: 0;
  flex: 1;
  font-weight: bold;
  font-size: 15px;
  line-height: 20px;
  text-align: center;
  color: #263f26;
  opacity: 0.85;
`;

export const Right = styled.div`
  display: table;
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

  &:hover {
    cursor: pointer;
  }
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
