import * as React from 'react';

import {
  Wrapper,
  KoolMan,
  Row,
  Title,
  Text,
  SeasonCard,
  KoolFamilyImage,
} from './styles';

const SpecialEditionBanner = (props) => {
  return (
    <Wrapper>
      <KoolMan />
      <Row>
        <Title>Special Edition</Title>
        <Text>Get kool NFT merch</Text>
        {/* <SeasonCard /> */}
      </Row>
      <KoolFamilyImage />
    </Wrapper>
  );
};

export default SpecialEditionBanner;
