import * as React from 'react';

// Styles
import { Wrapper } from './styles';

const Parity = (props) => {
  const { type, openModal, disabled } = props;

  return (
    <Wrapper
      type={type}
      onClick={disabled ? null : openModal}
      disabled={disabled}
    />
  );
};

export default Parity;
