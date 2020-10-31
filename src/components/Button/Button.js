import * as React from 'react';

import { Wrapper, Title } from './styles';

const Button = (props) => {
  const { title, borderColor, hoverBackground } = props;

  if (!title) {
    return null;
  }

  return (
    <Wrapper borderColor={borderColor} hoverBackground={hoverBackground}>
      <Title>{title}</Title>
    </Wrapper>
  );
};

export default Button;
