import styled from 'styled-components';

// Iconsv
import successIcon from '../../images/success.png';
import errorIcon from '../../images/error.png';

export const Wrapper = styled.div`
  width: 75px;
  height: 101px;
  margin-bottom: 16px;
  position: relative;
`;

export const Cover = styled.div`
  width: 64px;
  height: 79px;
  background-image: ${({ background }) => `url(${background})`};
  background-repeat: no-repeat;
  background-size: contain;
  border: 2px solid #000000;
  border-radius: 15px;
  margin: 11px 0 0 0;
`;

const Block = styled.div`
  width: 34px;
  height: 34px;
  background: linear-gradient(
    180deg,
    #263f26 99.99%,
    rgba(196, 196, 196, 0) 100%
  );
  border: 1px solid #000000;
  border-radius: 10px;
  position: absolute;
`;

export const IsAvailableBlock = styled(Block)`
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AmountBlock = styled(Block)`
  bottom: 0;
  right: 0;
`;

export const Amount = styled.p`
  margin: 0;
  font-weight: bold;
  font-size: 30px;
  text-align: center;
  color: #ffffff;
  line-height: 30px;
`;

export const SuccessIcon = styled.div`
  width: 13px;
  height: 13px;
  background-image: url(${successIcon});
  background-repeat: no-repeat;
  background-size: contain;
`;

export const ErrorIcon = styled.div`
  width: 16px;
  height: 14px;
  background-image: url(${errorIcon});
  background-repeat: no-repeat;
  background-size: contain;
`;
