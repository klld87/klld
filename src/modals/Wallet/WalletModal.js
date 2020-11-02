import * as React from 'react';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import { Flex, Box } from 'reflexbox';

import { Title, WalletItem, WalletIcon, Button, ButtonTitle } from './styles';

const WalletModal = (props) => {
  const { open, onCloseModal } = props;

  const openMetaMask = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
      } catch {}
    }
  };

  return (
    <Modal open={open} onClose={onCloseModal} center showCloseIcon={false}>
      <Title>Select a wallet provider</Title>
      <Flex mt={56} mb={51} flexWrap="wrap">
        <Box width={[1, 1, 1 / 2, 1 / 2]} mb={33}>
          <WalletItem onClick={openMetaMask}>
            <WalletIcon />
            <Button>
              <ButtonTitle>Connect</ButtonTitle>
            </Button>
          </WalletItem>
        </Box>
        <Box width={[1, 1, 1 / 2, 1 / 2]}>
          <WalletItem>
            <WalletIcon />
            <Button>
              <ButtonTitle>Soon</ButtonTitle>
            </Button>
          </WalletItem>
        </Box>
      </Flex>
      <Button>
        <ButtonTitle>Cancel</ButtonTitle>
      </Button>
    </Modal>
  );
};

export default WalletModal;
