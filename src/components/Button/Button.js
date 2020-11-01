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
    onClick,
  } = props;

  if (!title) {
    return null;
  }

  const handleClick = () => {
    if (!onClick) return;
    onClick();
  };

  return (
    <Wrapper
      borderColor={borderColor}
      hoverBackground={hoverBackground}
      className={className}
      as={tagName}
      href={href}
      rel={rel}
      target={target}
      onClick={handleClick}
    >
      <Title>{title}</Title>
    </Wrapper>
  );
};

export default Button;
