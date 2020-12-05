import * as React from 'react';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import { Flex, Box } from 'reflexbox';

// Styles
import {
  Wrapper,
  Title,
  CloseIcon,
  Item,
  ItemEmoji,
  DescriptionRow,
  Description,
  Button,
  ButtonTitle,
  Footer,
  FooterText,
  FooterLink,
} from './styles';

const HowItWorksModal = (props) => {
  const { open, onCloseModal } = props;

  return (
    <Modal open={open} onClose={onCloseModal} center showCloseIcon={false}>
      <Wrapper>
        <Title>How it works?</Title>
        <CloseIcon onClick={onCloseModal} />
        <Flex flexWrap="wrap" width="100%">
          <Box
            width={[1, 1, 1 / 3, 1 / 3]}
            pr={[0, 0, '25px', '25px']}
            pb={['40px', '40px', 0, 0]}
          >
            <Item>
              <ItemEmoji>🧑‍🌾</ItemEmoji>
              <DescriptionRow>
                <Description>
                  Stake $KOOL and KOOL/ETH LP tokens to farm $AID
                </Description>
              </DescriptionRow>
              <Button>
                <ButtonTitle>FARM AID</ButtonTitle>
              </Button>
            </Item>
          </Box>
          <Box
            width={[1, 1, 1 / 3, 1 / 3]}
            pl={[0, 0, '25px', '25px']}
            pr={[0, 0, '25px', '25px']}
            pb={['40px', '40px', 0, 0]}
          >
            <Item>
              <ItemEmoji>📦</ItemEmoji>
              <DescriptionRow>
                <Description>
                  Burn $AID for unique Kool-Aid Flavor NFTz
                </Description>
              </DescriptionRow>
              <Button>
                <ButtonTitle>GET NFT FLAVOR</ButtonTitle>
              </Button>
            </Item>
          </Box>
          <Box width={[1, 1, 1 / 3, 1 / 3]} pl={[0, 0, '25px', '25px']}>
            <Item>
              <ItemEmoji>🍹</ItemEmoji>
              <DescriptionRow>
                <Description>
                  Mix NFTz to get rare ERC-1155 cocktails
                </Description>
              </DescriptionRow>
              <Button>
                <ButtonTitle>MIX COCKTAILs</ButtonTitle>
              </Button>
            </Item>
          </Box>
        </Flex>
        <Footer>
          <FooterText>
            don’t get it? read our <FooterLink href="#">blog post</FooterLink>
          </FooterText>
        </Footer>
      </Wrapper>
    </Modal>
  );
};

export default HowItWorksModal;
