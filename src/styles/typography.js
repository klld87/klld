import styled, { css } from 'styled-components';

export const TextStroke = css`
  @supports (-webkit-text-stroke: 1px #000) or (text-stroke: 1px #000) {
    -webkit-text-stroke: ${({ textStroke }) => {
        let width = textStroke || '3';
        return `${width > 1 ? width - 1 : '1'}px`;
      }}
      ${({ strokeColor }) => strokeColor || '#000'};

    text-stroke: ${({ textStroke }) => {
        let width = textStroke || '3';
        return `${width > 1 ? width - 1 : '1'}px`;
      }}
      ${({ strokeColor }) => strokeColor || '#000'};

    @media (min-width: 1024px) {
      -webkit-text-stroke: ${({ textStroke }) => `${textStroke || '3'}px`}
        ${({ strokeColor }) => strokeColor || '#000'};

      text-stroke: ${({ textStroke }) => `${textStroke || '3'}px`}
        ${({ strokeColor }) => strokeColor || '#000'};
    }
  }

  @supports not (-webkit-text-stroke: 1px #000) and not (text-stroke: 1px #000) {
    text-shadow: -3px 0 #000000, 0 3px #000000, 3px 0 #000000, 0 -3px #000000;
  }
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
