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
  getSpecialDrink,
  getNFTCirculatingSupply,
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
  } = props;

  const [totalSupply, setTotalSupply] = React.useState(openSeaLink);
  const [circulatingSupply, setCirculatingSupply] = React.useState(null);
  const [isModalOpen, setModalOpen] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState(null);

  React.useEffect(() => {
    if (tokenId && getTokenInfo && !openSeaLink) {
      getTokenInfo();
    }
    if (openSeaLink) {
      setTotalSupply(5);
      setCirculatingSupply(5);
    }
  }, [tokenId, openSeaLink]);

  const getTokenInfo = async () => {
    const NFTTotalSupply = await getNFTTotalSupply(tokenId);
    const NFTCirculatingSupply = await getNFTCirculatingSupply(tokenId);

    setTotalSupply(NFTTotalSupply);
    setCirculatingSupply(NFTCirculatingSupply);
  };

  const onClickButton = async () => {
    if (openSeaLink) {
      return null; // Fix me
    }
    setModalOpen(true);
  };

  const onGetDrink = async (amount) => {
    setModalOpen(false);
    const tryGetDrink = await getSpecialDrink(tokenId, amount);
    if (tryGetDrink === 'success') {
      getTokenInfo();
      refetchUserBalance();
    } else {
      setErrorMessage(tryGetDrink);
    }
  };

  const getButtonTitle = () => {
    if (openSeaLink) {
      return 'GET ON OPENSEA';
    }
    return 'APPROVE AID';
  };

  const getButtonType = () => {
    if (openSeaLink) {
      return 'openSea';
    }
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
              <Button>
                <ButtonTitle>{`${circulatingSupply}/${totalSupply} claimed`}</ButtonTitle>
              </Button>
              <LinearButton
                onClickButton={onClickButton}
                title={getButtonTitle()}
                type={getButtonType()}
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
