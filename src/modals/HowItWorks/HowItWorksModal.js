import * as React from 'react';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import { Flex, Box } from 'reflexbox';
import { HashLink } from 'react-router-hash-link';

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
  Link,
} from './styles';

// Emojies
import farmEmoji from '../../images/emoji/farm.png';
import nftEmoji from '../../images/emoji/nft.png';
import cocktailEmoji from '../../images/emoji/cocktail.png';

const HowItWorksModal = (props) => {
  const { open, onCloseModal } = props;

  return (
    <Modal open={open} onClose={onCloseModal} center showCloseIcon={false}>
      <Wrapper>
        <Title>How it works?</Title>
        <CloseIcon onClick={onCloseModal} />
        <Flex flexWrap="wrap" width="100%" pt={[0, 0, '18px', '18px']}>
          <Box
            width={[1, 1, 1 / 3, 1 / 3]}
            pr={[0, 0, '25px', '25px']}
            pb={['40px', '40px', 0, 0]}
          >
            <Item>
              <ItemEmoji image={farmEmoji} />
              <DescriptionRow>
                <Description>
                  Stake $KOOL and KOOL/ETH LP tokens to farm $AID
                </Description>
              </DescriptionRow>
              <Link
                href="https://kool.lol/farm/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>
                  <ButtonTitle>FARM AID</ButtonTitle>
                </Button>
              </Link>
            </Item>
          </Box>
          <Box
            width={[1, 1, 1 / 3, 1 / 3]}
            pl={[0, 0, '25px', '25px']}
            pr={[0, 0, '25px', '25px']}
            pb={['40px', '40px', 0, 0]}
          >
            <Item>
              <ItemEmoji image={nftEmoji} />
              <DescriptionRow>
                <Description>
                  Burn $AID for unique Kool-Aid Flavor NFTz
                </Description>
              </DescriptionRow>
              <HashLink
                to="/bar#card3"
                onClick={onCloseModal}
                style={{ width: '100%' }}
              >
                <Button>
                  <ButtonTitle>GET NFT FLAVOR</ButtonTitle>
                </Button>
              </HashLink>
            </Item>
          </Box>
          <Box width={[1, 1, 1 / 3, 1 / 3]} pl={[0, 0, '25px', '25px']}>
            <Item>
              <ItemEmoji image={cocktailEmoji} />
              <DescriptionRow>
                <Description>
                  Mix NFTz to get rare ERC-1155 cocktails
                </Description>
              </DescriptionRow>
              <HashLink
                to="/bar#mixing"
                onClick={onCloseModal}
                style={{ width: '100%' }}
              >
                <Button>
                  <ButtonTitle>MIX COCKTAILs</ButtonTitle>
                </Button>
              </HashLink>
            </Item>
          </Box>
        </Flex>
        <Footer>
          <FooterText>
            don’t get it? read our{' '}
            <FooterLink
              target="_blank"
              rel="noopener noreferrer"
              href="https://koolbar.medium.com/kool-bar-and-season-1-nfts-9719900a33ff"
            >
              blog post
            </FooterLink>
          </FooterText>
        </Footer>
      </Wrapper>
    </Modal>
  );
};

export default HowItWorksModal;
