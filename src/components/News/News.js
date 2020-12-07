import * as React from 'react';

import Container from '../Container';
import { Heading, List, Item, ItemLink, Flavors, FlavorText } from './styles';

const news = [
  {
    id: 'news1',
    title: 'Read about KOOL plans',
    link:
      'https://medium.com/@hello_41403/kool-plans-mixing-kool-aid-without-drinking-719978ee07d4',
  },
  {
    id: 'news2',
    title: 'NFTz tokenomics',
    link:
      'https://medium.com/@hello_41403/kool-tokenomics-and-nfts-9719900a33ff',
  },
];

const News = () => {
  return (
    <section>
      <Container>
        <Heading>Latest News</Heading>
        <List>
          {news.map((item) => {
            const { id, title, link } = item;
            return (
              <Item key={id}>
                <ItemLink href={link} target="_blank" rel="noopener noreferrer">
                  {title}
                </ItemLink>
              </Item>
            );
          })}
        </List>
        <Flavors>
          <FlavorText color="#FFF849">
            Mix flavors
            <br />
            ->
          </FlavorText>
          <FlavorText color="#FF3434">
            Mint rare NFT
            <br />
            cocktails
          </FlavorText>
        </Flavors>
      </Container>
    </section>
  );
};

export default News;
