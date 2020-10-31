import styled from 'styled-components';

import koolman from '../../images/koolman.svg';

export const Wrapper = styled.div``;

export const Title = styled.h1`
  font-size: 60px;
  line-height: 55px;
  color: #ffffff;
  text-shadow: 5px 5px 2px #0477b1;
`;

export const KoolMan = styled.div`
  background-image: url(${koolman});
  width: 100%;
  height: 543px;
  background-size: contain;
  background-repeat: no-repeat;
`;

export const Text = styled.p`
  margin: 0;
`;

export const TextLB = styled.span``;
