import * as React from 'react';

import { Wrapper, Title } from './styles';

const Button = (props) => {
  const {
    title,
    borderColor,
    hoverBackground,
    className = '',
    tagName = 'div',
    href,
    rel,
    target,
  } = props;

  if (!title) {
    return null;
  }

  return (
    <Wrapper
      borderColor={borderColor}
      hoverBackground={hoverBackground}
      className={className}
      as={tagName}
      href={href}
      rel={rel}
      target={target}
    >
      <Title>{title}</Title>
    </Wrapper>
  );
};

export default Button;
