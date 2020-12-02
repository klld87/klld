import styled from 'styled-components';

import backgroundImage from '../../images/modalBackground.png';

export const Wrapper = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-repeat: repeat;
  border-radius: 35px;
  padding: 27px 15px;
  position: relative;

  @media (min-width: 1024px) {
    padding: 45px 100px 60px 100px;
  }
`;

export const Title = styled.h1`
  margin: 0;
  font-weight: bold;
  font-size: 55px;
  line-height: 77px;
  color: #263f26;
  text-align: center;
`;

export const CloseIcon = styled.div`
  width: 50px;
  height: 50px;
  background-color: red;
  position: absolute;
  top: 65px;
  right: 80px;
`;

export const Body = styled.div``;

export const BalanceBlock = styled.div``;

export const BalanceValue = styled.h3`
  font-family: 'Kool Beans';
  font-size: 100px;
  line-height: 115px;
  text-align: center;
  color: #263f26;
  margin: 0 0 -30px 0;
`;

export const BalanceType = styled.p`
  margin: 0;
  font-family: 'Kool Beans';
  font-size: 50px;
  line-height: 57px;
  text-align: center;
  color: #263f26;
`;

export const HarvestBlock = styled.div`
  width: 566px;
  display: flex;
  flex-direction: column;
  align-self: center;
  border: 4px solid #263f26;
  border-radius: 15px;
  margin: 14px auto 40px auto;
`;

export const Button = styled.div`
  height: 86px;
  background: #263f26;
  border: 4px solid #000000;
  border-radius: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0 14px 0;
`;

export const ButtonTitle = styled.p`
  margin: 0;
  font-weight: bold;
  font-size: 40px;
  line-height: 56px;
  color: #fbf7e2;
`;

export const Footer = styled.div`
  margin: 60px 0 0 0;
`;
