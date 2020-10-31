import * as React from 'react';
import { Flex, Box } from 'reflexbox';

import Container from '../Container';
import Button from '../Button';

import { Wrapper, Title, KoolMan, Text, TextLB } from './styles';

const KoolMainSection = () => {
  return (
    <Wrapper>
      <Container>
        <Flex>
          <Box width={[1, 1, 3 / 5, 3 / 5]}>
            <KoolMan />
          </Box>
          <Box width={[1, 1, 2 / 5, 2 / 5]}>
            <Title>First season collection available NOW!</Title>
            <Text>
              Soon; Make your own rare mix-flavoured{' '}
              <TextLB>NFT cocktail</TextLB>
            </Text>
            <Flex flexWrap="wrap" flexDirection="column">
              <Box mb={15}>
                <Button
                  title="Buy $KOOL"
                  borderColor="#BF36FF"
                  hoverBackground="#BF36FF"
                />
              </Box>
              <Box mb={15}>
                <Button
                  title="KOOL BAR NFTz"
                  borderColor="#00CB39"
                  hoverBackground="#00CB39"
                />
              </Box>
              <Box>
                <Button
                  title="Farm $AID"
                  borderColor="#00CB39"
                  hoverBackground="#00CB39"
                />
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </Wrapper>
  );
};

export default KoolMainSection;
