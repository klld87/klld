import * as React from 'react';

import Container from '../Container';
import WalletModal from '../../modals/Wallet';
import MyAccountModal from '../../modals/MyAccount';

import {
  Body,
  Row,
  Top,
  TopRow,
  Button,
  ButtonTitle,
  StatsList,
  StatsItem,
  StatsItemTitle,
  LogoRow,
  Logo,
  Nav,
  NavListItem,
  NavListTitle,
  KoolName,
  Burger,
  FixedBodyStyle,
} from './styles';

const Header = (props) => {
  const { isUnlocked = true, koolBalance = '0', aidBalance = '0' } = props;
  const [isCollapsed, setCollapsed] = React.useState(true);
  const isWalletUnlocked = true; // Fix me

  const [open, setOpen] = React.useState(false);
  const [isAccountModalOpened, setAccountModalOpened] = React.useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const toggleAccountModal = () => {
    setAccountModalOpened(!isAccountModalOpened);
  };

  const toggleNavCollapsed = () =>
    setCollapsed((prevCollapsed) => !prevCollapsed);

  const handleCloseNav = () => {
    setCollapsed(true);
  };

  return (
    <>
      <Top>
        <Container>
          <TopRow>
            {isUnlocked ? (
              <StatsList>
                <StatsItem>
                  <StatsItemTitle>
                    {`${koolBalance || ''} $KOOL`}
                  </StatsItemTitle>
                </StatsItem>
                <StatsItem>
                  <StatsItemTitle>{`${aidBalance || ''} $AID`}</StatsItemTitle>
                </StatsItem>
              </StatsList>
            ) : null}
            <Button onClick={onOpenModal}>
              <ButtonTitle>unlock wallet</ButtonTitle>
            </Button>
            <Button onClick={toggleAccountModal}>
              <ButtonTitle>my wallet</ButtonTitle>
            </Button>
          </TopRow>
        </Container>
      </Top>
      <WalletModal open={open} onCloseModal={onCloseModal} />
      <MyAccountModal
        open={isAccountModalOpened}
        onCloseModal={toggleAccountModal}
        aidBalance={100}
        koolBalance={100}
      />
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
