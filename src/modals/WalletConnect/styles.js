import styled from 'styled-components';

import logo from '../../images/wallets/walletConnect.svg';
import closeModalIcon from '../../images/closeModalIcon.png';

export const Wrapper = styled.div`
  background: #fbf7e2;
  border: 4px solid #000000;
  box-shadow: 0px 9px 4px rgba(0, 0, 0, 0.25);
  border-radius: 35px;
  padding: 20px 130px;
  position: relative;
`;

export const CloseIcon = styled.div`
  width: 34px;
  height: 38px;
  background-image: url(${closeModalIcon});
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  right: 30px;
  top: 20px;

  &:hover {
    cursor: pointer;
  }
`;

export const Title = styled.p`
  font-weight: bold;
  font-size: 20px;
  line-height: 28px;
  text-align: center;
  color: #000000;
  margin: 0 0 10px 0;
`;

export const WalletConenctLogo = styled.div`
  width: 192px;
  height: 138px;
  background-image: url(${logo});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const WalletConenctName = styled.p`
  margin: 14px 0 0 0;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 56px;
  color: #000000;
`;
