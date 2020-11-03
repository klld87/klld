import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #4f5a98;
`;

export const BalancesList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 18px 0;

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

export const Button = styled.div`
  margin: 10px 20px;
  height: 50px;
  background-color: red;
  background: #fbf7e2;
  border: 6px solid #05a6b0;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }
`;

export const ButtonTitle = styled.p`
  margin: 0;
  font-weight: bold;
  font-size: 25px;
  line-height: 35px;
  color: #fbf7e2;
  text-shadow: -2px 0 #000000, 0 2px #000000, 2px 0 #000000, 0 -2px #000000;
`;
