import styled from 'styled-components';

import UnlockButton from '../UnlockButton';

export const Wrapper = styled.div`
  background-color: #4f5a98;

  @media (max-width: 1023px) {
    display: ${({ isWalletUnlocked }) => (isWalletUnlocked ? 'block' : 'none')};
  }
`;

export const BalancesList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (min-width: 1024px) {
    justify-content: flex-end;
  }
`;

export const WalletBalance = styled.p`
  margin: 0;
  flex: 1;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  line-height: 30px;
  text-shadow: -2px 0 #000000, 0 2px #000000, 2px 0 #000000, 0 -2px #000000;
  color: #ffffff;

  @media (min-width: 1024px) {
    flex: none;
    margin: 0 50px;
  }
`;

export const Button = styled(UnlockButton)`
  @media (max-width: 1023px) {
    display: none;
  }
`;
