import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0 0 30px 0;
`;

export const Top = styled.div`
  margin-bottom: -105px;
  position: relative;
`;

export const Cover = styled.div`
  width: 271px;
  height: 282px;
  background-image: ${({ background }) => `url(${background})`};
`;

export const Row = styled.div`
  background-color: #f6ea50;
  border: 4px solid #263f26;
  border-radius: 15px;
  padding: 90px 0 30px 0;
`;

export const TitleBlur = styled.div`
  width: 360px;
  height: 61px;
  background-image: ${({ background }) => `url(${background})`};
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 35px;
  line-height: 70px;
  color: #ffffff;
  text-align: center;
`;

export const Content = styled.div`
  padding: 0 20px;
`;

export const Actions = styled.div``;

export const Button = styled.div``;

export const ButtonTitle = styled.p``;

export const ContentItem = styled.div``;

export const ContentTitle = styled.p``;

export const ContentText = styled.p``;
