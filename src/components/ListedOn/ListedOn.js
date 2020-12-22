import * as React from 'react';

// Components
import Container from '../Container';

// Styles
import { Wrapper, Title, List, Link, Item } from './styles';

// Banners
import dappRadarMobile from '../../images/listed/dappRadarMobile.png';
import dappMobile from '../../images/listed/dappMobile.png';
import dappRadar from '../../images/listed/dappRadar.png';
import dapp from '../../images/listed/dapp.png';

const ListedOn = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Listed on</Title>
        <List>
          <Link
            href="https://dappradar.com/ethereum/collectibles/kool-bar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Item image={dappRadar} mobileImage={dappRadarMobile} />
          </Link>
          <Link
            href="https://www.dapp.com/app/kool-bar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Item image={dapp} mobileImage={dappMobile} />
          </Link>
        </List>
      </Wrapper>
    </Container>
  );
};

export default ListedOn;
