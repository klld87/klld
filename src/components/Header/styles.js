import styled from 'styled-components';

import logo from '../../images/logo.svg';
import { TextStroke } from '../../styles/typography';

export const Wrapper = styled.div``;

export const Top = styled.div`
  background-color: #4f5a98;
`;

export const Body = styled.div`
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.67) 0%,
    rgba(0, 16, 156, 0.621146) 0.01%,
    rgba(89, 106, 255, 0.1608) 74.48%
  );
`;

export const Button = styled.button``;

export const ButtonTitle = styled.span``;

export const StatsList = styled.div`
  flex-direction: row;
  display: flex;
  padding: 20px 0;
`;

export const StatsItem = styled.div`
  display: flex;
  flex: 1;
`;

export const StatsItemTitle = styled.p`
  margin: 0;
  width: 100%;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  line-height: 25px;
  color: #ffffff;
  text-shadow: -2px 0 #000000, 0 2px #000000, 2px 0 #000000, 0 -2px #000000;

  @media (min-width: 400px) {
    font-size: 25px;
    line-height: 35px;
  }
`;

export const Logo = styled.div`
  background-image: url(${logo});
  width: 66px;
  height: 66px;
`;

export const LogoRow = styled.div`
  flex: 1 0 auto;
  margin-right: auto;
  flex-direction: row;
  display: flex;
  align-items: center;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: space-between;
`;

export const Nav = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const NavListItem = styled.div`
  display: flex;
`;

export const NavListTitle = styled.a`
  margin: 0;
  font-weight: bold;
  font-size: 25px;
  line-height: 35px;
  text-align: center;
  color: #ffffff;
  text-shadow: -2px 0 #000000, 0 2px #000000, 2px 0 #000000, 0 -2px #000000;
`;

export const TopRow = styled.div``;

export const KoolName = styled.p`
  margin: 0;
  font-size: 40px;
  line-height: 46px;
  color: #ffffff;
  font-family: 'Kool Beans', 'Comic Sans MS';
  margin: 0 0 0 10px;
  ${TextStroke};
`;
