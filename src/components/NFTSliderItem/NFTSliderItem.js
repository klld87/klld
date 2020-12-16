import * as React from 'react';
import { HashLink } from 'react-router-hash-link';

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
  Link,
} from './styles';

// Api
import { getBalanceOf } from '../../api';

const NFTSliderItem = (props) => {
  const { tokenId, cover, closeModal } = props;

  const [balance, setBalance] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);

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
      setBalance(0);
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
          <Button disabled>
            <ButtonTitle>Buy more</ButtonTitle>
          </Button>
          <Button disabled>
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
        <HashLink to={`/bar#card${tokenId}`} onClick={closeModal}>
          <Button>
            <ButtonTitle>Buy more</ButtonTitle>
          </Button>
        </HashLink>
        <Link
          href="https://opensea.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>
            <ButtonTitle>Sell</ButtonTitle>
          </Button>
        </Link>
      </Actions>
    </Wrapper>
  );
};

export default NFTSliderItem;
