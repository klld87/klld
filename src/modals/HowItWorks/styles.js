import styled from 'styled-components';

import backgroundImage from '../../images/modalBackground.png';
import closeModalIcon from '../../images/closeModalIcon.png';

export const Wrapper = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-repeat: repeat;
  padding: 20px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 4px solid #263f26;
  border-radius: 15px;

  @media (min-width: 1024px) {
    padding: 17px 60px 20px 60px;
  }
`;

export const Title = styled.h1`
  font-weight: bold;
  color: #263f26;
  margin: 0;
  font-size: 20px;
  line-height: 65px;

  @media (min-width: 1024px) {
    font-size: 40px;
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

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1024px) {
    height: 100%;
  }
`;

export const ItemEmoji = styled.p`
  margin: 0;
  font-size: 58px;
`;

export const DescriptionRow = styled.div`
  margin: 23px 0 12px 0;
  background: rgba(255, 255, 255, 0.55);
  border: 1px solid #000000;
  border-radius: 15px;
  padding: 15px;

  @media (min-width: 1024px) {
    padding: 7px 15px;
    margin: 25px 0 32px 0;
    height: 100%;
    display: flex;
    align-items: center;
  }
`;

export const Description = styled.p`
  margin: 0;
  font-size: 15px;
  line-height: 20px;
  text-align: center;
  color: #000000;

  @media (min-width: 1024px) {
    font-size: 25px;
    line-height: 35px;
  }
`;

export const Button = styled.div`
  width: 100%;
  background: #263f26;
  border: 1px solid #000000;
  box-shadow: 5px 5px 5px rgba(255, 0, 0, 0.5);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 34px;

  @media (min-width: 1024px) {
    height: 58px;
  }
`;

export const ButtonTitle = styled.p`
  margin: 0;
  line-height: 44px;
  font-size: 20px;
  color: #fbf7e2;
  text-shadow: -2px 0 #000000, 0 2px #000000, 2px 0 #000000, 0 -2px #000000;

  @media (min-width: 1024px) {
    font-size: 25px;
  }
`;

export const Footer = styled.div`
  margin: 35px 0 0 0;

  @media (min-width: 1024px) {
    margin: 10px 25px 0 25px;
  }
`;

export const FooterText = styled.p`
  margin: 0;
  font-size: 15px;
  line-height: 20px;

  @media (min-width: 1024px) {
    font-size: 25px;
    line-height: 65px;
  }
`;

export const FooterLink = styled.a`
  text-decoration: underline;
`;
