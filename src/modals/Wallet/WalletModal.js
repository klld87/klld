import * as React from 'react';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import { Flex, Box } from 'reflexbox';

import {
  Wrapper,
  Title,
  WalletItem,
  WalletName,
  WalletIcon,
  Button,
  ButtonTitle,
} from './styles';

import metaMaskLogo from '../../images/wallets/metamask.svg';
import walletConnectLogo from '../../images/wallets/walletConnect.svg';

const WalletModal = (props) => {
  const { open, onCloseModal, isWalletUnlocked, onUnlock } = props;

  React.useEffect(() => {
    if (isWalletUnlocked && open) {
      onCloseModal();
    }
  }, [isWalletUnlocked, open, onCloseModal]);

  return (
    <Modal open={open} onClose={onCloseModal} center showCloseIcon={false}>
      <Wrapper>
        <Title>Select a wallet provider</Title>
        <Flex mt={56} mb={51} flexWrap="wrap">
          <Box width={[1, 1, 1 / 2, 1 / 2]} mb={33} pr={[0, 0, '20px', '20px']}>
            <WalletItem>
              <WalletIcon type="metaMask" logo={metaMaskLogo} />
              <WalletName>Metamask</WalletName>
              <Button onClick={() => onUnlock('metaMask')}>
                <ButtonTitle>Connect</ButtonTitle>
              </Button>
            </WalletItem>
          </Box>
          <Box width={[1, 1, 1 / 2, 1 / 2]} pl={[0, 0, '20px', '20px']}>
            <WalletItem>
              <WalletIcon type="walletConnect" logo={walletConnectLogo} />
              <WalletName>WalletConnect</WalletName>
              <Button onClick={() => onUnlock('walletConnect')}>
                <ButtonTitle>Connect</ButtonTitle>
              </Button>
            </WalletItem>
          </Box>
        </Flex>
        <Button onClick={onCloseModal} isCancel>
          <ButtonTitle>Cancel</ButtonTitle>
        </Button>
      </Wrapper>
    </Modal>
  );
};

export default WalletModal;
