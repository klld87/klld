import styled from 'styled-components';

import backgroundImage from '../../images/modalBackground.png';
import closeModalIcon from '../../images/closeModalIcon.png';

export const Wrapper = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-repeat: repeat;
  border-radius: 35px;
  padding: 50px 25px 40px 25px;
  position: relative;

  @media (min-width: 1024px) {
    padding: 27px 15px;
  }
`;

export const Title = styled.h1`
  font-weight: bold;
  font-size: 28px;
  line-height: 28px;
  color: #263f26;
  text-align: center;
  margin: 0 0 20px 0;

  @media (min-width: 1024px) {
    font-size: 55px;
    line-height: 77px;
    margin: 0;
  }
`;

export const CloseIcon = styled.div`
  background-image: url(${closeModalIcon});
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  right: 30px;
  top: 30px;
  width: 20px;
  height: 28px;

  &:hover {
    cursor: pointer;
  }

  @media (min-width: 1024px) {
    width: 34px;
    height: 38px;
  }
`;

export const Body = styled.div``;

export const BalanceBlock = styled.div``;

export const BalanceValue = styled.h3`
  font-family: 'Kool Beans';
  font-size: 50px;
  line-height: 57px;
  text-align: center;
  color: #263f26;
  margin: 0;

  @media (min-width: 1024px) {
    font-size: 80px;
    line-height: 80px;
    margin: 0 0 -15px 0;
  }
`;

export const BalanceType = styled.p`
  margin: 0;
  font-family: 'Kool Beans';
  font-size: 30px;
  line-height: 34px;
  text-align: center;
  color: #263f26;

  @media (min-width: 1024px) {
    font-size: 40px;
    line-height: 40px;
  }
`;

export const HarvestBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  border: 4px solid #263f26;
  border-radius: 15px;
  margin: 14px auto 40px auto;
  width: 100%;
  padding: 20px 0;

  @media (min-width: 1024px) {
    width: 566px;
    padding: 0 0 20px 0;
  }
`;

export const Button = styled.div`
  height: 49px;
  border: 4px solid #000000;
  background-color: ${({ isCancel }) => (isCancel ? '#FBF7E2' : '#263f26')};
  border-radius: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${({ isCancel }) => (isCancel ? '0 auto' : '0 0 14px 0')};
  width: 100%;

  &:hover {
    cursor: pointer;
  }

  @media (min-width: 1024px) {
    height: 60px;
    width: ${({ isCancel }) => (isCancel ? '444px' : '100%;')};
  }
`;

export const ButtonTitle = styled.p`
  margin: 0;
  font-weight: bold;
  font-size: 20px;
  line-height: 28px;
  color: ${({ isCancel }) => (isCancel ? '#000000' : '#fbf7e2')};

  @media (min-width: 1024px) {
    font-size: 30px;
    line-height: 30px;
  }
`;

export const Footer = styled.div`
  margin: 30px 0 0 0;

  @media (min-width: 1024px) {
    margin: 40px 0 0 0;
  }
`;

export const Link = styled.a``;
