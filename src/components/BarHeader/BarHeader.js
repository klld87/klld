import * as React from 'react';

// Components
import Container from '../Container';

// Styles
import {
  Wrapper,
  Row,
  LogoRow,
  KoolName,
  Logo,
  Nav,
  NavLink,
  Button,
  ButtonTitle,
} from './styles';

const BarHeader = (props) => {
  const { onOpenNFTWalletModal } = props;

  return (
    <Wrapper>
      <Container>
        <Row>
          <LogoRow>
            <Logo />
            <KoolName textStroke={2}>KOOL</KoolName>
          </LogoRow>
          <Nav>
            <NavLink>Main page</NavLink>
            <NavLink>Special</NavLink>
            <NavLink>KOOL Mixing</NavLink>
          </Nav>
          <Button onClick={onOpenNFTWalletModal}>
            <ButtonTitle>My wallet</ButtonTitle>
          </Button>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default BarHeader;
