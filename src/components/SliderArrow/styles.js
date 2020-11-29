import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 50px;
  height: 50px;
  background-color: blue;
  position: absolute;
  top: 137px;
  left: ${({ direction }) => (direction === 'left' ? '-78px' : '0')};
  right: ${({ direction }) => (direction === 'left' ? '0' : '-51px')};
  z-index: 2;
`;
