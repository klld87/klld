import styled from 'styled-components';

// Backgrounds
import paperBG from '../../images/bgPaper/1.png';
import closeModalIcon from '../../images/closeModalIcon.png';

export const Wrapper = styled.div`
  background-image: url(${paperBG});
  background-size: cover;
  background-repeat: repeat;
  border: 2px solid #263f26;
  border-radius: 15px;
  padding: 35px 40px 20px 40px;
  position: relative;
`;

export const Title = styled.h1`
  margin: 0;
  font-weight: bold;
  font-size: 40px;
  line-height: 40px;
`;

export const CloseIcon = styled.div`
  width: 32px;
  height: 32px;
  background-image: url(${closeModalIcon});
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  top: 25px;
  right: 25px;

  &:hover {
    cursor: pointer;
  }
`;

export const List = styled.div`
  margin: 50px 0 0 0;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 0 20px 0;
  justify-content: center;
`;

export const ItemName = styled.p`
  margin: 0;
  font-weight: bold;
  font-size: 20px;
  line-height: 40px;
  color: #263f26;
  width: 200px;
  text-transform: uppercase;
`;
