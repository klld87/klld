import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #ffffff;
  padding: 17px 60px 85px 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 4px solid #263f26;
  border-radius: 15px;
`;

export const Title = styled.h1`
  font-weight: bold;
  font-size: 40px;
  line-height: 65px;
  color: #263f26;
  margin: 0;
`;

export const CloseIcon = styled.div``;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ItemEmoji = styled.p`
  margin: 0;
  font-size: 58px;
`;

export const DescriptionRow = styled.div`
  margin: 25px 0 32px 0;
  background: rgba(255, 255, 255, 0.55);
  border: 1px solid #000000;
  border-radius: 15px;
  padding: 7px 15px;
`;

export const Description = styled.p`
  margin: 0;
  font-size: 25px;
  line-height: 44px;
  text-align: center;
  color: #fbf7e2;
  text-shadow: -2px 0 #000000, 0 2px #000000, 2px 0 #000000, 0 -2px #000000;
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
  height: 58px;
`;

export const ButtonTitle = styled.p`
  margin: 0;
  font-size: 25px;
  line-height: 44px;
  color: #fbf7e2;
  text-shadow: -2px 0 #000000, 0 2px #000000, 2px 0 #000000, 0 -2px #000000;
`;

export const Footer = styled.div``;

export const FooterText = styled.p``;

export const FooterLink = styled.a``;
