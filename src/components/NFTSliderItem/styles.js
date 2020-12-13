import styled from 'styled-components';

import loadingFruit from '../../images/fruits/loading.png';

export const Wrapper = styled.div``;

export const Cover = styled.div`
  width: 263px;
  height: 324px;
  border: 1px solid #000000;
  border-radius: 15px;
  background-image: ${({ background }) => `url(${background})`};
  background-size: contain;
  background-repeat: no-repeat;
`;

export const CoverLoading = styled.div`
  width: 263px;
  height: 324px;
  border: 1px solid #000000;
  border-radius: 15px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Actions = styled.div``;

export const Button = styled.div`
  margin: 15px 0 0 0;
  width: 263px;
  height: 86px;
  background: #fbf7e2;
  border: 4px solid #000000;
  border-radius: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonTitle = styled.p`
  margin: 0;
  font-size: 30px;
  line-height: 42px;
  text-align: center;
  color: #a9a9a9;
`;

export const LoadingImage = styled.div`
  width: 144px;
  height: 121px;
  background-image: url(${loadingFruit});
  background-size: contain;
  background-repeat: no-repeat;
  margin: 40px 0 50px 0;
`;

export const LoadingText = styled.h3`
  margin: 0;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 42px;
  text-align: center;
  color: #000000;
  text-transform: uppercase;
`;

export const CoverRow = styled.div`
  position: relative;
  width: 263px;
`;

export const BalanceBlock = styled.div`
  position: absolute;
  width: 66px;
  height: 66px;
  background: linear-gradient(
    180deg,
    #263f26 99.99%,
    rgba(196, 196, 196, 0) 100%
  );
  border: 1px solid #000000;
  border-radius: 10px;
  bottom: 16px;
  right: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BalanceValue = styled.p`
  margin: 0;
  font-weight: bold;
  font-size: 30px;
  text-align: center;
  color: #ffffff;
`;
