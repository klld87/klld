import * as React from 'react';
import {Flex, Box} from 'reflexbox';
import Container from '../Container'
import { SectionHeading } from '../../styles/typography'

const items = [
  {
    id: '1',
    
  }
]

const HowItWorks = () => {
  return (
    <section>
      <Container>
        <SectionHeading><span>How It Works</span></SectionHeading>
        <Flex>
          <Box width={[1, 1, 1/3, 1/3]}>item</Box>
          <Box width={[1, 1, 1/3, 1/3]}>item</Box>
          <Box width={[1, 1, 1/3, 1/3]}>item</Box>
        </Flex>
      </Container>
    </section>
  )
}

export default HowItWorks;