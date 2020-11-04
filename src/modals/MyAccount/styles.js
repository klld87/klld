import styled from 'styled-components';

import backgroundImage from '../../images/modalBackground.svg';

export const Wrapper = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 35px;
  padding: 27px 15px;

  @media (min-width: 1024px) {
    padding: 70px 140px;
  }
`;

export const Title = styled.h1`
  margin: 0 0 30px 0;
  text-align: center;
  font-weight: bold;
  font-size: 40px;
  line-height: 56px;
  color: #000000;

  @media (min-width: 1024px) {
    font-size: 55px;
    line-height: 77px;
  }
`;

export const Wallet = styled.div``;

export const WalletBalance = styled.h3`
  margin: 0 0 -20px 0;
  text-align: center;
  color: #000000;
  font-family: 'Kool Beans', 'Comic Sans MS';
  font-size: 50px;
  line-height: 57px;
  margin-bottom: -20px;
  font-weight: normal;

  @media (min-width: 1024px) {
    font-size: 100px;
    line-height: 115px;
  }
`;

export const WalletLabel = styled.h3`
  margin: 0;
  text-align: center;
  color: #0d0c0c;
  font-family: 'Kool Beans', 'Comic Sans MS';
  font-size: 50px;
  line-height: 57px;
  font-weight: normal;
`;

export const Actions = styled.div`
  margin: 30px 0 0 0;

  @media (min-width: 1024px) {
    margin: 130px 0 0 0;
  }
`;

export const Button = styled.div`
  height: 50px;
  background-color: ${({ isCancel }) => (isCancel ? '#FBF7E2' : '#b286ff')};
  border: 4px solid #000000;
  box-sizing: border-box;
  border-radius: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0 40px;

  @media (min-width: 1024px) {
    width: 440px;
    height: 86px;
    margin: 0;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const ButtonTitle = styled.p`
  display: block;
  margin: 0;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 30px;
  color: #000000;

  @media (min-width: 1024px) {
    font-size: 40px;
    line-height: 50px;
  }
`;
