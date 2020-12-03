import styled from 'styled-components';

import magicJug from '../../images/magicJug.png';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 135px 0 50px 0;
  position: relative;
`;

export const Cover = styled.div`
  width: 188px;
  height: 250px;
  background-image: ${({ background }) => `url(${background})`};
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  top: -95px;
`;

export const Body = styled.div`
  background-color: #3bdcff;
  border: 2px solid #000000;
  border-radius: 15px;
  width: 100%;
  padding: 140px 0 0 0;
`;

export const TitleBlur = styled.div`
  width: 100%;
  height: 60px;
  background-image: ${({ background }) => `url(${background})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 1;
`;

export const Title = styled.p`
  margin: 0;
  font-family: 'Kool Beans';
  font-size: 20px;
  line-height: 70px;
  text-align: center;
  color: #ffffff;
`;

export const Jug = styled.div`
  width: 78px;
  height: 95px;
  background-image: url(${magicJug});
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  z-index: 2;
  right: 0;
  bottom: 105px;
`;

export const IngridientsBlock = styled.div`
  margin: 100px 0 0 0;
  border: 2px solid #000000;
  border-radius: 15px;
  padding: 20px;
`;

export const IngridientsLabel = styled.p`
  margin: 100px 20px 0 20px;
  font-weight: bold;
  font-size: 15px;
  color: #263f26;
  text-transform: uppercase;
`;
