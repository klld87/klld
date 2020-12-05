import * as React from 'react';

import { Wrapper, Button } from './styles';

const ScrollToTopButton = () => {
  const [showScroll, setShowScroll] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return function cleanup() {
      window.removeEventListener('scroll', checkScrollTop);
    };
  });

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (showScroll) {
    return (
      <Wrapper>
        <Button onClick={scrollTop} />
      </Wrapper>
    );
  }

  return null;
};

export default ScrollToTopButton;
