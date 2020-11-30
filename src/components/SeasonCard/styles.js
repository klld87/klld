import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0 0 100px 0;
`;

export const Cover = styled.div`
  width: 374px;
  height: 390px;
  background-image: ${({ background }) => `url(${background})`};
  background-size: contain;
  background-repeat: no-repeat;
`;

export const Row = styled.div`
  height: 226px;
  background-color: #f6ea50;
  border: 4px solid rgba(38, 63, 38, 0.36);
  border-radius: 15px;
  width: 100%;
`;

export const Top = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const TitleBlur = styled.div`
  width: 100%;
  height: 102px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 80%;
  margin: -60px 0 0 0;
  background-image: ${({ background }) => `url(${background})`};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 35px;
  line-height: 70px;
  color: #ffffff;
  margin: 0 0 0 30%;
  display: inline-block;
  font-family: 'Kool Beans';
`;

export const Body = styled.div`
  padding-left: 170px;
`;

export const ContentItem = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 0 15px 0;
`;

export const ContentTitle = styled.p`
  margin: 0;
  font-weight: bold;
  font-size: 15px;
  color: #263f26;
`;

export const ContentText = styled.p`
  margin: 0 0 0 5px;
  font-weight: bold;
  font-size: 15px;
  color: #263f26;
`;

export const Footer = styled.div``;

export const Button = styled.div``;

export const ButtonTitle = styled.div``;
