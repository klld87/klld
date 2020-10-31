import React from 'react'
import { Flex, Box } from 'reflexbox'

// styles
import {
  Wrapper,
  Title
} from './styles'

// components
import Header from '../../components/Header'

const IndexPage = () => {
  return (
    <Wrapper>
      <Header />
      <Flex>
        <Box>
          Flex
        </Box>
      </Flex>
    </Wrapper>
  )
}

export default IndexPage