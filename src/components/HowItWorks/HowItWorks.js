import * as React from 'react';
import Container from '../Container';
import { SectionHeading } from '../../styles/typography';
import { List, Item, Number, Text } from './styles';

const items = [
  {
    id: '1',
    label: 'farmer',
    emoji: '👨‍🌾',
    text: 'Stake $KOOL and<br/>KOOL/ETH LP<br/>tokens to farm $AID',
  },
  {
    id: '2',
    label: 'package',
    emoji: '📦',
    text: 'Burn $AID for unique Kool-Aid Flavor NFTz',
  },
  {
    id: '3',
    label: 'drink',
    emoji: '🍹',
    text: 'Mix NFTz<br/>to get rare ERC-1155<br/>cocktails',
  },
];

const HowItWorks = () => {
  return (
    <section>
      <Container>
        <SectionHeading>
          <span>How It Works</span>
        </SectionHeading>
        <List>
          {items.map((item) => {
            const { id, label, emoji, text } = item;
            return (
              <Item key={label}>
                <Number number={id} strokeColor="rgba(0, 0, 0, 0.6)">
                  {id}
                </Number>
                <Text
                  emojiLabel={label}
                  emoji={emoji}
                  textStroke="2"
                  dangerouslySetInnerHTML={{ __html: text }}
                />
              </Item>
            );
          })}
        </List>
      </Container>
    </section>
  );
};

export default HowItWorks;
