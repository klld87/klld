import styled from 'styled-components';

import logo from '../../images/logo.svg';
import { TextStroke } from '../../styles/typography';

export const Wrapper = styled.div`
  width: 100%;
  height: 106px;
  background: linear-gradient(
    180deg,
    #4f5a98 26.04%,
    rgba(79, 90, 152, 0) 100%
  );
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
  flex-direction: row;
  flex: 1;
  margin: 0 0 0 50px;
`;

export const NavLink = styled.a`
  margin: 0 25px;
  font-weight: bold;
  font-size: 25px;
  line-height: 35px;
  text-align: center;
  color: #ffffff;
  text-shadow: -2px 0 #000000, 0 2px #000000, 2px 0 #000000, 0 -2px #000000;
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
`;
