import styled from 'styled-components';

// Backgrounds
import paperBG from '../../images/bgPaper/2.png';
import closeModalIcon from '../../images/closeModalIcon.png';

export const Wrapper = styled.div`
  background-image: url(${paperBG});
  background-size: cover;
  background-repeat: repeat;
  border: 2px solid #263f26;
  border-radius: 15px;
  padding: 35px 70px 20px 70px;
  position: relative;
`;

export const Title = styled.h1`
  margin: 0;
  font-weight: bold;
  font-size: 40px;
  line-height: 40px;
  color: #263f26;
  text-align: center;
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

export const Form = styled.div`
  margin: 35px 0 0 0;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const FormItem = styled.div`
  background: linear-gradient(180deg, #ffd601 0%, #84e982 51.56%, #dc3b6c 100%);
  backdrop-filter: blur(10px);
  width: 310px;
  height: 70px;
  padding: 6px;
  border-radius: 15px;

  @media (min-width: 1024px) {
    &:nth-child(1) {
      margin: 0 15px 0 0;
    }

    &:nth-child(2) {
      margin: 0 0 0 15px;
    }
  }
`;

export const FormItemRow = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fbf7e2;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Footer = styled.div`
  margin: 25px 0 0 0;
`;

export const FooterText = styled.p`
  margin: 0;
  font-weight: bold;
  font-size: 24px;
  line-height: 40px;
  text-align: center;
  color: #233a23;
`;

export const FormItemText = styled.p`
  font-weight: bold;
  font-size: 40px;
  line-height: 40px;
  color: #263f26;
  margin: 0;
`;
