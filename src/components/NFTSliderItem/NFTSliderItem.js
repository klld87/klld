import * as React from 'react';

// Styles
import { Wrapper, Cover, Actions, Button, ButtonTitle } from './styles';

const NFTSliderItem = (props) => {
  const { isLoading } = props;

  return (
    <Wrapper>
      <Cover />
      <Actions>
        <Button>
          <ButtonTitle>Buy more</ButtonTitle>
        </Button>
        <Button>
          <ButtonTitle>Sell</ButtonTitle>
        </Button>
      </Actions>
    </Wrapper>
  );
};

export default NFTSliderItem;
