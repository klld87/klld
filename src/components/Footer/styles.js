import styled from 'styled-components';
import { TextStroke } from '../../styles/typography';

export const StyledFooter = styled.footer`
  padding: 20px 0;
  font-family: 'Kool Beans';
  text-align: center;

  @media (min-width: 1024px) {
    padding: 50px 0;
  }
`;

export const Link = styled.a`
  padding: 10px 5px;
  display: inline-block;
  font-size: 30px;
  color: #fff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  ${TextStroke};

  @media (min-width: 1200px) {
    font-size: 40px;
    transition: text-shadow 0.3s;

    &:hover {
      text-shadow: 0px 2px 15px rgba(0, 0, 0, 0.7);
    }
  }
`;
