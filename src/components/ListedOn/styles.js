import styled from 'styled-components';

import { SectionHeading } from '../../styles/typography';

export const Wrapper = styled.div`
  margin: 0 50px;

  @media (min-width: 1024px) {
    margin: 0 0 110px 0;
  }
`;

export const Title = styled(SectionHeading)``;

export const List = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const Link = styled.a`
  width: 100%;
  height: 100%;

  &:nth-child(even) {
    margin: 16px 0 0 0;
  }

  @media (min-width: 1024px) {
    &:nth-child(odd) {
      margin: 0 16px 0 0;
    }

    &:nth-child(even) {
      margin: 0 0 0 16px;
    }
  }
`;

export const Item = styled.div`
  background-image: ${({ mobileImage }) => `url(${mobileImage})`};
  background-repeat: no-repeat;
  filter: drop-shadow(5px 5px 8px rgba(0, 0, 0, 0.85));
  border-radius: 15px;
  height: 56px;
  background-size: cover;
  background-position: 50% 50%;

  @media (min-width: 1024px) {
    width: 100%;
    height: 107px;
    background-image: ${({ image }) => `url(${image})`};
  }
`;
