import * as React from 'react';

// Styles
import {
  Wrapper,
  Cover,
  Actions,
  Button,
  ButtonTitle,
  LoadingImage,
  LoadingText,
} from './styles';

const NFTSliderItem = (props) => {
  const { isLoading } = props;

  return (
    <Wrapper>
      <Cover>
        <LoadingImage />
        <LoadingText>Loading...</LoadingText>
      </Cover>
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
