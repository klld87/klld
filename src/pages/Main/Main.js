import React from 'react';
import { Flex, Box } from 'reflexbox';

// styles
import { Wrapper, Title } from './styles';

// components
import Header from '../../components/Header';
import Container from '../../components/Container';
import TokenStats from '../../components/TokenStats';
import HowItWorks from '../../components/HowItWorks';

const MainPage = () => {
  return (
    <Wrapper>
      <Header />
      <Flex width="100%">
        <Box width={[1, 1, 2 / 5, 2 / 5]}>
          <img src="/koolmarket.png" width="915" height="543" />
        </Box>
        <Box width={[1, 1, 3 / 5, 3 / 5]}>
          <Title>First season collection available NOW!</Title>
        </Box>
      </Flex>
      <TokenStats />
      <HowItWorks />
    </Wrapper>
  );
};

export default MainPage;
