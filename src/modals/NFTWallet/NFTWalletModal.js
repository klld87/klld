import * as React from 'react';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import { Flex, Box } from 'reflexbox';

// Styles
import {
  Wrapper,
  Title,
  CloseIcon,
  Body,
  BalanceBlock,
  BalanceValue,
  BalanceType,
  HarvestBlock,
  Button,
  ButtonTitle,
  Footer,
  Link,
} from './styles';

const NFTWalletModal = (props) => {
  const {
    open,
    onCloseModal,
    openNFTBar,
    koolBalance,
    aidBalance,
    aidHarvest,
    onSignOut,
    userAddress,
  } = props;

  return (
    <Modal open={open} onClose={onCloseModal} showCloseIcon={false}>
      <Wrapper>
        <Title>My bar</Title>
        <CloseIcon onClick={onCloseModal} />
        <Body>
          <Flex flexWrap="wrap" width="100%">
            <Box width={[1, 1, 1 / 2, 1 / 2]}>
              <BalanceBlock>
                <BalanceValue>{Number(aidBalance).toFixed(2)}</BalanceValue>
                <BalanceType>$AID balance</BalanceType>
              </BalanceBlock>
            </Box>
            <Box width={[1, 1, 1 / 2, 1 / 2]}>
              <BalanceBlock>
                <BalanceValue>{Number(koolBalance).toFixed(2)}</BalanceValue>
                <BalanceType>$KOOL balance</BalanceType>
              </BalanceBlock>
            </Box>
          </Flex>
          <HarvestBlock>
            <BalanceValue>{Number(aidHarvest).toFixed(2)}</BalanceValue>
            <BalanceType>$AID available for harvest </BalanceType>
          </HarvestBlock>
          <Flex flexWrap="wrap" width="100%">
            <Box width={[1, 1, 1 / 2, 1 / 2]} pr={[0, 0, '35px', '35px']}>
              <Button>
                <ButtonTitle>Harvest AID</ButtonTitle>
              </Button>
              <Link
                href="https://opensea.io/collection/kool-bar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>
                  <ButtonTitle>Visit OPENSEA</ButtonTitle>
                </Button>
              </Link>

              <Link
                href="https://kool.lol/farm/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>
                  <ButtonTitle>Visit AID farm</ButtonTitle>
                </Button>
              </Link>
            </Box>
            <Box width={[1, 1, 1 / 2, 1 / 2]} pl={[0, 0, '35px', '35px']}>
              <Link
                href={`https://etherscan.io/address/${userAddress}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>
                  <ButtonTitle>View on Etherscan</ButtonTitle>
                </Button>
              </Link>
              <Button onClick={openNFTBar}>
                <ButtonTitle>View my NFTz</ButtonTitle>
              </Button>
              <Button onClick={onSignOut}>
                <ButtonTitle>Sign out</ButtonTitle>
              </Button>
            </Box>
          </Flex>
          <Footer>
            <Button onClick={onCloseModal} isCancel>
              <ButtonTitle isCancel>Cancel</ButtonTitle>
            </Button>
          </Footer>
        </Body>
      </Wrapper>
    </Modal>
  );
};

export default NFTWalletModal;
