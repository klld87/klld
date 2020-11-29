import * as React from 'react';
import { Flex, Box } from 'reflexbox';

// Components
import SeasonItem from '../SeasonItem';

// Styles
import {
  Wrapper,
  Top,
  Cover,
  Row,
  TitleBlur,
  Title,
  Content,
  Actions,
  Button,
  ButtonTitle,
  ContentItem,
  ContentTitle,
  ContentText,
} from './styles';

const SeasonCard = (props) => {
  const {
    season,
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
  } = props;

  return (
    <Wrapper position={position}>
      <Flex width="100%" flexWrap="wrap">
        <Box width={[1, 1, 1 / 3, 1 / 3]} style={{ zIndex: 2 }}>
          <Top>
            <Cover background={cover} />
            <SeasonItem season={season} />
          </Top>
        </Box>
        <Box width={[1, 1, 2 / 3, 2 / 3]}>
          <Row>
            <TitleBlur background={titleBlurImage}>
              <Title>{title}</Title>
            </TitleBlur>
            <Content>
              <ContentItem>
                <ContentTitle>Description:</ContentTitle>
                <ContentText>{description}</ContentText>
              </ContentItem>
              <ContentItem>
                <ContentTitle>Contents:</ContentTitle>
                <ContentText>{contents}</ContentText>
              </ContentItem>
              <ContentItem>
                <ContentTitle>How to use:</ContentTitle>
                <ContentText>soon</ContentText>
              </ContentItem>
              <ContentItem>
                <ContentTitle>Parity:</ContentTitle>
                <ContentText>{parity}</ContentText>
              </ContentItem>
              <ContentItem>
                <ContentTitle>Price:</ContentTitle>
                <ContentText>{price}</ContentText>
              </ContentItem>
            </Content>
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
          </Row>
        </Box>
      </Flex>
    </Wrapper>
  );
};

export default SeasonCard;
