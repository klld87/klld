import * as React from 'react';

// Styles
import {
  Wrapper,
  Cover,
  Body,
  TitleBlur,
  Title,
  SeasonCardImage,
  Row,
  ContentTitle,
  ContentText,
  Actions,
  Button,
  ButtonTitle,
} from './styles';

const SeasonCard = (props) => {
  const {
    position,
    title,
    description,
    contents,
    parity,
    price,
    totalClaimed,
    limitClaimed,
    cover,
    titleBlurImage,
    titleBlurMobileImage,
    seasonImage,
  } = props;

  return (
    <Wrapper position={position}>
      <Cover background={cover} />
      <Body>
        <SeasonCardImage image={seasonImage} />
        <TitleBlur
          mobileBackground={titleBlurMobileImage}
          background={titleBlurImage}
        >
          <Title>{title}</Title>
        </TitleBlur>
        <Row>
          <ContentTitle>
            Description: <ContentText>{description}</ContentText>
          </ContentTitle>
          <ContentTitle>
            Contents: <ContentText>{contents}</ContentText>
          </ContentTitle>
          <ContentTitle>
            How to use: <ContentText>soon</ContentText>
          </ContentTitle>
          <ContentTitle>
            Parity: <ContentText>{parity}</ContentText>
          </ContentTitle>
          <ContentTitle>
            Price: <ContentText>{price} AID</ContentText>
          </ContentTitle>
        </Row>
        <Actions>
          <Button>
            <ButtonTitle>Need 200 AID</ButtonTitle>
          </Button>
          <Button>
            <ButtonTitle>
              {`${totalClaimed}/${limitClaimed}`} claimed
            </ButtonTitle>
          </Button>
        </Actions>
      </Body>
    </Wrapper>
  );
};

export default SeasonCard;
