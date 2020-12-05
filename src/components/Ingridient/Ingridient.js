import * as React from 'react';

// Styles
import {
  Wrapper,
  Cover,
  IsAvailableBlock,
  AmountBlock,
  Amount,
  SuccessIcon,
  ErrorIcon,
} from './styles';

const Ingridient = (props) => {
  const { amount, cover, isAvailable } = props;

  return (
    <Wrapper>
      <Cover background={cover} />
      <IsAvailableBlock>
        {isAvailable ? <SuccessIcon /> : <ErrorIcon />}
      </IsAvailableBlock>
      <AmountBlock>
        <Amount>{amount}</Amount>
      </AmountBlock>
    </Wrapper>
  );
};

export default Ingridient;
