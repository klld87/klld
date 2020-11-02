import * as React from 'react';
import { StyledButton } from './styles';

const UnlockButton = ({ onClick, className = '' }) => {
  return (
    <StyledButton
      borderColor="#05A6B0"
      hoverColor="#05A6B0"
      role="button"
      textStroke={2}
      onClick={onClick}
      className={className}
    >
      unlock wallet
    </StyledButton>
  );
};

export default UnlockButton;
