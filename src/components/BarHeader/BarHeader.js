import * as React from 'react';

// Components
import Container from '../Container';

// Styles
import {
  Wrapper,
  Row,
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
          <Logo />
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
