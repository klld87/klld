import * as React from 'react';
import { Flex, Box } from 'reflexbox';

import WalletModal from '../../modals/Wallet';
import MyAccountModal from '../../modals/MyAccount';
import Container from '../Container';

import {
  Wrapper,
  BalancesList,
  WalletBalance,
  Button,
  ButtonTitle,
} from './styles';

const WalletPanel = (props) => {
  const {
    isWalletUnlocked = false,
    koolBalance = 0,
    aidBalance = 0,
    onUnlock,
  } = props;

  const [isWalletModalOpened, setWalletModalOpened] = React.useState(false);
  const [isAccountModalOpened, setAccountModalOpened] = React.useState(false);

  const onClickButton = () => {
    if (isWalletUnlocked) {
      toggleAccountModal();
    } else {
      toggleWalletModal();
    }
  };

  const toggleWalletModal = () => {
    setWalletModalOpened(!isWalletModalOpened);
  };

  const toggleAccountModal = () => {
    setAccountModalOpened(!isAccountModalOpened);
  };

  return (
    <>
      <Wrapper>
        <Container>
          <Flex
            flexWrap="wrap"
            justifyContent={isWalletUnlocked ? 'space-between' : 'flex-end'}
          >
            {isWalletUnlocked ? (
              <Box width={[1, 1, 'calc(100% - 250px)', 'calc(100% - 250px)']}>
                <BalancesList>
                  <WalletBalance>
                    {Number(koolBalance).toFixed(3)} $KOOL
                  </WalletBalance>
                  <WalletBalance>
                    {Number(aidBalance).toFixed(3)} $AID
                  </WalletBalance>
                </BalancesList>
              </Box>
            ) : null}
            <Box width={[1, 1, '250px', '250px']}>
              <Button onClick={onClickButton}>
                <ButtonTitle>
                  {isWalletUnlocked ? 'my wallet' : 'unlock wallet'}
                </ButtonTitle>
              </Button>
            </Box>
          </Flex>
        </Container>
      </Wrapper>
      <WalletModal
        open={isWalletModalOpened}
        onCloseModal={toggleWalletModal}
        isWalletUnlocked={isWalletUnlocked}
        onUnlock={onUnlock}
      />
      <MyAccountModal
        open={isAccountModalOpened}
        onCloseModal={toggleAccountModal}
        aidBalance={aidBalance}
        koolBalance={koolBalance}
      />
    </>
  );
};

export default WalletPanel;
