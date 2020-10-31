import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  position: relative;
  display: block;

  @media (min-width: 576px) {
    max-width: 540px;
  }

  @media (max-width: 576px) {
    padding: 0 15px;
  }

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }

  @media (min-width: 1200px) {
    max-width: 1150px;
  }
`;
