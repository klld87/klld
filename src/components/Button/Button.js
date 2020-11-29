import * as React from 'react';

import { Wrapper, Text } from './styles';

const Button = (props) => {
  const {
    children,
    borderColor,
    hoverBackground,
    className = '',
    tagName = 'div',
    href,
    rel,
    target,
    onClick,
    rainbow,
  } = props;

  if (!children) {
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
      rainbow={rainbow}
    >
      <Text>{children}</Text>
    </Wrapper>
  );
};

export default Button;