import styled from 'styled-components';

import image from '../../images/scrollToTop.png';

export const Wrapper = styled.div`
  position: fixed;
  bottom: 20px;
  right: 45px;
  z-index: 5;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Button = styled.div`
  width: 68px;
  height: 68px;
  border-radius: 34px;
  filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.5));
  background-image: url(${image});
  background-size: contain;
  background-repeat: no-repeat;

  &:hover {
    cursor: pointer;
  }
`;

export const Label = styled.p`
  margin: 5px 0 0 0;
  font-weight: bold;
  font-size: 15px;
  color: #29486b;
  text-transform: uppercase;
`;
