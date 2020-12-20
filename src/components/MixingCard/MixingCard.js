import * as React from 'react';
import Countdown from 'react-countdown';

// Styles
import {
  Wrapper,
  Cover,
  Body,
  TitleBlur,
  Title,
  Jug,
  Row,
  Content,
  ContentTitle,
  ContentText,
  IngridientsBlock,
  IngridientsLabel,
  IngridientsList,
  IngridientsPlus,
  StatsList,
  StatsItem,
  Right,
  Actions,
  Button,
  ButtonTitle,
  ParityBlock,
  ParityRow,
  CountDownRow,
  LoadingMixed,
} from './styles';

// Components
import Ingridient from '../Ingridient';
import LinearButton from '../LinearButton';
import Parity from '../Parity';

// Modals
import ErrorModal from '../../modals/Error';

// Api
import { getNFTCirculatingSupply, getDrink } from '../../api';

const MixingCard = (props) => {
  const {
    title,
    cover,
    titleBlur,
    description,
    contents,
    parity,
    recipe,
    sugar,
    acidity,
    toxicity,
    ingridients,
    openParityModal,
    bgColor,
    background,
    isLast,
    withCountDown,
    countDown,
    tokenId,
    refetchUserBalance,
    isWalletUnlocked,
    onUnlockWallet,
    lastMixUpdate,
    userAddress,
  } = props;

  const [circulatingSupply, setCirculatingSupply] = React.useState(null);
  const [transactionHash, setTransactionHash] = React.useState(null);
  const [errorMessage, setErrorMessage] = React.useState(null);
  const [lastUpdate, setLastUpdate] = React.useState(new Date().getTime());
  const [isMixedAvailable, setMixedAvailable] = React.useState(false);
  const [isLoadingAvailable, setLoadingAvailable] = React.useState(true);
  const [availabledData, setAvailabledData] = React.useState([]);

  React.useEffect(() => {
    if (tokenId && lastMixUpdate) {
      getTokenInfo();
      setLastUpdate(lastMixUpdate);
    }
  }, [tokenId, lastMixUpdate]);

  React.useEffect(() => {
    if (transactionHash) {
      checkTransactionInfo();
      setCirculatingSupply(null);
    }
  }, [transactionHash]);

  React.useEffect(() => {
    if (
      ingridients &&
      availabledData &&
      availabledData.length === ingridients.length
    ) {
      const filter = availabledData.filter((i) => i !== 0);
      setLoadingAvailable(false);
      setMixedAvailable(filter.length === ingridients.length);
      setAvailabledData(null);
    }
  }, [availabledData, ingridients]);

  const sendAvailable = (data, index) => {
    if (index === 0) {
      setMixedAvailable(false);
      setLoadingAvailable(true);
    }
    setAvailabledData((prevData) => [...(prevData || []), data]);
  };

  const checkTransactionInfo = () => {
    window.web3.eth.getTransactionReceipt(
      transactionHash,
      (err, transaction) => {
        if (transaction !== null) {
          getTokenInfo();
          refetchUserBalance();
          setLastUpdate(new Date().getTime());
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
    const NFTCirculatingSupply = await getNFTCirculatingSupply(tokenId);

    setCirculatingSupply(NFTCirculatingSupply);
  };

  const onClickButton = async () => {
    if (isWalletUnlocked) {
      if (!checkButtonDisabled()) {
        const tryGetDrink = await getDrink(tokenId, 1);
        if (tryGetDrink?.hash) {
          setTransactionHash(tryGetDrink.hash);
        } else if (tryGetDrink) {
          setErrorMessage(tryGetDrink);
        }
      }
    } else {
      onUnlockWallet();
    }
  };

  const checkButtonDisabled = () => {
    if (
      circulatingSupply === null ||
      !isWalletUnlocked ||
      isLoadingAvailable ||
      !isMixedAvailable
    ) {
      return true;
    }
    return false;
  };

  const getButtonTitle = () => {
    if (isWalletUnlocked) {
      if (circulatingSupply === null || isLoadingAvailable) {
        return 'loading...';
      }
      if (!isMixedAvailable) {
        return 'NFTz missing';
      }
      return 'MIX';
    }
    return 'UNLOCK WALLET';
  };

  const getButtonType = () => {
    if (isWalletUnlocked) {
      if (circulatingSupply === null || isLoadingAvailable) {
        return 'loading';
      }
      if (!isMixedAvailable) {
        return 'NFTzMissing';
      }
      return 'mix';
    }
    return 'unlockWallet';
  };

  return (
    <>
      <Wrapper isLast={isLast} id={`card${tokenId}`}>
        <Cover background={cover} />
        {withCountDown && countDown ? (
          <CountDownRow bgColor={bgColor} background={background}>
            <Countdown date={countDown} />
          </CountDownRow>
        ) : (
          <Body bgColor={bgColor} background={background}>
            <TitleBlur background={titleBlur}>
              <Title>{title}</Title>
            </TitleBlur>
            <Jug />
            <Row>
              <Content>
                <ContentTitle>
                  Description: <ContentText>{description}</ContentText>
                </ContentTitle>
                <ContentTitle>
                  CONTENTS: <ContentText>{contents}</ContentText>
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
                  RECIPE: <ContentText>{recipe}</ContentText>
                </ContentTitle>
                <Actions>
                  <LinearButton
                    onClickButton={onClickButton}
                    disabled={checkButtonDisabled()}
                    title={getButtonTitle()}
                    type={getButtonType()}
                    desktopFull
                  />
                  <Button>
                    {circulatingSupply === null ? (
                      <LoadingMixed />
                    ) : (
                      <ButtonTitle>{`${circulatingSupply} mixed`}</ButtonTitle>
                    )}
                  </Button>
                </Actions>
              </Content>
              <Right>
                {ingridients?.length ? (
                  <IngridientsBlock background={background}>
                    <IngridientsLabel>Ingridients:</IngridientsLabel>
                    <IngridientsList>
                      <IngridientsPlus>+</IngridientsPlus>
                      {ingridients.map((item, index) => (
                        <Ingridient
                          key={index}
                          lastUpdate={lastUpdate}
                          isWalletUnlocked={isWalletUnlocked}
                          userAddress={userAddress}
                          sendAvailable={(data) => sendAvailable(data, index)}
                          {...item}
                        />
                      ))}
                    </IngridientsList>
                  </IngridientsBlock>
                ) : null}
                <StatsList>
                  <StatsItem>sugar: {sugar}</StatsItem>
                  <StatsItem>acidity: {acidity}</StatsItem>
                  <StatsItem>toxicity: {toxicity}</StatsItem>
                </StatsList>
              </Right>
            </Row>
          </Body>
        )}
      </Wrapper>
      <ErrorModal
        open={errorMessage !== null}
        onCloseModal={() => setErrorMessage(null)}
        errorMessage={errorMessage}
      />
    </>
  );
};

export default MixingCard;
