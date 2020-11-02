import React from 'react';
import { Flex, Box } from 'reflexbox';

import {
  StyledContainer,
  StatsList,
  StatsValue,
  StatsName,
  Strawberry,
  Apple,
  Loader,
} from './styles';

const TokenStats = ({ koolPrice: price }) => {
  const supply = 99.999;
  const marketCap = Math.floor(price * supply * 1000) / 1000;

  return (
    <StyledContainer>
      <StatsList>
        <Strawberry />
        <Flex flexWrap="wrap">
          <Box width={[1, 1, 1 / 3, 1 / 3]} mb={['50px', '50px', 0, 0]}>
            <StatsValue>{Number.parseFloat(supply)}</StatsValue>
            <StatsName>KOOL supply</StatsName>
          </Box>
          <Box width={[1, 1, 1 / 3, 1 / 3]} mb={['50px', '50px', 0, 0]}>
            {price ? (
              <StatsValue>{`$${price}`}</StatsValue>
            ) : (
              <Loader>loading</Loader>
            )}
            <StatsName>KOOL Price</StatsName>
          </Box>
          <Box width={[1, 1, 1 / 3, 1 / 3]}>
            {marketCap ? (
              <StatsValue>{`$${Number.parseFloat(marketCap)}`}</StatsValue>
            ) : (
              <Loader>loading</Loader>
            )}
            <StatsName>Market cap</StatsName>
          </Box>
        </Flex>
        <Apple />
      </StatsList>
    </StyledContainer>
  );
};

export default TokenStats;
