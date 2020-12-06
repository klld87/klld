import styled from 'styled-components';
import { TextStroke } from '../../styles/typography';

import koolMixingMan from '../../images/koolMixingMan.png';
import koolMixingMan2 from '../../images/koolMixingMan2.png';

export const Wrapper = styled.div`
  margin: 55px 0 45px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1024px) {
    flex-direction: row;
    position: relative;
  }
`;

export const KoolMixingMan = styled.div`
  width: 280px;
  height: 280px;
  background-image: url(${koolMixingMan});
  background-size: contain;
  background-repeat: no-repeat;

  @media (min-width: 1024px) {
    position: absolute;
    width: 255px;
    height: 255px;
    z-index: 2;
    bottom: -15px;
  }
`;

export const Row = styled.div`
  background-color: #ffe100;
  border: 3px solid #263f26;
  box-shadow: 5px 5px 4px rgba(0, 0, 0, 0.5);
  margin: 24px 0 0 0;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 30px;

  @media (min-width: 1024px) {
    width: 100%;
    padding: 14px 0;
  }
`;

export const Title = styled.h1`
  margin: 0;
  font-family: 'Kool Beans';
  font-size: 50px;
  line-height: 70px;
  color: #ffe8c5;
  text-align: center;
  position: absolute;
  top: -120px;
  font-weight: 400;
  ${TextStroke};

  @media (min-width: 1024px) {
    position: relative;
    top: 0;
    font-size: 65px;
    line-height: 70px;
    color: #ff8484;
  }
`;

export const Text = styled.h3`
  margin: 0;
  font-family: 'Kool Beans';
  font-size: 40px;
  line-height: 44px;
  text-align: center;
  color: #fbf7e2;
  ${TextStroke};
  text-shadow: 4px 4px 6px rgba(0, 0, 0, 0.55);
`;

export const KoolMan = styled.div`
  @media (min-width: 1024px) {
    width: 275px;
    height: 267px;
    position: absolute;
    background-image: url(${koolMixingMan2});
    background-size: cover;
    background-repeat: no-repeat;
    right: 0;
    bottom: -15px;
  }
`;
