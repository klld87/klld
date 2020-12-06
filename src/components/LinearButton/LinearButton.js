import * as React from 'react';

// Styles
import { Wrapper, Button, ButtonTitle } from './styles';

const LinearButton = (props) => {
  const { title, type, onClickButton } = props;

  return (
    <Wrapper type={type} onClick={onClickButton}>
      <Button type={type}>
        <ButtonTitle>{title}</ButtonTitle>
      </Button>
    </Wrapper>
  );
};

export default LinearButton;
