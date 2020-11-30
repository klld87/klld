import styled from 'styled-components';
import { TextStroke } from '../../styles/typography';

import specialKoolMan from '../../images/specialKoolMan.png';
import koolFamily from '../../images/koolFamily.png';

export const Wrapper = styled.div`
  height: 148px;
  border: 3px solid #263f26;
  filter: drop-shadow(5px 5px 4px rgba(0, 0, 0, 0.5));
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const KoolMan = styled.div`
  width: 230px;
  height: 240px;
  position: absolute;
  background-image: url(${specialKoolMan});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Row = styled.div`
  position: relative;
`;

export const Title = styled.h3`
  margin: 0;
  font-family: Kool Beans;
  font-style: normal;
  font-weight: normal;
  font-size: 65px;
  line-height: 70px;
  text-align: center;
  color: #ff8484;
  ${TextStroke};
`;

export const Text = styled.p`
  margin: 0;
  font-family: Kool Beans;
  font-style: normal;
  font-weight: normal;
  font-size: 50px;
  line-height: 70px;
  text-align: center;
  color: #ffffff;
  ${TextStroke};
`;

export const SeasonCard = styled.div`
  width: 100px;
  height: 100px;
  background-color: green;
  position: absolute;
`;

export const KoolFamilyImage = styled.div`
  width: 344px;
  height: 334px;
  background-image: url(${koolFamily});
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  right: -20px;
  bottom: -60px;
`;
