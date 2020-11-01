import styled from 'styled-components';
import Button from '../Button';
import { TextStroke } from '../../styles/typography';

export const StyledButton = styled(Button)`
  & {
    max-width: 320px;
    height: 50px;
    font-size: 25px;
    color: #fbf7e2;
    background: #fbf7e2;
    border-radius: 15px;
    ${TextStroke};
    box-shadow: none;
  }
`;
