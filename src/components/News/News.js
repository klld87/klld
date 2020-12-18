import * as React from 'react';
import { NavLink } from 'react-router-dom';

import Container from '../Container';
import {
  Heading,
  List,
  Item,
  ItemLink,
  WelcomeToBar,
  PearFruit,
  BarCover,
  BarButton,
  BarButtonTitle,
  WatermelonFruit,
} from './styles';

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
        <WelcomeToBar>
          <WatermelonFruit />
          <BarCover>
            <NavLink to="/bar">
              <BarButton>
                <BarButtonTitle>CLICK HERE TO ENTER</BarButtonTitle>
              </BarButton>
            </NavLink>
          </BarCover>
          <PearFruit />
        </WelcomeToBar>
      </Container>
    </section>
  );
};

export default News;
