import React from 'react'
import { Flex, Box } from 'reflexbox'

import Container from '../Container'

import {
  StatsList,
  StatsValue,
  StatsName
} from './styles'

const TokenStats = () => {
  const supply = 99999
  const price = 0.38 // Fix me
  const marketCap = price*supply

  return (
    <Container>
      <StatsList>
        <Flex flexWrap="wrap">
          <Box width={[1, 1, 1/3, 1/3]}>
            <StatsValue>
              {Number.parseFloat(supply).toFixed(2)}
            </StatsValue>
            <StatsName>
              KOOL supply
            </StatsName>
          </Box>
          <Box width={[1, 1, 1/3, 1/3]}>
            <StatsValue>
              {`$ ${price}`}
            </StatsValue>
            <StatsName>
              KOOL Price
            </StatsName>
          </Box>
          <Box width={[1, 1, 1/3, 1/3]}>
            <StatsValue>
              {`$ ${Number.parseFloat(marketCap).toFixed(2)}`}
            </StatsValue>
            <StatsName>
              Market cap
            </StatsName>
          </Box>
        </Flex>
      </StatsList>
    </Container>
  )
}

export default TokenStats
