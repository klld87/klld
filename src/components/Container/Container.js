import React from 'react';

import { Wrapper } from './styles';

const Container = (props) => {
  const { children, className = '' } = props;

  return <Wrapper className={className}>{children}</Wrapper>;
};

export default Container;
