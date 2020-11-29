import * as React from 'react';
import { Flex, Box } from 'reflexbox';

// Styles
import {
  Wrapper,
  ImageRow,
  Title,
  Actions,
  Button,
  ButtonTitle,
  SeasonsList,
  SeasonItem,
  SeasonName,
  SeasonNumber,
} from './styles';

// const seasonsList = [
//   {

//   }
// ]

const NFTCocktailsCover = (props) => {
  const { onOpenHowItWorksModal } = props;

  return (
    <Wrapper>
      <Flex>
        <Box>
          <ImageRow />
        </Box>
        <Box>
          <Title>MINT NFT flavors for KOOL COCKTAILS!</Title>
          <Actions>
            <Button>
              <ButtonTitle>Tokenomics</ButtonTitle>
            </Button>
            <Button onClick={onOpenHowItWorksModal}>
              <ButtonTitle>How it works?</ButtonTitle>
            </Button>
          </Actions>
          <SeasonsList>
            <SeasonItem>
              <SeasonName>Season edition</SeasonName>
              <SeasonNumber>1</SeasonNumber>
            </SeasonItem>
          </SeasonsList>
        </Box>
      </Flex>
    </Wrapper>
  );
};

export default NFTCocktailsCover;
