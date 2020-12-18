import * as React from 'react';

// Styles
import {
  Wrapper,
  Cover,
  Body,
  TitleBlur,
  Title,
  Row,
  Content,
  ContentTitle,
  ContentText,
  Actions,
  Button,
  ButtonTitle,
  ParityBlock,
  ParityRow,
  SeasonCardImage,
  LoadingClaimed,
  HappyKool,
  ClimberKool,
  HappyKoolDrink,
  Arthur,
} from './styles';

// Components
import LinearButton from '../LinearButton';
import Parity from '../Parity';

// Modals
import EnterAmountModal from '../../modals/EnterAmount';
import ErrorModal from '../../modals/Error';

// Api
import {
  getNFTTotalSupply,
  getDrink,
  getNFTCirculatingSupply,
} from '../../api';

const SeasonCard = (props) => {
  const {
    title,
    cover,
    description,
    contents,
    position,
    coverSizes,
    titleBlur,
    background,
    bgColor,
    parity,
    season,
    openParityModal,
    price,
    howToUse,
    isLast,
    tokenId,
    refetchUserBalance,
    isWalletUnlocked,
    onUnlockWallet,
    aidBalance,
    priceAmount,
    limit,
    onBuyNewFlavor,
    tokenOpenSeaLink,
  } = props;

  const [totalSupply, setTotalSupply] = React.useState(null);
  const [circulatingSupply, setCirculatingSupply] = React.useState(null);
  const [isModalOpen, setModalOpen] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState(null);
  const [transactionHash, setTransactionHash] = React.useState(null);

  const isLoadingBalance = totalSupply === null || circulatingSupply === null;
  const isTokensLoading = isWalletUnlocked && aidBalance === null;
  const isAllClaimed =
    totalSupply && circulatingSupply && totalSupply === circulatingSupply;

  React.useEffect(() => {
    if (tokenId && getTokenInfo) {
      getTokenInfo();
    }
  }, [tokenId]);

  React.useEffect(() => {
    if (transactionHash) {
      checkTransactionInfo();
      setTotalSupply(null);
      setCirculatingSupply(null);
    }
  }, [transactionHash]);

  const checkTransactionInfo = () => {
    window.web3.eth.getTransactionReceipt(
      transactionHash,
      (err, transaction) => {
        if (transaction !== null) {
          getTokenInfo();
          refetchUserBalance();
          onBuyNewFlavor();
          setTransactionHash(null);
        } else {
          setTimeout(() => {
            checkTransactionInfo();
          }, 1500);
        }
      }
    );
  };

  const getTokenInfo = async () => {
    const NFTTotalSupply = await getNFTTotalSupply(tokenId);
    const NFTCirculatingSupply = await getNFTCirculatingSupply(tokenId);

    setTotalSupply(NFTTotalSupply);
    setCirculatingSupply(NFTCirculatingSupply);
  };

  const onClickButton = async () => {
    if (isLoadingBalance || isTokensLoading) {
      return;
    }
    if (priceAmount > aidBalance) {
      return;
    }
    if (isWalletUnlocked) {
      setModalOpen(true);
    } else {
      onUnlockWallet();
    }
  };

  const onGetDrink = async (amount) => {
    setModalOpen(false);
    const tryGetDrink = await getDrink(tokenId, amount);
    if (tryGetDrink?.hash) {
      setTransactionHash(tryGetDrink.hash);
    } else if (tryGetDrink) {
      setErrorMessage(tryGetDrink);
    }
  };

  const getButtonTitle = () => {
    if (isWalletUnlocked) {
      if (isTokensLoading) {
        return 'loading...';
      }
      if (priceAmount > aidBalance) {
        return `NEED ${Number(priceAmount) - Number(aidBalance)} AID`;
      }
      return isAllClaimed ? 'GET ON OPENSEA' : 'GET NFT';
    }
    return 'UNLOCK WALLET';
  };

  const getButtonType = () => {
    if (isWalletUnlocked) {
      if (isTokensLoading) {
        return 'loading';
      }
      if (priceAmount > aidBalance) {
        return 'insufficientFunds';
      }
      return isAllClaimed ? 'getOnOpenSea' : 'getNFT';
    }
    return 'unlockWallet';
  };

  const checkButtonDisabled = () => {
    if (!isLoadingBalance) {
      return true;
    }
    if (isWalletUnlocked) {
      if (!isTokensLoading) {
        if (aidBalance > priceAmount) {
          return true;
        }
      }
    }
    return false;
  };

  const getLink = () => {
    if (isAllClaimed) {
      return tokenOpenSeaLink;
    }
    return null;
  };

  return (
    <>
      <Wrapper position={position} isLast={isLast} id={`card${tokenId}`}>
        <Cover
          background={cover}
          desktopSizes={coverSizes.desktop}
          mobileSizes={coverSizes.mobile}
          position={position}
        />
        <Body
          background={background}
          bgColor={bgColor}
          position={position}
          desktopSizes={coverSizes.desktop}
        >
          {tokenId === 3 ? <HappyKool /> : null}
          {tokenId === 4 ? <ClimberKool /> : null}
          {tokenId === 5 ? <HappyKoolDrink /> : null}
          {tokenId === 4 ? <Arthur /> : null}
          <SeasonCardImage image={season} position={position} />
          <TitleBlur background={titleBlur} position={position}>
            <Title>{title}</Title>
          </TitleBlur>
          <Row>
            <Content>
              <ContentTitle>
                Description: <ContentText>{description}</ContentText>
              </ContentTitle>
              <ContentTitle>
                Contents: <ContentText>{contents}</ContentText>
              </ContentTitle>
              <ContentTitle>
                How to use: <ContentText>{howToUse}</ContentText>
              </ContentTitle>
              <ParityBlock>
                <ContentTitle>
                  RARITY: <ContentText>{parity}</ContentText>
                </ContentTitle>
                <ParityRow>
                  <Parity type={parity} openModal={openParityModal} />
                </ParityRow>
              </ParityBlock>
              <ContentTitle>
                Price: <ContentText>{price}</ContentText>
              </ContentTitle>
            </Content>
            <Actions position={position}>
              <Button position={position}>
                {isLoadingBalance ? (
                  <LoadingClaimed />
                ) : (
                  <ButtonTitle>{`${circulatingSupply}/${totalSupply} claimed`}</ButtonTitle>
                )}
              </Button>
              <LinearButton
                onClickButton={onClickButton}
                title={getButtonTitle()}
                type={getButtonType()}
                disabled={checkButtonDisabled()}
                isLoading={isTokensLoading}
                link={getLink()}
              />
            </Actions>
          </Row>
        </Body>
      </Wrapper>
      <EnterAmountModal
        open={isModalOpen}
        onCloseModal={() => setModalOpen(false)}
        onSend={onGetDrink}
        limit={limit}
      />
      <ErrorModal
        open={errorMessage !== null}
        onCloseModal={() => setErrorMessage(null)}
        errorMessage={errorMessage}
      />
    </>
  );
};

export default SeasonCard;
