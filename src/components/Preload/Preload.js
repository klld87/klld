import * as React from 'react';

// Styles
import { Wrapper, Image, Title } from './styles';

const Preload = (props) => {
  const { children } = props;

  const [isShowPreload, setShowPreload] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setShowPreload(false);
    }, 1500);
  }, []);

  if (isShowPreload) {
    return (
      <Wrapper>
        <Image />
        <Title>Loading...</Title>
      </Wrapper>
    );
  }

  return children;
};

export default Preload;
