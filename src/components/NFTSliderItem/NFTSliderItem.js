import * as React from 'react';

// Styles
import {
  Wrapper,
  CoverLoading,
  Cover,
  Actions,
  Button,
  ButtonTitle,
  LoadingImage,
  LoadingText,
  CoverRow,
  BalanceBlock,
  BalanceValue,
} from './styles';

// Api
import { getBalanceOf } from '../../api';

const NFTSliderItem = (props) => {
  const { tokenId, cover } = props;

  const [balance, setBalance] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isError, setIsError] = React.useState(false);

  React.useEffect(() => {
    if (tokenId) {
      getBalance();
    }
  }, [tokenId]);

  const getBalance = async () => {
    const accounts = await window.ethereum.request({
      method: 'eth_requestAccounts',
    });
    const address = accounts[0];
    const tryGetBalance = await getBalanceOf(address, tokenId);
    setIsLoading(false);
    if (!isNaN(tryGetBalance)) {
      setBalance(tryGetBalance);
    } else {
      setIsError(true);
    }
  };

  if (!tokenId) {
    return null;
  }

  if (isLoading) {
    return (
      <Wrapper>
        <CoverLoading>
          <LoadingImage />
          <LoadingText>Loading...</LoadingText>
        </CoverLoading>
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
  }

  return (
    <Wrapper>
      <CoverRow>
        <Cover background={cover} />
        <BalanceBlock>
          <BalanceValue>{balance}</BalanceValue>
        </BalanceBlock>
      </CoverRow>
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
