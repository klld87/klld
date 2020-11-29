import * as React from 'react';

// Styles
import { Wrapper } from './styles';

const SliderArrow = (props) => {
  const { direction } = props;

  return <Wrapper direction={direction} />;
};

export default SliderArrow;
