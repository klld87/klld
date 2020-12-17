import styled from 'styled-components';

const getBackground = (type) => {
  if (type === 'openSea') {
    return 'linear-gradient(176.22deg, #00C2FF 3.1%, rgba(0, 194, 255, 0) 83.97%)';
  } else if (type === 'unlockWallet' || type === 'insufficientFunds') {
    return '#EC010E';
  } else if (type === 'getNFT') {
    return '#FDD90F';
  } else if (type === 'getOnOpenSea') {
    return 'linear-gradient(180deg, #01C2FF 0%, #65C796 48.44%, #FDD90F 100%)';
  } else if (type === 'NFTzMissing') {
    return '#EC010E';
  } else if (type === 'free') {
    return 'linear-gradient(180deg, #CCCBC6 0%, rgba(204, 203, 198, 0) 100%)';
  } else if (type === 'approve') {
    return 'linear-gradient(180deg, #1EFF93 0%, rgba(30, 255, 147, 0) 100%)';
  } else if (type === 'getNFT2') {
    return 'linear-gradient(180deg, #FDD90F 0%, rgba(253, 217, 15, 0) 100%)';
  }
  return 'linear-gradient(132.64deg, #ffe601 9.46%, #56ee46 41.71%, #019aca 73.97%)';
};

export const Wrapper = styled.div`
  background: ${({ type }) => `${getBackground(type)}`};
  border-radius: 24px;
  height: 58px;
  padding: 9px;
  width: 100%;

  &:hover {
    cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  }

  @media (min-width: 1024px) {
    width: auto;
  }
`;

export const LinkWrapper = styled.a`
  background: ${({ type }) => `${getBackground(type)}`};
  border-radius: 24px;
  height: 58px;
  padding: 9px;
  width: 100%;

  &:hover {
    cursor: pointer;
  }

  @media (min-width: 1024px) {
    width: auto;
  }
`;

export const Button = styled.div`
  background-color: #263f26;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;

  @media (min-width: 1024px) {
    width: ${({ type, desktopFull }) =>
      ['mix', 'NFTzMissing'].indexOf(type) !== -1 || desktopFull
        ? '100%'
        : '215px'};
  }
`;

export const ButtonTitle = styled.p`
  font-size: 20px;
  color: #ffffff;
  margin: 0;
`;
