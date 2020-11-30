import * as React from 'react';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import { Flex, Box } from 'reflexbox';

// Styles
import { Wrapper, Title, CloseIcon, Body } from './styles';

const NFTWalletModal = (props) => {
  const { open, onCloseModal, openNFTBar } = props;

  return (
    <Modal open={open} onClose={onCloseModal} center showCloseIcon={false}>
      <Wrapper>
        <Title>My bar</Title>
        <CloseIcon />
        <Body>
          <Flex>
            <Box>
              <div />
            </Box>
          </Flex>
        </Body>
        {/* <p onClick={openNFTBar}>View my NFTz</p> */}
      </Wrapper>
    </Modal>
  );
};

export default NFTWalletModal;
