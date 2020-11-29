import styled from 'styled-components';

import backgroundImage from '../../images/modalBackground.png';

export const Wrapper = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-repeat: repeat;
  border-radius: 35px;
  padding: 27px 15px;

  @media (min-width: 1024px) {
    padding: 70px 140px;
  }
`;

export const Title = styled.h1``;
