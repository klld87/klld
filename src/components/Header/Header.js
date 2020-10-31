import * as React from 'react';

import Container from '../Container';
import WalletModal from '../../modals/Wallet';

import {
  Wrapper,
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
} from './styles';

const Header = () => {
  const [isCollapsed, setCollapsed] = React.useState(false);
  const isWalletUnlocked = true; // Fix me

  const [open, setOpen] = React.useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <Wrapper>
      <Top>
        <Container>
          <TopRow>
            <StatsList>
              <StatsItem>
                <StatsItemTitle>0.000 $KOOL</StatsItemTitle>
              </StatsItem>
              <StatsItem>
                <StatsItemTitle>0.000 $AID</StatsItemTitle>
              </StatsItem>
            </StatsList>
            <Button onClick={onOpenModal}>
              <ButtonTitle>
                {isWalletUnlocked ? 'my wallet' : 'unlock wallet'}
              </ButtonTitle>
            </Button>
          </TopRow>
        </Container>
      </Top>
      <Body>
        <Container>
          <Row>
            <LogoRow>
              <Logo />
            </LogoRow>
            <Nav>
              <NavListItem>
                <NavListTitle>Main</NavListTitle>
              </NavListItem>
              <NavListItem>
                <NavListTitle>How it works</NavListTitle>
              </NavListItem>
              <NavListItem>
                <NavListTitle>Farm $AID</NavListTitle>
              </NavListItem>
              <NavListItem>
                <NavListTitle>KOOL bar</NavListTitle>
              </NavListItem>
            </Nav>
          </Row>
        </Container>
      </Body>
      <WalletModal open={open} onCloseModal={onCloseModal} />
    </Wrapper>
  );
};

export default Header;
