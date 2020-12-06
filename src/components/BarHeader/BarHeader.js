import * as React from 'react';
import { HashLink } from 'react-router-hash-link';

// Components
import Container from '../Container';

// Hooks
import useWindowSize from '../../hooks/useWindowSize';

// Styles
import {
  Wrapper,
  Row,
  LogoRow,
  KoolName,
  Logo,
  Collapsed,
  Nav,
  NavLink,
  NavLinkRouter,
  Button,
  ButtonTitle,
  Burger,
  MobileBalances,
  BalanceItem,
  Balances,
} from './styles';

const BarHeader = (props) => {
  const {
    onOpenNFTWalletModal,
    unlockWallet,
    isWalletUnlocked,
    koolBalance,
    aidBalance,
  } = props;

  const [isCollapsed, setIsCollapsed] = React.useState(true);
  const [windowWidth] = useWindowSize();

  const toggleNavCollapsed = () => {
    setIsCollapsed((prevCollapsed) => !prevCollapsed);
  };

  const handleCloseNav = () => {
    setIsCollapsed(true);
  };

  React.useEffect(() => {
    setIsCollapsed(true);
  }, [windowWidth]);

  return (
    <Wrapper isCollapsed={isCollapsed}>
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
          <Collapsed isCollapsed={isCollapsed}>
            <Nav>
              <NavLinkRouter to="/">Main page</NavLinkRouter>
              <HashLink to="/bar#special" onClick={handleCloseNav}>
                <NavLink>Special</NavLink>
              </HashLink>
              <HashLink to="/bar#mixing" onClick={handleCloseNav}>
                <NavLink>KOOL Mixing</NavLink>
              </HashLink>
              {isWalletUnlocked ? (
                <Balances>
                  <BalanceItem>
                    {Number(koolBalance).toFixed(2)} $KOOL
                  </BalanceItem>
                  <BalanceItem>
                    {Number(aidBalance).toFixed(2)} $AID
                  </BalanceItem>
                </Balances>
              ) : null}
            </Nav>
            {isWalletUnlocked ? (
              <Button onClick={onOpenNFTWalletModal}>
                <ButtonTitle>My bar</ButtonTitle>
              </Button>
            ) : (
              <Button onClick={unlockWallet}>
                <ButtonTitle>unlock wallet</ButtonTitle>
              </Button>
            )}
            {isWalletUnlocked ? (
              <MobileBalances>
                <BalanceItem>
                  {Number(koolBalance).toFixed(2)} $KOOL
                </BalanceItem>
                <BalanceItem>{Number(aidBalance).toFixed(2)} $AID</BalanceItem>
              </MobileBalances>
            ) : null}
          </Collapsed>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default BarHeader;
