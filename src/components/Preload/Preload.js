import * as React from 'react';

// Styles
import { Wrapper, Image, Title } from './styles';

const Preload = (props) => {
  const { children } = props;

  const [isShowPreload, setShowPreload] = React.useState(true);

  const pathname = window.location.pathname;
  const allowerURLs = ['/', '/bar'];
  const isAllowedPage = allowerURLs.indexOf(pathname) !== -1;

  React.useEffect(() => {
    if (isAllowedPage) {
      setTimeout(() => {
        setShowPreload(false);
      }, 1500);
    }
  }, [isAllowedPage]);

  if (isShowPreload && isAllowedPage) {
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
