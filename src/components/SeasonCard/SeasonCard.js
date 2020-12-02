import * as React from 'react';
import { Flex, Box } from 'reflexbox';

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
    seasonImage,
  } = props;

  return (
    <Wrapper position={position}>
      <Flex
        flexWrap="wrap"
        width="100%"
        alignItems="center"
        flexDirection={[
          'column',
          'column',
          position === 'right' ? 'row-reverse' : 'row',
          position === 'right' ? 'row-reverse' : 'row',
        ]}
      >
        <Box
          width={[1, 1, 1 / 5, 1 / 5]}
          display="flex"
          justifyContent="center"
          style={{ zIndex: 2 }}
        >
          <Cover background={cover} />
        </Box>
        <Box width={[1, 1, 4 / 5, 4 / 5]}>
          <Body>
            <SeasonCardImage image={seasonImage} />
            <TitleBlur background={titleBlurImage}>
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
        </Box>
      </Flex>
    </Wrapper>
  );
};

export default SeasonCard;
