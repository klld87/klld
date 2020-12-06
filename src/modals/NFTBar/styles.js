import styled from 'styled-components';

import backgroundImage from '../../images/modalBackground.png';
import closeModalIcon from '../../images/closeModalIcon.png';

export const Wrapper = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-repeat: repeat;
  border-radius: 35px;
  padding: 27px 15px;
  position: relative;

  @media (min-width: 1024px) {
    padding: 43px 140px 70px 140px;
  }
`;

export const Title = styled.h1`
  margin: 0;
  text-align: center;
  font-weight: bold;
  font-size: 55px;
  line-height: 77px;
  color: #000000;
`;

export const CloseIcon = styled.div`
  width: 32px;
  height: 32px;
  background-image: url(${closeModalIcon});
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  top: 25px;
  right: 25px;

  &:hover {
    cursor: pointer;
  }
`;

export const Carousel = styled.div`
  margin: 72px 0;
`;

export const CancelButton = styled.div`
  width: 444px;
  height: 86px;
  background: #fbf7e2;
  border: 4px solid #000000;
  border-radius: 35px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;

export const CancelButtonTitle = styled.p`
  margin: 0;
  font-weight: bold;
  font-size: 40px;
  line-height: 56px;
  text-align: center;
  color: #000000;
`;
