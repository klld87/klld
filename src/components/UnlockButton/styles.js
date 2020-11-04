import styled from 'styled-components';

export const StyledButton = styled.button`
  padding-bottom: 4px;
  width: 100%;
  max-width: 100%;
  height: 50px;
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

export const Title = styled.span`
  font-weight: bold;
  font-size: 25px;
  line-height: 35px;
  color: #fbf7e2;
  text-shadow: -2px 0 #000000, 0 2px #000000, 2px 0 #000000, 0 -2px #000000;
`;
