import * as React from 'react';

// Styles
import { Wrapper } from './styles';

const SliderArrow = (props) => {
  const { direction, onClick } = props;

  return <Wrapper direction={direction} onClick={onClick} />;
};

export default SliderArrow;
