import styled from 'styled-components';

const getBackground = (type) => {
  if (type === 'openSea') {
    return '176.22deg, #00C2FF 3.1%, rgba(0, 194, 255, 0) 83.97%';
  }
  return '132.64deg, #ffe601 9.46%, #56ee46 41.71%, #019aca 73.97%';
};

export const Wrapper = styled.div`
  background: ${({ type }) => `linear-gradient(${getBackground(type)})`};
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
  background: ${({ type }) => `linear-gradient(${getBackground(type)})`};
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
    width: ${({ type }) => (type === 'mix' ? '100%' : '215px')};
  }
`;

export const ButtonTitle = styled.p`
  font-size: 20px;
  color: #ffffff;
  margin: 0;
`;
