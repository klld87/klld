import styled from 'styled-components';

export const Wrapper = styled.div`
  background-repeat: repeat, no-repeat;
  background-size: 10px 10px, 100% 100%;
  background-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0.2) 0,
      rgba(0, 0, 0, 0.2) 3px,
      transparent 3px,
      transparent 100%
    ),
    linear-gradient(
      188.62deg,
      rgba(223, 233, 115, 0.55),
      rgba(122, 61, 250, 0.385),
      rgba(250, 61, 73, 0.385),
      rgba(61, 250, 69, 0.385),
      rgba(223, 233, 115, 0.55),
      rgba(122, 61, 250, 0.385),
      rgba(250, 61, 73, 0.385),
      rgba(61, 250, 69, 0.385)
    );
`;
