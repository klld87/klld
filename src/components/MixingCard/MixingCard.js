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
} from './styles';

// Components
import Ingridient from '../Ingridient';
import LinearButton from '../LinearButton';
import Parity from '../Parity';

const MixingCard = (props) => {
  const {
    title,
    cover,
    titleBlur,
    description,
    contents,
    parity,
    recipe,
    mixedCount,
    sugar,
    acidity,
    toxicity,
    ingridients,
    openParityModal,
    bgColor,
    background,
    onClickButton,
    isLast,
    withCountDown,
  } = props;

  return (
    <Wrapper isLast={isLast}>
      <Cover background={cover} />
      {withCountDown ? (
        <CountDownRow bgColor={bgColor} background={background}>
          <Countdown date={new Date('Dec 20 2020')} />
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
                  title="MIX"
                  type="mix"
                />
                <Button>
                  <ButtonTitle>{mixedCount} mixed</ButtonTitle>
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
                      <Ingridient {...item} key={index} />
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
  );
};

export default MixingCard;
