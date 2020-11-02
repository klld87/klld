import styled, { css } from 'styled-components';

export const Text = styled.span`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 78px;
  font-size: 24px;
  font-weight: bold;
  line-height: 30px;
  color: #000000;
  box-shadow: 5px 5px 4px rgba(0, 0, 0, 0.5);
  border-radius: 15px;

  @media (min-width: 1024px) {
    font-size: 30px;
  }

  @media (min-width: 1200px) {
    &:hover {
      background-color: ${({ hoverBackground }) =>
        hoverBackground || '#00cb39'};
      cursor: pointer;
    }
  }

  ${({ rainbow }) =>
    rainbow
      ? css`
          background-image: linear-gradient(
            to bottom right,
            #ebff00 20%,
            #05f600 30%,
            #ff4d00 50%,
            #bf36ff 65%
          );

          ${Text} {
            width: calc(100% - 12px);
            height: calc(100% - 12px);
            background-color: #ffe8c5;
            border-radius: 10px;
          }

          @media (min-width: 1200px) {
            &:hover ${Text} {
              background-image: linear-gradient(
                180deg,
                #ebff01 0%,
                #bf36ff 100%
              );
            }
          }
        `
      : css`
          border: ${({ borderColor }) =>
            `6px solid ${borderColor ? `${borderColor}` : '#ffe8c5'}`};
          background-color: #ffe8c5;

          @media (min-width: 1200px) {
            &:hover {
              background-color: ${({ hoverBackground }) =>
                hoverBackground || '#00cb39'};
            }
          }
        `}
`;
