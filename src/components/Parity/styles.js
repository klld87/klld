import styled from 'styled-components';

const getBackground = (type) => {
  let background;

  switch (type) {
    case 'very common':
      background = '0deg, rgba(186, 186, 186, 0.65), rgba(186, 186, 186, 0.65)';
      break;
    case 'common':
      background = '0deg, rgba(90, 233, 104, 0.65), rgba(90, 233, 104, 0.65)';
      break;
    case 'uncommon':
      background = '0deg, rgba(113, 135, 255, 0.65), rgba(113, 135, 255, 0.65)';
      break;
    case 'rare':
      background = '0deg, rgba(83, 0, 90, 0.65), rgba(83, 0, 90, 0.65)';
      break;
    case 'super rare':
      background = '0deg, rgba(255, 237, 76, 0.65), rgba(255, 237, 76, 0.65)';
      break;
    case 'common flavor':
      background = '0deg, rgba(90, 233, 104, 0.65), rgba(90, 233, 104, 0.65)';
      break;
    default:
      background = '';
      break;
  }
  return background;
};

export const Wrapper = styled.div`
  width: 45px;
  height: 45px;
  background: ${({ type }) => `linear-gradient(${getBackground(type)})`};
  border-radius: 100%;
  border: 2px solid #263f26;

  &:hover {
    cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  }
`;
