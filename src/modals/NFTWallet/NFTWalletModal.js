import * as React from 'react';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

// Styles
import { Wrapper, Title } from './styles';

const NFTWalletModal = (props) => {
  const { open, onCloseModal, openNFTBar } = props;

  return (
    <Modal open={open} onClose={onCloseModal} center showCloseIcon={false}>
      <Wrapper>
        <Title>Title</Title>
        <p onClick={openNFTBar}>View my NFTz</p>
      </Wrapper>
    </Modal>
  );
};

export default NFTWalletModal;
