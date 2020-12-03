import * as React from 'react';

// Styles
import { Wrapper, KoolMixingMan, Row, Title, Text, KoolMan } from './styles';

const KoolMixingBanner = () => {
  return (
    <Wrapper>
      <KoolMixingMan />
      <Row>
        <Title textStroke={3}>Kool mixing</Title>
        <Text textStroke={1}>Mix NFTz to get rare ERC-1155 cocktails </Text>
      </Row>
      <KoolMan />
    </Wrapper>
  );
};

export default KoolMixingBanner;
