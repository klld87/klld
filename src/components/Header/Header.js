/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import { HashLink } from 'react-router-hash-link';

import useWindowSize from '../../hooks/useWindowSize';

import Container from '../Container';

import {
  Body,
  Row,
  LogoRow,
  Logo,
  Nav,
  NavListItem,
  KoolName,
  Burger,
} from './styles';

const Header = () => {
  const [isCollapsed, setCollapsed] = React.useState(true);

  const [windowWidth] = useWindowSize();

  const toggleNavCollapsed = () =>
    setCollapsed((prevCollapsed) => !prevCollapsed);

  const handleCloseNav = () => {
    setCollapsed(true);
  };

  React.useEffect(() => {
    setCollapsed(true);
  }, [windowWidth]);

  return (
    <>
      <Body isCollapsed={isCollapsed}>
        <Container>
          <Row>
            <LogoRow>
              <Logo />
              <KoolName textStroke={2}>KOOL</KoolName>
            </LogoRow>
            <Burger isCollapsed={isCollapsed} onClick={toggleNavCollapsed}>
              <span />
              <span />
              <span />
              <span />
            </Burger>
            <Nav isCollapsed={isCollapsed}>
              <NavListItem>
                <HashLink to="/#main" onClick={handleCloseNav}>
                  Main
                </HashLink>
              </NavListItem>
              <NavListItem>
                <HashLink to="/#section-howitworks" onClick={handleCloseNav}>
                  How it works
                </HashLink>
              </NavListItem>
              <NavListItem>
                <a
                  href="https://kool.lol/farm/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Farm $AID
                </a>
              </NavListItem>
              <NavListItem>
                <a href="#" onClick={handleCloseNav}>
                  KOOL bar
                </a>
              </NavListItem>
            </Nav>
          </Row>
        </Container>
      </Body>
    </>
  );
};

export default Header;
