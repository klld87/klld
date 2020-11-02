import * as React from 'react';

import Container from '../Container';

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
  StyledButton,
  UniIcon,
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
            <StyledButton borderColor="#BF36FF" hoverBackground="#BF36FF">
              <UniIcon />
              <span>Buy $KOOL</span>
            </StyledButton>
            <StyledButton borderColor="#00CB39" hoverBackground="#00CB39">
              KOOL BAR NFTz
            </StyledButton>
            <StyledButton borderColor="#00CB39" hoverBackground="#00CB39">
              Farm $AID
            </StyledButton>
          </ButtonList>
        </Content>
      </Container>
    </Wrapper>
  );
};

export default KoolMainSection;
