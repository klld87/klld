import styled from 'styled-components';

// Background
import BackgroundImage from '../../images/wallWhereThereIsNothing.png';
import koolMan from '../../images/koolManNotFound.png';

export const Wrapper = styled.div`
  background-image: url(${BackgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  padding: 30px;
  justify-content: center;
  display: flex;

  @media (min-width: 1024px) {
    align-items: center;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1024px) {
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;
  }
`;

export const Image = styled.div`
  width: 308px;
  height: 308px;
  background-image: url(${koolMan});
  background-repeat: no-repeat;
  background-size: cover;

  @media (min-width: 1024px) {
    width: 600px;
    height: 600px;
  }
`;

export const Content = styled.div``;

export const ErrorCode = styled.h1`
  margin: 0;
  font-size: 140px;
  line-height: 161px;
  color: #ffffff;
  text-shadow: -7px 0 #000000, 0 7px #000000, 7px 0 #000000, 0 -7px #000000;
  font-family: 'Kool Beans', 'Comic Sans MS';
  text-align: center;

  @media (min-width: 1024px) {
    font-size: 170px;
    line-height: 195px;
  }
`;

export const NotFoundLabel = styled.h3`
  margin: 0;
  font-size: 70px;
  line-height: 55px;
  color: #ffffff;
  text-shadow: -7px 0 #000000, 0 7px #000000, 7px 0 #000000, 0 -7px #000000;
  font-family: 'Kool Beans', 'Comic Sans MS';
  text-align: center;

  @media (min-width: 1024px) {
    font-size: 80px;
    line-height: 105px;
  }
`;
