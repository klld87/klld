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
  NavButton,
} from './styles';

import koolman from '../../images/koolman.svg';

const KoolMainSection = ({ isUnlocked, onUnlock }) => {
  return (
    <Wrapper>
      <Container>
        <Content>
          <Title textStroke={2}>
            <TitleText>First season collection available NOW!</TitleText>
          </Title>
          {!isUnlocked ? (
            <StyledUnlockButton onClick={onUnlock}>
              unlock wallet
            </StyledUnlockButton>
          ) : null}
          <KoolMan>
            <img src={koolman} alt="Kool" />
          </KoolMan>
          <Text textStroke={2}>
            Soon; Make your own rare mix-flavoured{' '}
            <TextLB data-text="NFT cocktail">NFT cocktail</TextLB>
          </Text>
          <ButtonList>
            <StyledButton
              tagName="a"
              href="https://info.uniswap.org/pair/0xda15087ec9a8460e2e52504d0757a154a158b913"
              target="_blank"
              rle="noopener noreferrer"
              borderColor="#BF36FF"
              hoverBackground="#BF36FF"
              rainbow
            >
              <UniIcon />
              <span>Buy $KOOL</span>
            </StyledButton>
            <NavButton to="/bar">
              <StyledButton borderColor="#BF36FF" hoverBackground="#BF36FF">
                KOOL BAR NFTz
              </StyledButton>
            </NavButton>
            <StyledButton
              tagName="a"
              href="https://kool.lol/farm/"
              target="_blank"
              rel="noopener noreferrer"
              borderColor="#00CB39"
              hoverBackground="#00CB39"
            >
              Farm $AID
            </StyledButton>
          </ButtonList>
        </Content>
      </Container>
    </Wrapper>
  );
};

export default KoolMainSection;
