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
  LoadingBlock,
  Loading,
} from './styles';

// Api
import { getBalanceOf } from '../../api';

const Ingridient = (props) => {
  const {
    amount,
    cover,
    tokenId,
    lastUpdate,
    isWalletUnlocked,
    userAddress,
    sendAvailable,
  } = props;

  const [isAvailable, setIsAvailable] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    if (tokenId && lastUpdate && isWalletUnlocked) {
      checkIsAvailable();
    }
  }, [tokenId, lastUpdate, isWalletUnlocked]);

  const checkIsAvailable = async () => {
    setIsLoading(true);
    const tryGetBalance = await getBalanceOf(userAddress, tokenId);
    setIsLoading(false);
    if (!isNaN(tryGetBalance)) {
      setIsAvailable(tryGetBalance >= amount);
      sendAvailable(tryGetBalance >= amount ? 1 : 0);
    } else {
      setIsAvailable(false);
      sendAvailable(0);
    }
  };

  return (
    <Wrapper>
      <Cover background={cover} />
      {isLoading ? (
        <LoadingBlock>
          <Loading />
        </LoadingBlock>
      ) : (
        <IsAvailableBlock>
          {isAvailable ? <SuccessIcon /> : <ErrorIcon />}
        </IsAvailableBlock>
      )}
      <AmountBlock>
        <Amount>{amount}</Amount>
      </AmountBlock>
    </Wrapper>
  );
};

export default Ingridient;
