import styled from 'styled-components';

import logo from '../../images/logo.svg';

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

export const Logo = styled.img`
  background-image: url(${logo});
  width: 66px;
  height: 66px;
`;

export const LogoRow = styled.div``;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Nav = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const NavListItem = styled.div`
  display: flex;
  flex: 1;
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