import * as React from 'react';

// Components
import Container from '../../components/Container';

// Styles
import {
  Wrapper,
  Row,
  Image,
  Content,
  ErrorCode,
  NotFoundLabel,
} from './styles';

const NotFound = () => {
  React.useEffect(() => {
    document.title = '404 Not Found';
  }, []);

  return (
    <Wrapper>
      <Container>
        <Row>
          <Image />
          <Content>
            <ErrorCode>404</ErrorCode>
            <NotFoundLabel>Page not found</NotFoundLabel>
          </Content>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default NotFound;
