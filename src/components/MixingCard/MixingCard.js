import * as React from 'react';

// Styles
import {
  Wrapper,
  Cover,
  Body,
  TitleBlur,
  Title,
  Jug,
  IngridientsBlock,
  IngridientsLabel,
} from './styles';

// Musior
import cover from '../../images/mixingCard/punch.png';
import pinkBlur from '../../images/cardBlurs/pinkMobile.png';

const MixingCard = (props) => {
  return (
    <Wrapper>
      <Cover background={cover} />
      <Body>
        <TitleBlur background={pinkBlur}>
          <Title>Moonshine Punch</Title>
        </TitleBlur>
        <Jug />
        <IngridientsBlock>
          <IngridientsLabel>Ingridients:</IngridientsLabel>
        </IngridientsBlock>
      </Body>
    </Wrapper>
  );
};

export default MixingCard;
