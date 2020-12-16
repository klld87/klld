import styled from 'styled-components';

import slideArrow from '../../images/slideArrow.png';

export const Wrapper = styled.div`
  width: 51px;
  height: 51px;
  position: absolute;
  top: 137px;
  left: ${({ direction }) => (direction === 'left' ? '-57px' : 'inherit')};
  right: ${({ direction }) => (direction === 'left' ? 'inherit' : '-57px')};
  transform: ${({ direction }) =>
    `rotate(${direction === 'left' ? 180 : 0}deg)`};
  background-image: url(${slideArrow});
  background-repeat: no-repeat;
  background-size: contain;
  z-index: 2;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;
