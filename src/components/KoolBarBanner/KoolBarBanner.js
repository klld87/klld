import * as React from 'react';
import { NavLink } from 'react-router-dom';

import Container from '../Container';

import {
  WelcomeToBar,
  PearFruit,
  BarCover,
  BarButton,
  BarButtonTitle,
  WatermelonFruit,
  ScotchTape,
} from './styles';

const KoolBarBanner = () => {
  return (
    <Container>
      <WelcomeToBar>
        <WatermelonFruit />
        <BarCover>
          <ScotchTape position="top" />
          <NavLink to="/bar">
            <BarButton>
              <BarButtonTitle>CLICK HERE TO ENTER</BarButtonTitle>
            </BarButton>
          </NavLink>
          <ScotchTape position="bottom" />
        </BarCover>
        <PearFruit />
      </WelcomeToBar>
    </Container>
  );
};

export default KoolBarBanner;
