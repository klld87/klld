import React from 'react'
import { Flex, Box } from 'reflexbox'

// styles
import {
  Wrapper
} from './styles'

// components
import Header from '../components/Header'

const IndexPage = () => {
  return (
    <Wrapper>
      <Header />
      <p>
        IndexPage
      </p>
    </Wrapper>
  )
}

export default IndexPage