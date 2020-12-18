import * as React from 'react';

import Container from '../Container';
import { Heading, HeadingInner, Content, Image, Text, Link } from './styles';

import friends from './friends.jpg';

const Trade = () => {
  return (
    <section>
      <Container>
        <Heading>
          <HeadingInner>
            <span>Trade on Opensea</span>
          </HeadingInner>
        </Heading>
        <Content>
          <Image src={friends} alt="Trade in Opensea" />
          <Text>
            All Kool-Aid flavors are collectible NFTs with limited supply. If
            you have an extra flavor NFT or miss some for a cocktail mix, you
            can buy and sell flavors on OpenSea.
          </Text>
          <Link
            tagName="a"
            href="https://opensea.io/collection/kool-bar"
            target="_blank"
            rel="noopener noreferrer"
            hoverBackground="#05A6B0"
            borderColor="#05A6B0"
          >
            Buy/Sell NFTz
          </Link>
        </Content>
      </Container>
    </section>
  );
};

export default Trade;
