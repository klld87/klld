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
    initialPrice,
    parity,
    claimed,
    totalClaimed,
    season,
    openParityModal,
    onClickButton,
  } = props;

  return (
    <Wrapper position={position}>
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
              INITIAL PRICE: <ContentText>{initialPrice}</ContentText>
            </ContentTitle>
          </Content>
          <Actions position={position}>
            <Button>
              <ButtonTitle>{`${totalClaimed}/${claimed} claimed`}</ButtonTitle>
            </Button>
            <LinearButton
              onClickButton={onClickButton}
              title="GET NFT"
              type="openSea"
            />
          </Actions>
        </Row>
      </Body>
    </Wrapper>
  );
};

export default SpecialCard;
