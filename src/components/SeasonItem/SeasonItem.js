import * as React from 'react';

// Styles
import { Wrapper } from './styles';

const SeasonItem = (props) => {
  const { season } = props;

  return (
    <Wrapper>
      <p>{season}</p>
    </Wrapper>
  );
};

export default SeasonItem;
