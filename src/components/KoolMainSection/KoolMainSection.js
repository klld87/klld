import * as React from 'react';

import Container from '../Container';
import Button from '../Button';

import {
  Wrapper,
  Content,
  Title,
  TitleText,
  KoolMan,
  Text,
  TextLB,
  StyledUnlockButton,
  ButtonList,
} from './styles';

import koolman from '../../images/koolman.svg';

const KoolMainSection = ({ isUnlocked }) => {
  return (
    <Wrapper>
      <Container>
        <Content>
          <Title textStroke={2}>
            <TitleText>First season collection available&nbsp;NOW!</TitleText>
          </Title>
          {isUnlocked ? (
            <StyledUnlockButton onClick={() => console.log('click')} />
          ) : null}
          <KoolMan>
            <img src={koolman} alt="Kool" />
          </KoolMan>
          <Text textStroke={2}>
            Soon; Make your own rare mix-flavoured{' '}
            <TextLB data-text="NFT cocktail">NFT cocktail</TextLB>
          </Text>
          <ButtonList>
            <Button
              title="Buy $KOOL"
              borderColor="#BF36FF"
              hoverBackground="#BF36FF"
            />
            <Button
              title="KOOL BAR NFTz"
              borderColor="#00CB39"
              hoverBackground="#00CB39"
            />
            <Button
              title="Farm $AID"
              borderColor="#00CB39"
              hoverBackground="#00CB39"
            />
          </ButtonList>
        </Content>
      </Container>
    </Wrapper>
  );
};

export default KoolMainSection;
