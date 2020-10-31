import * as React from 'react';

import { Wrapper, Title } from './styles';

const Button = (props) => {
  const { title } = props;

  if (!title) {
    return null;
  }

  return (
    <Wrapper>
      <Title>{title}</Title>
    </Wrapper>
  );
};

export default Button;
