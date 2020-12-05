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
  Parity,
} from './styles';

// Components
import LinearButton from '../LinearButton';

// Musor
import pinkBlur from '../../images/cardBlurs/navyBlue.png';

const SpecialCard = (props) => {
  const { title, cover, description, contents, position, coverSizes } = props;

  return (
    <Wrapper position={position}>
      <Cover
        background={cover}
        desktopSizes={coverSizes.desktop}
        mobileSizes={coverSizes.mobile}
      />
      <Body>
        <TitleBlur background={pinkBlur}>
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
            <ParityBlock>
              <ContentTitle>
                RARITY: <ContentText>UNCOMMON</ContentText>
              </ContentTitle>
              <Parity />
            </ParityBlock>
            <Actions>
              <LinearButton title="MIX" />
              <Button>
                <ButtonTitle>45 mixed</ButtonTitle>
              </Button>
            </Actions>
          </Content>
        </Row>
      </Body>
    </Wrapper>
  );
};

export default SpecialCard;
