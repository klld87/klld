import * as React from 'react';

// Styles
import { Wrapper } from './styles';

const BarHeader = (props) => {
  const { onOpenNFTWalletModal } = props;

  return (
    <Wrapper>
      <div onClick={onOpenNFTWalletModal}>
        <p>My wallet</p>
      </div>
    </Wrapper>
  );
};

export default BarHeader;
