import styled from 'styled-components';

import Button from '../Button';
import UnlockButton from '../UnlockButton';
import { TextStroke } from '../../styles/typography';
import Icons from '../Icons';

import season1 from './season1.png';

export const Wrapper = styled.div`
  position: relative;
  @media (min-width: 1024px) {
    margin: 73px 0 0 0;
  }
`;

export const Title = styled.h1`
  position: relative;
  margin: 25px 0 20px;
  font-family: 'Kool Beans';
  font-size: 60px;
  line-height: 55px;
  font-weight: 400;
  color: #ffffff;
  ${TextStroke};
  text-shadow: 5px 5px 2px #0477b1;

  &:before {
    content: '';
    position: absolute;
    right: 0;
    top: -20px;
    width: 108px;
    height: 125px;
    background-image: url(${season1});
    background-size: contain;
    background-repeat: no-repeat;
  }

  @media (min-width: 768px) {
    font-size: 75px;
  }
`;

export const TitleText = styled.span`
  position: relative;
`;

export const KoolMan = styled.div`
  @media (max-width: 1023px) {
    width: 100vw;
    position: relative;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;

    img {
      width: 100%;
    }
  }

  @media (min-width: 1024px) {
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 50%;
    }
  }

  @media (min-width: 1100px) {
    img {
      width: 60%;
    }
  }
`;

export const StyledUnlockButton = styled(UnlockButton)`
  position: relative;
  top: 20px;
  z-index: 2;

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const Text = styled.p`
  margin: 0 0 60px;
  font-family: 'Kool Beans';
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  color: #fff;
  ${TextStroke};
  text-shadow: 4px 4px 6px rgba(0, 0, 0, 0.55);

  @media (min-width: 768px) {
    font-size: 30px;
  }

  @media (min-width: 1024px) {
    margin-bottom: 20px;
  }
`;

export const TextLB = styled.span`
  display: block;
  position: relative;
  background: -webkit-linear-gradient(#fff 40%, #ff1b1b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: none;

  &:after {
    background: none;
    content: attr(data-text);
    left: 0;
    position: absolute;
    text-shadow: 4px 4px 6px rgba(0, 0, 0, 0.55);
    z-index: -1;
  }
`;

export const ButtonList = styled.section``;

export const StyledButton = styled(Button)`
  margin-bottom: 25px;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 1023px) {
    background-color: #fbf7e2;
    border-color: #005055;
  }
`;

export const UniIcon = styled(Icons.Uniswap)`
  position: relative;
  left: -40px;

  & + span {
    margin-left: -20px;
  }

  @media (min-width: 480px) {
    left: -50px;
  }
`;

export const Content = styled.div`
  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto auto;
    grid-template-areas:
      'kool-man kool-title'
      'kool-man kool-text'
      'kool-man kool-buttons';

    ${Title} {
      grid-area: kool-title;
    }

    ${KoolMan} {
      grid-area: kool-man;
    }

    ${Text} {
      grid-area: kool-text;
    }

    ${ButtonList} {
      grid-area: kool-buttons;
    }
  }

  @media (min-width: 1100px) {
    grid-template-columns: 60% 40%;
  }
`;
