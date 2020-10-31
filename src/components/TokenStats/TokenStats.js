import React from 'react';
import { Flex, Box } from 'reflexbox';

import Container from '../Container';

import { StatsList, StatsValue, StatsName, Strawberry, Apple } from './styles';

const TokenStats = () => {
  const supply = 99999;
  const price = 0.38; // Fix me
  const marketCap = price * supply;

  return (
    <Container>
      <StatsList>
        <Strawberry />
        <Flex flexWrap="wrap">
          <Box width={[1, 1, 1 / 3, 1 / 3]} mb={['50px', '50px', 0, 0]}>
            <StatsValue>{Number.parseFloat(supply).toFixed(2)}</StatsValue>
            <StatsName>KOOL supply</StatsName>
          </Box>
          <Box width={[1, 1, 1 / 3, 1 / 3]} mb={['50px', '50px', 0, 0]}>
            <StatsValue>{`$ ${price}`}</StatsValue>
            <StatsName>KOOL Price</StatsName>
          </Box>
          <Box width={[1, 1, 1 / 3, 1 / 3]}>
            <StatsValue>
              {`$ ${Number.parseFloat(marketCap).toFixed(2)}`}
            </StatsValue>
            <StatsName>Market cap</StatsName>
          </Box>
        </Flex>
        <Apple />
      </StatsList>
    </Container>
  );
};

export default TokenStats;
