import * as React from 'react';
import { Flex, Box } from 'reflexbox';

import WalletModal from '../../modals/Wallet';
import MyAccountModal from '../../modals/MyAccount';
import Container from '../Container';

import { Wrapper, BalancesList, WalletBalance, Button } from './styles';

const WalletPanel = (props) => {
  const {
    isWalletUnlocked = false,
    koolBalance = 0,
    aidBalance = 0,
    onUnlock,
    onSignOut,
    userAddress,
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

  const handleSignOut = async () => {
    await onSignOut();
    setAccountModalOpened(false);
  };

  const toggleWalletModal = () => {
    setWalletModalOpened(!isWalletModalOpened);
  };

  const toggleAccountModal = () => {
    setAccountModalOpened(!isAccountModalOpened);
  };

  return (
    <>
      <Wrapper isWalletUnlocked={isWalletUnlocked}>
        <Container>
          <Flex
            flexWrap="wrap"
            justifyContent={isWalletUnlocked ? 'space-between' : 'flex-end'}
            alignItems="center"
            pt={18}
            pb={18}
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
            <Box width={[1, 1, '250px', '250px']} pl={10}>
              <Button onClick={onClickButton}>
                {isWalletUnlocked ? 'my wallet' : 'unlock wallet'}
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
        onSignOut={handleSignOut}
        userAddress={userAddress}
      />
    </>
  );
};

export default WalletPanel;
