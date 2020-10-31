import styled, { css } from 'styled-components';

export const TextStroke = css`
  -webkit-text-stroke: ${({ strokeWidth }) => `${strokeWidth || '4'}px`}
    ${({ strokeColor }) => strokeColor || '#000'};
  text-stroke: ${({ strokeWidth }) => `${strokeWidth || '4'}px`}
    ${({ strokeColor }) => strokeColor || '#000'};
`;

export const SectionHeading = styled.h2`
  margin: 0 0 30px;
  text-align: center;
  font-family: 'Kool Beans';
  font-size: 60px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.3;
  color: #ff8484;
  ${TextStroke};

  text-shadow: 4px 4px 15px rgba(0, 0, 0, 0.5);

  @media (min-width: 1024px) {
    margin-bottom: 50px;
    font-size: 75px;
  }
`;
