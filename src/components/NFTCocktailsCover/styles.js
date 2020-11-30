import styled from 'styled-components';
import { TextStroke } from '../../styles/typography';

import koolBarLogo from '../../images/koolBarLogo.png';

export const Wrapper = styled.div``;

export const Image = styled.div`
  width: 300px;
  height: 300px;
  background-image: url(${koolBarLogo});
  background-size: contain;
  background-repeat: no-repeat;
`;

export const Title = styled.h1`
  font-family: Kool Beans;
  font-style: normal;
  font-weight: normal;
  font-size: 60px;
  line-height: 40px;
  color: #ffffff;
  text-shadow: 5px 5px 2px #4f5a98;
  ${TextStroke};
  margin: 30px 0 0 0;

  @media (min-width: 1024px) {
    font-size: 75px;
    line-height: 65px;
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
    margin: 33px 0 0 0;
  }
`;

export const Button = styled.div`
  background: #ffe8c5;
  border: 3px solid #263f26;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  margin: 20px 0 0 0;
  height: 47px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 1024px) {
    margin: 0;
    width: 250px;

    &:nth-child(1) {
      margin: 0 40px 0 0;
    }

    &:nth-child(3) {
      display: none;
    }
  }
`;

export const ButtonTitle = styled.p`
  margin: 0;
  font-size: 23px;
`;

export const SeasonItem = styled.div`
  width: 80px;
  height: 80px;
  background-image: ${({ image }) => `url(${image})`};
  background-size: cover;
  background-repeat: no-repeat;

  @media (min-width: 1024px) {
    width: 110px;
    height: 110px;
  }
`;
