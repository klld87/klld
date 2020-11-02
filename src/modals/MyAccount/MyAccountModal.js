import * as React from 'react';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import { Flex, Box } from 'reflexbox';

import Button from '../../components/Button';

import {
  Wrapper,
  Title,
  Wallet,
  WalletBalance,
  WalletLabel,
  Actions,
  ButtonTitle,
} from './styles';

const MyAccountModal = (props) => {
  const { open, onCloseModal, aidBalance, koolBalance } = props;

  return (
    <Modal open={open} onClose={onCloseModal} center showCloseIcon={false}>
      <Wrapper>
        <Title>My account</Title>
        <Flex flexWrap="wrap">
          <Box width={[1, 1, 1 / 2, 1 / 2]}>
            <Wallet>
              <WalletBalance>{aidBalance}</WalletBalance>
              <WalletLabel>$AID balance</WalletLabel>
            </Wallet>
          </Box>
          <Box width={[1, 1, 1 / 2, 1 / 2]}>
            <Wallet>
              <WalletBalance>{koolBalance}</WalletBalance>
              <WalletLabel>$KOOL balance</WalletLabel>
            </Wallet>
          </Box>
        </Flex>
        <Actions>
          <Flex flexWrap="wrap">
            <Box mb="8px" width={1}>
              <Button>
                <ButtonTitle>View on Etherscan</ButtonTitle>
              </Button>
            </Box>
            <Box mb="8px" width={1}>
              <Button>
                <ButtonTitle>View on Etherscan</ButtonTitle>
              </Button>
            </Box>
            <Box width={1}>
              <Button>
                <ButtonTitle>View on Etherscan</ButtonTitle>
              </Button>
            </Box>
          </Flex>
        </Actions>
      </Wrapper>
    </Modal>
  );
};

export default MyAccountModal;
