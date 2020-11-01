import * as React from 'react';
import { StyledButton } from './styles';

const UnlockButton = ({ onClick, className = '' }) => {
  return (
    <StyledButton
      title="unlock wallet"
      borderColor="#05A6B0"
      hoverColor="#05A6B0"
      role="button"
      textStroke={2}
      onClick={onClick}
      className={className}
    />
  );
};

export default UnlockButton;
