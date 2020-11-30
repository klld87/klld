import * as React from 'react';
import { Flex, Box } from 'reflexbox';

// Components
import SeasonItem from '../SeasonItem';

// Styles
import {
  Wrapper,
  Cover,
  Row,
  Top,
  TitleBlur,
  Title,
  Body,
  ContentItem,
  ContentTitle,
  ContentText,
  Footer,
  Button,
  ButtonTitle,
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
    <Wrapper>
      <Flex flexWrap="wrap" width="100%">
        <Box width={[1, 1, 1 / 5, 1 / 5]} style={{ zIndex: 2 }}>
          <Cover background={cover} />
        </Box>
        <Box width={[1, 1, 4 / 5, 4 / 5]} display="flex" alignItems="center">
          <Row>
            <Top>
              <TitleBlur background={titleBlurImage}>
                <Title>{title}</Title>
              </TitleBlur>
              <SeasonItem season={season} />
            </Top>
            <Body>
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
            </Body>
            <Footer>
              <Button>
                <ButtonTitle>APPROVE AID</ButtonTitle>
              </Button>
            </Footer>
          </Row>
        </Box>
      </Flex>
    </Wrapper>
  );
};

export default SeasonCard;
