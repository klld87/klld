import * as React from 'react';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import { Flex, Box } from 'reflexbox';

import {
  Wrapper,
  Title,
  Wallet,
  WalletBalance,
  WalletLabel,
  Actions,
  Button,
  ButtonTitle,
} from './styles';

const MyAccountModal = (props) => {
  const { open, onCloseModal, aidBalance, koolBalance } = props;

  return (
    <Modal open={open} onClose={onCloseModal} center showCloseIcon={false}>
      <Wrapper>
        <Title>My account</Title>
        <Flex flexWrap="wrap">
          <Box width={[1, 1, 1 / 2, 1 / 2]} mb={10}>
            <Wallet>
              <WalletBalance>{Number(aidBalance).toFixed(3)}</WalletBalance>
              <WalletLabel>$AID balance</WalletLabel>
            </Wallet>
          </Box>
          <Box width={[1, 1, 1 / 2, 1 / 2]}>
            <Wallet>
              <WalletBalance>{Number(koolBalance).toFixed(3)}</WalletBalance>
              <WalletLabel>$KOOL balance</WalletLabel>
            </Wallet>
          </Box>
        </Flex>
        <Actions>
          <Flex flexWrap="wrap" mb={42}>
            <Box
              mb={['8px', '8px', '14px', '14px']}
              width={1}
              display="flex"
              justifyContent="center"
            >
              <Button>
                <ButtonTitle>View on Etherscan</ButtonTitle>
              </Button>
            </Box>
            <Box
              mb={['8px', '8px', '14px', '14px']}
              width={1}
              display="flex"
              justifyContent="center"
            >
              <Button>
                <ButtonTitle>View my NFTz</ButtonTitle>
              </Button>
            </Box>
            <Box width={1} display="flex" justifyContent="center">
              <Button>
                <ButtonTitle>Sign out</ButtonTitle>
              </Button>
            </Box>
          </Flex>
          <Flex>
            <Box width={1} display="flex" justifyContent="center">
              <Button isCancel onClick={onCloseModal}>
                <ButtonTitle>Cancel</ButtonTitle>
              </Button>
            </Box>
          </Flex>
        </Actions>
      </Wrapper>
    </Modal>
  );
};

export default MyAccountModal;
