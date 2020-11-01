import React from 'react';
import { Flex, Box } from 'reflexbox';

import {
  StyledContainer,
  StatsList,
  StatsValue,
  StatsName,
  Strawberry,
  Apple,
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
            <StatsValue>{`$${price || ''}`}</StatsValue>
            <StatsName>KOOL Price</StatsName>
          </Box>
          <Box width={[1, 1, 1 / 3, 1 / 3]}>
            <StatsValue>
              {`$${marketCap ? Number.parseFloat(marketCap) : ''}`}
            </StatsValue>
            <StatsName>Market cap</StatsName>
          </Box>
        </Flex>
        <Apple />
      </StatsList>
    </StyledContainer>
  );
};

export default TokenStats;
