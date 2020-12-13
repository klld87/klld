import styled, { css } from 'styled-components';
import { NavLink as RouterLink } from 'react-router-dom';

import logo from '../../images/logo.svg';
import { TextStroke } from '../../styles/typography';

export const Wrapper = styled.div`
  width: 100%;
  height: 106px;
  position: sticky;
  top: 0;
  z-index: 4;
  background: linear-gradient(
    180deg,
    #4f5a98 26.04%,
    rgba(79, 90, 152, 0) 100%
  );

  @media (max-width: 1023px) {
    ${({ isCollapsed }) =>
      !isCollapsed &&
      css`
        background: #4f5a98;
      `}
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 106px;
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

export const KoolName = styled.p`
  margin: 0;
  font-size: 40px;
  line-height: 46px;
  color: #ffffff;
  font-family: 'Kool Beans', 'Comic Sans MS';
  margin: 0 0 0 10px;
  ${TextStroke};
`;

export const Nav = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: 0;

  @media (min-width: 1024px) {
    margin: 0 0 0 50px;
    flex-direction: row;
    align-items: center;
  }
`;

export const NavLink = styled.a`
  font-weight: bold;
  font-size: 25px;
  line-height: 35px;
  text-align: center;
  color: #ffffff;
  text-shadow: -2px 0 #000000, 0 2px #000000, 2px 0 #000000, 0 -2px #000000;
  margin: 0 0 15px 0;

  @media (min-width: 1024px) {
    margin: 0 25px;
  }
`;

export const NavLinkRouter = styled(RouterLink)`
  font-weight: bold;
  font-size: 25px;
  line-height: 35px;
  text-align: center;
  color: #ffffff;
  text-shadow: -2px 0 #000000, 0 2px #000000, 2px 0 #000000, 0 -2px #000000;
  margin: 0;

  @media (min-width: 1024px) {
    margin: 0 25px;
  }
`;

export const Button = styled.div`
  width: 250px;
  height: 41px;
  border: 3px solid #ffffff;
  filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.5));
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  margin-top: 10px;

  &:hover {
    cursor: pointer;
  }
`;

export const ButtonTitle = styled.p`
  margin: 0;
  font-weight: bold;
  font-size: 25px;
  line-height: 35px;
  color: #fbf7e2;
  text-shadow: -2px 0 #000000, 0 2px #000000, 2px 0 #000000, 0 -2px #000000;
`;

export const Collapsed = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 1023px) {
    display: ${({ isCollapsed }) => (isCollapsed ? 'none' : 'block')};
    padding: 0 15px 30px;
    text-align: center;

    position: absolute;
    width: 100vw;
    top: 100%;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
    background: #4f5a98;
    z-index: 5;
  }
`;

export const Burger = styled.button.attrs(() => ({
  type: 'button',
}))`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 41px;
  height: 41px;
  outline: none;

  span {
    width: 41px;
    height: 5px;
    margin-bottom: 2px;
    background: #ffffff;
    transition: transform 0.2s;

    &:last-child {
      margin-bottom: 0;
    }
  }

  @media (min-width: 1024px) {
    display: none;
  }

  ${({ isCollapsed }) =>
    !isCollapsed &&
    css`
      span:nth-child(2),
      span:nth-child(3) {
        transform: scale(0);
      }

      span:first-child {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        margin: auto;
        transform: rotate(45deg);
      }

      span:last-child {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        margin: auto;
        transform: rotate(-45deg);
      }
    `}
`;

export const MobileBalances = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 20px 0 0 0;

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const BalanceItem = styled.p`
  margin: 0;
  flex: 1;
  text-align: center;
  text-shadow: -2px 0 #000000, 0 2px #000000, 2px 0 #000000, 0 -2px #000000;
  font-weight: bold;
  font-size: 25px;
  line-height: 35px;
  color: #ffffff;

  @media (min-width: 1024px) {
    font-size: 20px;
    line-height: 25px;
  }
`;

export const Balances = styled.div`
  margin: 20px 0;

  @media (min-width: 1024px) {
    margin: 0;
  }
`;
