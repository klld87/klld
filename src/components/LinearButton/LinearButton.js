import * as React from 'react';

// Styles
import { Wrapper, Button, ButtonTitle } from './styles';

const LinearButton = (props) => {
  const { title, type } = props;

  return (
    <Wrapper type={type}>
      <Button>
        <ButtonTitle>{title}</ButtonTitle>
      </Button>
    </Wrapper>
  );
};

export default LinearButton;
