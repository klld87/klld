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
} from './styles';

// Components
import LinearButton from '../LinearButton';
import Parity from '../Parity';

// Api
import { getNFTTotalSupply, getDrink } from '../../api';

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
    claimed,
    totalClaimed,
    season,
    openParityModal,
    price,
    howToUse,
    // onClickButton,
    isLast,
    tokenId,
  } = props;

  const [totalSupply, setTotalSupply] = React.useState(null);
  const [balanceOf, setBalanceOf] = React.useState(null);

  React.useEffect(() => {
    if (tokenId) {
      getTokenInfo();
    }
  }, [tokenId]);

  const getTokenInfo = async () => {
    const getTotalSupply = await getNFTTotalSupply(tokenId);

    console.log('getTotalSupply', getTotalSupply);
  };

  const onClickButton = async () => {
    getDrink(tokenId);
  };

  return (
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
              Price: <ContentText>{price} AID</ContentText>
            </ContentTitle>
          </Content>
          <Actions position={position}>
            <Button>
              <ButtonTitle>{`${totalClaimed}/${claimed} claimed`}</ButtonTitle>
            </Button>
            <LinearButton
              onClickButton={onClickButton}
              title="APPROVE AID"
              type="approveAID"
            />
          </Actions>
        </Row>
      </Body>
    </Wrapper>
  );
};

export default SeasonCard;
