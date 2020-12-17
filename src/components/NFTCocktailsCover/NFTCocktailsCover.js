import * as React from 'react';
import { Flex, Box } from 'reflexbox';

// Season cards
import season1 from '../../images/seasons/1.png';
import season2 from '../../images/seasons/2.png';
import season3 from '../../images/seasons/3.png';
import season4 from '../../images/seasons/4.png';
import season5 from '../../images/seasons/5.png';
import seasonSpecial from '../../images/seasons/special.png';

// Styles
import {
  Wrapper,
  Image,
  Title,
  Actions,
  Button,
  ButtonTitle,
  SeasonItem,
  Link,
} from './styles';

const seasonsList = [
  season1,
  season2,
  season3,
  season4,
  season5,
  seasonSpecial,
];

const NFTCocktailsCover = (props) => {
  const { onOpenHowItWorksModal } = props;

  return (
    <Wrapper>
      <Flex flexWrap="wrap" width="100%">
        <Box width={[1, 1, 1 / 4, 1 / 4]}>
          <Image />
        </Box>
        <Box width={[1, 1, 3 / 4, 3 / 4]} pl={[0, 0, '100px', '100px']}>
          <Title>MINT NFT flavors for KOOL COCKTAILS!</Title>
          <Actions>
            <Link
              href="https://koolbar.medium.com/kool-bar-and-season-1-nfts-9719900a33ff"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>
                <ButtonTitle>Tokenomics</ButtonTitle>
              </Button>
            </Link>
            <Button onClick={onOpenHowItWorksModal}>
              <ButtonTitle>How it works?</ButtonTitle>
            </Button>
            <Button>
              <ButtonTitle>Unlock wallet</ButtonTitle>
            </Button>
          </Actions>
          <Flex flexWrap="wrap" mt={['10px', '10px', '32px', '32px']}>
            {seasonsList.map((season, index) => (
              <Box
                key={index}
                width={[1 / 3, 1 / 3, '110px', '110px']}
                justifyContent="center"
                display="flex"
                mb={[index < 2 ? '4px' : 0, index < 2 ? '4px' : 0, 0, 0]}
              >
                <SeasonItem image={season} />
              </Box>
            ))}
          </Flex>
        </Box>
      </Flex>
    </Wrapper>
  );
};

export default NFTCocktailsCover;
