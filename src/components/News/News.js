import * as React from 'react';

import Container from '../Container';
import { Heading, List, Item, ItemLink, Flavors, FlavorText } from './styles';

const news = [
  {
    id: 'news1',
    title: 'Read about KOOL plans',
    link: '#',
  },
  {
    id: 'news2',
    title: 'NFTz tokenomics',
    link: '#',
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
          <FlavorText color="#FFC5C5">very very soon...</FlavorText>
        </Flavors>
      </Container>
    </section>
  );
};

export default News;
