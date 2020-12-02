import styled from 'styled-components';
import { TextStroke } from '../../styles/typography';

import specialKoolMan from '../../images/specialKoolMan.png';
import koolFamily from '../../images/koolFamily.png';

export const Wrapper = styled.div`
  height: auto;
  border: none;
  flex-direction: column-reverse;
  align-items: center;
  position: relative;
  display: flex;
  justify-content: center;

  @media (min-width: 1024px) {
    height: 148px;
    border: 3px solid #263f26;
    filter: drop-shadow(5px 5px 4px rgba(0, 0, 0, 0.5));
    flex-direction: column;
  }
`;

export const KoolMan = styled.div`
  @media (min-width: 1024px) {
    width: 230px;
    height: 240px;
    position: absolute;
    background-image: url(${specialKoolMan});
    background-size: cover;
    background-repeat: no-repeat;
    left: 0;
  }
`;

export const Row = styled.div`
  position: relative;
  margin: -20px 0 0 0;

  @media (min-width: 1024px) {
    margin: 0;
  }
`;

export const Title = styled.h3`
  margin: 0;
  font-family: Kool Beans;
  font-style: normal;
  font-weight: normal;
  text-align: center;
  color: #ff8484;
  font-size: 50px;
  line-height: 70px;
  ${TextStroke};

  @media (min-width: 1024px) {
    font-size: 65px;
    line-height: 70px;
  }
`;

export const Text = styled.p`
  font-family: Kool Beans;
  font-style: normal;
  font-weight: normal;
  text-align: center;
  color: #ffffff;
  font-size: 40px;
  line-height: 70px;
  margin: -30px 0 0 0;
  ${TextStroke};

  @media (min-width: 1024px) {
    margin: 0;
    font-size: 50px;
    line-height: 70px;
  }
`;

export const SeasonCard = styled.div`
  width: 100px;
  height: 100px;
  background-color: green;
  position: absolute;
`;

export const KoolFamilyImage = styled.div`
  background-image: url(${koolFamily});
  background-size: cover;
  background-repeat: no-repeat;
  width: 323px;
  height: 295px;

  @media (min-width: 1024px) {
    width: 344px;
    height: 334px;
    position: absolute;
    right: -20px;
    bottom: -60px;
  }
`;
