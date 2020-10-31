import * as React from 'react';
import { Flex, Box } from 'reflexbox';

import Container from '../Container';
import { StyledFooter, Link } from './styles';

const links = [
  {
    name: 'Token contract',
    link:
      'https://etherscan.io/token/0x9d695e811beb55c98b1b3668295e390d33de5930',
  },
  {
    name: 'Uniswap',
    link:
      'https://uniswap.info/pair/0xda15087ec9a8460e2e52504d0757a154a158b913',
  },
  {
    name: 'Telegram',
    link: 'https://t.me/dontdrinkkoolaid',
  },
  {
    name: 'Twitter',
    link: 'https://twitter.com/dontdrinkkool',
  },
];

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <Flex flexWrap="wrap" justifyContent="center">
          {links.map((item) => {
            const { name, link } = item;
            return (
              <Box width={[1, 1, 1 / 4, 1 / 4]} key={name}>
                <Link
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  strokeWidth={2}
                >
                  {name}
                </Link>
              </Box>
            );
          })}
        </Flex>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
