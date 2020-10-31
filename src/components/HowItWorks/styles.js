import styled, { css, keyframes } from 'styled-components';
import { TextStroke } from '../../styles/typography';
import lemon from './lemon.png';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const List = styled.ol`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0 10px 30px;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      89.69deg,
      rgba(0, 255, 71, 0.5) 13.04%,
      rgba(4, 225, 255, 0.5) 52.94%,
      rgba(189, 0, 255, 0.5) 98.47%
    );
    border: 8px solid #05a6b0;
    border-radius: 20px;
    filter: blur(40px);
    z-index: -1;
  }

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    padding-bottom: 100px;

    &:after {
      content: '';
      position: absolute;
      right: 25%;
      bottom: -50px;
      width: 124px;
      height: 166px;
      background-image: url(${lemon});
      background-repeat: no-repeat;
      background-size: contain;
      animation: ${spin} 2s linear infinite;
    }
  }
`;

export const Item = styled.li`
  display: block;
  text-align: center;
  font-family: 'Kool Beans', 'Comic Sans MS';

  @media (max-width: 1023px) {
    margin-bottom: 70px;

    &:last-of-type {
      margin-bottom: 0;
    }
  }
`;

export const Number = styled.span`
  position: relative;
  display: block;
  font-size: 100px;
  line-height: 1.2;
  color: #00ffa3;
  ${TextStroke};

  @media (max-width: 1023px) {
    display: none;
  }

  &:before {
    content: '${({ number }) => number}';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: auto;
    transform: translateX(-10px);
  }
`;

export const Text = styled.p`
  margin: 0;
  font-size: 30px;
  color: #fff;
  ${TextStroke};
  text-shadow: 4px 4px 6px rgba(0, 0, 0, 0.55);

  &:before {
    content: '${({ emoji }) => emoji}';
    display: block;
    margin-bottom: 15px;
    font-size: 107px;
    line-height: 107px;
    text-shadow: 5px 5px 4px rgba(0, 0, 0, 0.5);

    @media (max-width: 1023px) {
      ${({ emojiLabel }) =>
        emojiLabel === 'farmer' &&
        css`
          font-size: 80px;
          line-height: 80px;
        `}
    }
  }

  @media (max-width: 1023px) {
    max-width: 300px;
  }

  @media (min-width: 1024px) {
    font-size: 40px;
  }
`;
