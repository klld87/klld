import styled from 'styled-components';

import koolman from '../../images/koolman.svg';

export const Wrapper = styled.div`
  @media (min-width: 1024px) {
    margin: 73px 0 0 0;
  }
`;

export const TitleRow = styled.div`
  position: relative;
`;

export const Title = styled.h1`
  font-size: 60px;
  line-height: 55px;
  color: #ffffff;
  text-shadow: 5px 5px 2px #0477b1;
`;

export const Sign = styled.div`
  width: 108px;
  height: 125px;
  background-color: red;
  position: absolute;
  top: 0;
  right: 0;
`;

export const KoolManRow = styled.div`
  width: 915px;
  height: 543px;
  position: absolute;
  left: 0;
`;

export const KoolMan = styled.div`
  background-image: url(${koolman});
  width: 100%;
  height: 100%;
  background-size: contain;
  background-repeat: no-repeat;
`;

export const Text = styled.p`
  margin: 0;
`;

export const TextLB = styled.span``;
