import * as React from 'react';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import { Flex, Box } from 'reflexbox';
import QRCode from 'react-qr-code';

// Styles
import {
  Wrapper,
  CloseIcon,
  Title,
  WalletConenctLogo,
  WalletConenctName,
} from './styles';

const WalletConnectModal = (props) => {
  const { open, onCloseModal } = props;

  return (
    <Modal open={open} onClose={onCloseModal} center showCloseIcon={false}>
      <Wrapper>
        <CloseIcon onClick={onCloseModal} />
        <Flex flexWrap="wrap" width="100%">
          <Box
            width={[1, 1, 1 / 2, 1 / 2]}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <WalletConenctLogo />
            <WalletConenctName>Wallet connect</WalletConenctName>
          </Box>
          <Box
            width={[1, 1, 1 / 2, 1 / 2]}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Title>Scan QR code with a WalletConnect-compatible wallet</Title>
            <QRCode size={226} value="test" bgColor="#fbf7e2" />
          </Box>
        </Flex>
      </Wrapper>
    </Modal>
  );
};

export default WalletConnectModal;
