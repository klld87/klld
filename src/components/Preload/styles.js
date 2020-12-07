import styled from 'styled-components';

import image from '../../images/preload.gif';

export const Wrapper = styled.div`
  margin: 90px 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 720px) {
    margin: 230px 0 0 0;
  }
`;

export const Image = styled.div`
  width: 100%;
  height: 243px;
  background-image: url(${image});
  background-size: contain;
  background-repeat: no-repeat;

  @media (min-width: 432px) {
    width: 432px;
  }
`;

export const Title = styled.p`
  margin: 0;
  font-weight: bold;
  font-size: 20px;
  line-height: 28px;
  text-align: center;
  letter-spacing: 0.3em;
  color: #000000;
`;
