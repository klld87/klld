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
  } = props;

  const [totalSupply, setTotalSupply] = React.useState(null);
  const [circulatingSupply, setCirculatingSupply] = React.useState(null);
  const [isModalOpen, setModalOpen] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState(null);
  const [isApproved, setApproved] = React.useState(false);

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

  const getTokenInfo = async () => {
    const NFTTotalSupply = await getNFTTotalSupply(tokenId);
    const NFTCirculatingSupply = await getNFTCirculatingSupply(tokenId);

    setTotalSupply(NFTTotalSupply);
    setCirculatingSupply(NFTCirculatingSupply);
  };

  const onClickButton = async () => {
    if (isLoadingBalance || openSeaLink) {
      return;
    }
    if (tokenId === 1) {
      onGetDrink(1);
    } else {
      setModalOpen(true);
    }
  };

  const onGetDrink = async (amount) => {
    setModalOpen(false);
    const tryGetDrink = await getDrink(tokenId, amount);
    if (tryGetDrink === 'success') {
      getTokenInfo();
      refetchUserBalance();
    } else {
      if (tryGetDrink.indexOf('low-level call failed') !== -1) {
        approveKOOL(window.web3.toWei(priceAmount * amount));
      } else {
        setErrorMessage(tryGetDrink);
      }
    }
  };

  const getButtonTitle = () => {
    if (openSeaLink) {
      return 'GET ON OPENSEA';
    } else {
      if (isWalletUnlocked) {
        if (isTokensLoading) {
          return 'loading...';
        } else {
          if (symbol === 'ETH') {
            if (priceAmount > ethBalance) {
              return `NEED ${Number(priceAmount - ethBalance).toFixed(3)} ETH`;
            }
          } else if (symbol === 'AID') {
            if (priceAmount > aidBalance) {
              return `NEED ${Number(priceAmount - aidBalance).toFixed(2)} AID`;
            }
          } else if (symbol === 'KOOL') {
            if (priceAmount > koolBalance) {
              return `NEED ${Number(priceAmount - koolBalance).toFixed(
                2
              )} KOOL`;
            }
          }
          if (isAllClaimed) {
            return 'GET ON OPENSEA';
          }
          return symbol === 'KOOL' ? 'APPROVE KOOL' : 'GET NFT';
        }
      }
      return 'UNLOCK WALLET';
    }
  };

  const getButtonType = () => {
    if (openSeaLink) {
      return 'openSea';
    } else {
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
    }
  };

  const getLink = () => {
    if (isAllClaimed) {
      return 'https://opensea.io/';
    }
    if (isFree) {
      return openSeaLink;
    }
    return null;
  };

  const checkButtonDisabled = () => {
    if (!priceAmount && isFree) {
      return false;
    } else {
      if (isWalletUnlocked) {
        if (!isTokensLoading) {
          if (aidBalance > priceAmount) {
            return false;
          }
        }
      }
      return true;
    }
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
