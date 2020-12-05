import * as React from 'react';

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
  Parity,
} from './styles';

// Components
import Ingridient from '../Ingridient';
import LinearButton from '../LinearButton';

// Musor
import cover from '../../images/mixingCard/punch.png';
import pinkBlur from '../../images/cardBlurs/navyBlue.png';
import mixingCover from '../../images/mixingCovers/1.png';

const MixingCard = (props) => {
  return (
    <Wrapper>
      <Cover background={cover} />
      <Body>
        <TitleBlur background={pinkBlur}>
          <Title>Moonshine Punch</Title>
        </TitleBlur>
        <Jug />
        <Row>
          <Content>
            <ContentTitle>
              Description:{' '}
              <ContentText>How many punches before the moon?</ContentText>
            </ContentTitle>
            <ContentTitle>
              CONTENTS:{' '}
              <ContentText>
                Fructose, Lysergic acid, Synthetic Blueberry Flavor, Moondust,
                Blue 1, Yellow 5
              </ContentText>
            </ContentTitle>
            <ParityBlock>
              <ContentTitle>
                RARITY: <ContentText>UNCOMMON</ContentText>
              </ContentTitle>
              <Parity />
            </ParityBlock>
            <ContentTitle>
              RECIPE:{' '}
              <ContentText>
                Banana FOMO x1 + Green Apple Pump x1 + Bitcoin Orange x2
              </ContentText>
            </ContentTitle>
            <Actions>
              <LinearButton title="MIX" />
              <Button>
                <ButtonTitle>45 mixed</ButtonTitle>
              </Button>
            </Actions>
          </Content>
          <Right>
            <IngridientsBlock>
              <IngridientsLabel>Ingridients:</IngridientsLabel>
              <IngridientsList>
                <IngridientsPlus>+</IngridientsPlus>
                <Ingridient amount={1} cover={mixingCover} isAvailable />
                <Ingridient
                  amount={2}
                  cover={mixingCover}
                  isAvailable={false}
                />
                <Ingridient amount={1} cover={mixingCover} isAvailable />
                <Ingridient
                  amount={2}
                  cover={mixingCover}
                  isAvailable={false}
                />
              </IngridientsList>
            </IngridientsBlock>
            <StatsList>
              <StatsItem>sugar: 17</StatsItem>
              <StatsItem>acidity: 17</StatsItem>
              <StatsItem>toxicity: 17</StatsItem>
            </StatsList>
          </Right>
        </Row>
      </Body>
    </Wrapper>
  );
};

export default MixingCard;
