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
  } = props;

  const [totalSupply, setTotalSupply] = React.useState(null);
  const [circulatingSupply, setCirculatingSupply] = React.useState(null);
  const [isModalOpen, setModalOpen] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState(null);

  const isLoadingBalance = totalSupply === null && circulatingSupply === null;

  React.useEffect(() => {
    if (tokenId && getTokenInfo) {
      getTokenInfo();
    }
  }, [tokenId]);

  const getTokenInfo = async () => {
    const NFTTotalSupply = await getNFTTotalSupply(tokenId);
    const NFTCirculatingSupply = await getNFTCirculatingSupply(tokenId);

    setTotalSupply(NFTTotalSupply);
    setCirculatingSupply(NFTCirculatingSupply);
  };

  const onClickButton = async () => {
    if (isLoadingBalance) {
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
    if (tryGetDrink === 'success') {
      getTokenInfo();
      refetchUserBalance();
    } else if (tryGetDrink) {
      setErrorMessage(tryGetDrink);
    }
  };

  const getButtonTitle = () => {
    return 'APPROVE AID';
  };

  const getButtonType = () => {
    return 'approveAID';
  };

  return (
    <>
      <Wrapper position={position} isLast={isLast}>
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
                disabled={isLoadingBalance}
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

export default SeasonCard;
