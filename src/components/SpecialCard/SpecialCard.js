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
  SeasonCard,
  LoadingClaimed,
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
  approveKOOL,
} from '../../api';

// Helpers
import { getType, getTitle, isDisabled } from './helpers';

const SpecialCard = (props) => {
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
    howToUse,
    parity,
    season,
    openParityModal,
    isLast,
    tokenId,
    price,
    refetchUserBalance,
    openSeaLink,
    mobileStyle,
    koolBalance,
    aidBalance,
    ethBalance,
    isWalletUnlocked,
    priceAmount,
    symbol,
    onUnlockWallet,
    tokenOpenSeaLink,
  } = props;

  const [totalSupply, setTotalSupply] = React.useState(null);
  const [circulatingSupply, setCirculatingSupply] = React.useState(null);
  const [isModalOpen, setModalOpen] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState(null);
  const [isApproved, setApproved] = React.useState(false);
  const [transactionHash, setTransactionHash] = React.useState(null);
  const [approveTransactionHash, setApproveTransactionHash] = React.useState(
    null
  );
  const [approveAmount, setApproveAmount] = React.useState(0);

  const isFree = price === 'free';
  const isLoadingBalance = totalSupply === null && circulatingSupply === null;
  const isTokensLoading =
    isWalletUnlocked &&
    (aidBalance === null || (koolBalance === null) | (ethBalance === null));
  const isAllClaimed =
    totalSupply && circulatingSupply && totalSupply === circulatingSupply;

  React.useEffect(() => {
    if (openSeaLink) {
      setTotalSupply(5);
      setCirculatingSupply(5);
    } else {
      if (tokenId) {
        getTokenInfo();
      }
    }
  }, [tokenId, openSeaLink]);

  React.useEffect(() => {
    if (transactionHash) {
      checkTransactionInfo();
      setTotalSupply(null);
      setCirculatingSupply(null);
    }
  }, [transactionHash]);

  React.useEffect(() => {
    if (approveTransactionHash) {
      checkApproveTransactionInfo();
      setTotalSupply(null);
      setCirculatingSupply(null);
    }
  }, [approveTransactionHash]);

  const checkApproveTransactionInfo = async () => {
    window.web3.eth.getTransactionReceipt(
      approveTransactionHash,
      (err, transaction) => {
        if (transaction !== null) {
          getTokenInfo();
          setApproved(true);
          setApproveTransactionHash(null);
        } else {
          setTimeout(() => {
            checkTransactionInfo();
          }, 1500);
        }
      }
    );
  };

  const checkTransactionInfo = () => {
    window.web3.eth.getTransactionReceipt(
      transactionHash,
      (err, transaction) => {
        if (transaction !== null) {
          getTokenInfo();
          refetchUserBalance();
          setTransactionHash(null);
          setApproveAmount(0);
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
    if (isWalletUnlocked) {
      const isButtonDisabled = checkButtonDisabled();
      if (!isButtonDisabled) {
        if (tokenId === 1) {
          onGetDrink(1);
        } else {
          if (isApproved && approveAmount) {
            onGetDrink(approveAmount);
          } else {
            setModalOpen(true);
          }
        }
      }
    } else {
      onUnlockWallet();
    }
  };

  const onApprove = async (amount) => {
    const tryApproveKool = await approveKOOL(
      window.web3.toWei(priceAmount * amount)
    );
    if (tryApproveKool?.hash) {
      setApproveTransactionHash(tryApproveKool.hash);
    } else {
      setErrorMessage('error');
    }
  };

  const onGetDrink = async (amount) => {
    setModalOpen(false);
    if (!isApproved && symbol === 'KOOL') {
      setApproveAmount(amount);
      onApprove(amount);
    } else {
      const tryGetDrink = await getDrink(tokenId, amount);
      if (tryGetDrink?.hash) {
        setTransactionHash(tryGetDrink.hash);
      } else {
        if (tryGetDrink) {
          setErrorMessage(tryGetDrink);
        }
      }
    }
  };

  const getButtonTitle = () => {
    const title = getTitle(
      openSeaLink,
      isWalletUnlocked,
      isTokensLoading,
      symbol,
      priceAmount,
      ethBalance,
      aidBalance,
      koolBalance,
      isAllClaimed,
      isFree,
      isLoadingBalance,
      isApproved
    );
    return title;
  };

  const getButtonType = () => {
    const type = getType(
      openSeaLink,
      isWalletUnlocked,
      isTokensLoading,
      symbol,
      priceAmount,
      ethBalance,
      aidBalance,
      koolBalance,
      isAllClaimed,
      isFree,
      isLoadingBalance,
      isApproved
    );
    return type;
  };

  const getLink = () => {
    if (openSeaLink) {
      return openSeaLink;
    }
    if (isAllClaimed) {
      return tokenOpenSeaLink;
    }
    return null;
  };

  const checkButtonDisabled = () => {
    const isButtonDisabled = isDisabled(
      openSeaLink,
      isWalletUnlocked,
      isTokensLoading,
      symbol,
      priceAmount,
      ethBalance,
      aidBalance,
      koolBalance,
      isAllClaimed,
      isFree,
      isLoadingBalance,
      isApproved
    );
    return isButtonDisabled;
  };

  return (
    <>
      <Wrapper position={position} isLast={isLast} id={`card${tokenId}`}>
        <Cover
          background={cover}
          desktopSizes={coverSizes.desktop}
          mobileSizes={coverSizes.mobile}
          position={position}
          mobileStyle={mobileStyle}
          tokenId={tokenId}
        />
        <Body
          background={background}
          bgColor={bgColor}
          position={position}
          desktopSizes={coverSizes.desktop}
        >
          <SeasonCard image={season} position={position} />
          <TitleBlur background={titleBlur} position={position}>
            <Title>{title}</Title>
          </TitleBlur>
          <Row>
            <Content>
              <ContentTitle>
                Description: <ContentText>{description}</ContentText>
              </ContentTitle>
              <ContentTitle>
                CONTENTS: <ContentText>{contents}</ContentText>
              </ContentTitle>
              <ContentTitle>
                HOW TO USE: <ContentText>{howToUse}</ContentText>
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
                INITIAL PRICE: <ContentText>{price}</ContentText>
              </ContentTitle>
            </Content>
            <Actions position={position}>
              <Button position={position}>
                {isLoadingBalance ? (
                  <LoadingClaimed />
                ) : (
                  <ButtonTitle>
                    {isFree
                      ? `${circulatingSupply}/1500 claimed`
                      : `${circulatingSupply}/${totalSupply} claimed`}
                  </ButtonTitle>
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
      />
      <ErrorModal
        open={errorMessage !== null}
        onCloseModal={() => setErrorMessage(null)}
        errorMessage={errorMessage}
      />
    </>
  );
};

export default SpecialCard;
