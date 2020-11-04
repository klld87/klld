import * as React from 'react';
import { StyledButton, Title } from './styles';

const UnlockButton = ({ onClick, className = '', children }) => {
  return (
    <StyledButton
      borderColor="#05A6B0"
      hoverColor="#05A6B0"
      role="button"
      textStroke={2}
      onClick={onClick}
      className={className}
      type="button"
    >
      <Title>{children}</Title>
    </StyledButton>
  );
};

export default UnlockButton;
