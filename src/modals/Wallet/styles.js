import styled from 'styled-components';

import backgroundImage from '../../images/modalBackground.svg';

export const Wrapper = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 35px;
  padding: 27px 15px;

  @media (min-width: 1024px) {
    padding: 80px 120px;
  }
`;

export const Title = styled.h3`
  margin: 0;
  font-weight: 900;
  font-size: 40px;
  line-height: 47px;
  text-align: center;
  color: #000000;
`;

export const WalletItem = styled.div`
  background: rgba(255, 242, 242, 0.94);
  border: 4px solid #000000;
  box-sizing: border-box;
  box-shadow: 0px 9px 4px rgba(0, 0, 0, 0.25);
  border-radius: 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WalletName = styled.p`
  margin: 0;
  font-weight: bold;
  color: #000000;
  margin: 14px 0;
  font-size: 30px;
  line-height: 40px;

  @media (min-width: 1024px) {
    font-size: 40px;
    line-height: 56px;
  }
`;

export const WalletIcon = styled.div`
  width: 114px;
  height: ${({ type }) => (type === 'metaMask' ? '107px' : '82px')};
  background-image: ${({ logo }) => `url(${logo})`};
  background-size: cover;
  background-repeat: no-repeat;

  @media (min-width: 1024px) {
    width: ${({ type }) => (type === 'metaMask' ? '147px' : '192px')};
    height: 138px;
  }
`;

export const Button = styled.div`
  width: 100%;
  background-color: ${({ isCancel }) => (isCancel ? '#FBF7E2' : '#b286ff')};
  border: 4px solid #000000;
  border-radius: 35px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }

  @media (min-width: 1024px) {
    height: 86px;
    border-radius: 30px;
  }
`;

export const ButtonTitle = styled.p`
  margin: 0;
  font-weight: bold;
  font-size: 33px;
  line-height: 39px;
  color: #000000;
`;
