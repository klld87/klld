import * as React from 'react';

import useWindowSize from '../../hooks/useWindowSize';

import Container from '../Container';

import {
  Body,
  Row,
  LogoRow,
  Logo,
  Nav,
  NavListItem,
  NavListTitle,
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
                <NavListTitle onClick={handleCloseNav}>Main</NavListTitle>
              </NavListItem>
              <NavListItem>
                <NavListTitle
                  href="#section-howitworks"
                  onClick={handleCloseNav}
                >
                  How it works
                </NavListTitle>
              </NavListItem>
              <NavListItem>
                <NavListTitle href="https://kool.lol/farm/">
                  Farm $AID
                </NavListTitle>
              </NavListItem>
              <NavListItem>
                <NavListTitle onClick={handleCloseNav}>KOOL bar</NavListTitle>
              </NavListItem>
            </Nav>
          </Row>
        </Container>
      </Body>
    </>
  );
};

export default Header;
