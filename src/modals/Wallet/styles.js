import styled from 'styled-components';

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

export const WalletIcon = styled.div`
  width: 114px;
  height: 107px;
  background-color: red;
  margin: 0 0 17px 0;
`;

export const Button = styled.button`
  width: 100%;
  background: #b286ff;
  border: 4px solid #000000;
  border-radius: 35px;
`;

export const ButtonTitle = styled.p`
  margin: 0;
  font-weight: bold;
  font-size: 33px;
  line-height: 39px;
  color: #000000;
`;
