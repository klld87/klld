import styled from 'styled-components';

// Backgrounds
import paperBG from '../../images/bgPaper/3.png';
import closeModalIcon from '../../images/closeModalIcon.png';

export const Wrapper = styled.div`
  background-image: url(${paperBG});
  background-size: cover;
  background-repeat: repeat;
  border: 2px solid #263f26;
  border-radius: 15px;
  padding: 60px 40px;
  position: relative;
  background-color: #fbf7e2;

  @media (min-width: 1024px) {
    padding: 80px 70px;
  }
`;

export const Message = styled.p`
  margin: 0;
  font-weight: bold;
  text-align: center;
  color: #263f26;
  font-size: 25px;
  line-height: 35px;

  @media (min-width: 1024px) {
    font-size: 40px;
    line-height: 50px;
  }
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
