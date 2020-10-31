import React from 'react';

import Container from '../Container';

import { Wrapper, Top, Body, Button, ButtonTitle } from './styles';

const Header = () => {
  return (
    <Wrapper>
      <Top>
        <Container>
          <Button>
            <ButtonTitle>Unlock wallet</ButtonTitle>
          </Button>
        </Container>
      </Top>
      <Body>
        <p>menu..</p>
      </Body>
    </Wrapper>
  );
};

export default Header;
