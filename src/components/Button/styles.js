import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 78px;
  font-size: 24px;
  font-weight: bold;
  line-height: 30px;
  color: #000000;
  border: ${({ borderColor }) =>
    `6px solid ${borderColor ? `${borderColor}` : '#ffe8c5'}`};
  background-color: #ffe8c5;
  box-shadow: 5px 5px 4px rgba(0, 0, 0, 0.5);
  border-radius: 15px;

  @media (min-width: 1024px) {
    font-size: 30px;
  }

  @media (min-width: 1200px) {
    transition: background-color 0.2s;

    &:hover {
      background-color: ${({ hoverBackground }) =>
        hoverBackground || '#00cb39'};
      cursor: pointer;
    }
  }
`;
