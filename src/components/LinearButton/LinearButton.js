import * as React from 'react';

// Styles
import { Wrapper, Button, ButtonTitle, LinkWrapper } from './styles';

const LinearButton = (props) => {
  const { title, type, onClickButton, link, disabled } = props;

  if ((type === 'openSea' || type === 'getOnOpenSea') && link) {
    return (
      <LinkWrapper
        type={type}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button type={type}>
          <ButtonTitle>{title}</ButtonTitle>
        </Button>
      </LinkWrapper>
    );
  }

  return (
    <Wrapper type={type} onClick={onClickButton} disabled={disabled}>
      <Button type={type}>
        <ButtonTitle>{title}</ButtonTitle>
      </Button>
    </Wrapper>
  );
};

export default LinearButton;
