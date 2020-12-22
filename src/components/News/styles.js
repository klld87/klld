import styled from 'styled-components';

import { SectionHeading } from '../../styles/typography';

import cherry from './cherry.png';
import fruits from '../../images/fruits-bg.jpg';

export const Heading = styled(SectionHeading)`
  @media (min-width: 1024px) {
    &:after {
      content: '';
      display: inline-block;
      vertical-align: middle;
      width: 138px;
      height: 133px;
      margin-left: 10px;
      background-image: url(${cherry});
      background-repeat: no-repeat;
      background-size: contain;
    }
  }
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 25px;
  margin: 0 0 35px;
  padding: 0;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 30px;
    margin-bottom: 95px;
  }
`;

export const Item = styled.li`
  display: block;
`;

export const ItemLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  padding: 10px;
  font-size: 20px;
  font-weight: 700;
  color: #000;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.8) 0%,
      rgba(255, 255, 255, 0.8) 100%
    ),
    url(${fruits});
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
  border-radius: 15px;
  box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.85);

  @media (max-width: 1023px) {
    max-width: 300px;
    margin: 0 auto;
  }

  @media (min-width: 1024px) {
    height: 107px;
    font-size: 35px;
  }

  @media (min-width: 1200px) {
    transition: all 0.3s;

    &:hover {
      transform: scale(1.05);
      box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.85);
    }
  }
`;
