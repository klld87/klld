import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 78px;
  border: ${({ borderColor }) =>
    `6px solid ${borderColor ? `${borderColor}` : '#ffe8c5'}`};
  background-color: #ffe8c5;
  box-shadow: 5px 5px 4px rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${({ hoverBackground }) => hoverBackground || '#00cb39'};
    cursor: pointer;
  }
`;

export const Title = styled.span`
  font-weight: bold;
  font-size: 30px;
  line-height: 30px;
  color: #000000;
`;
