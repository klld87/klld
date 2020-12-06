import * as React from 'react';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

// Styles
import { Wrapper, Title, CloseIcon, List, Item, ItemName } from './styles';

// Components
import Parity from '../../components/Parity';

const list = ['very common', 'common', 'uncommon', 'rare', 'super rare'];

const ParityModal = (props) => {
  const { open, onCloseModal } = props;

  return (
    <Modal
      open={open}
      onClose={onCloseModal}
      center
      showCloseIcon={false}
      classNames={{
        modal: 'parityModal',
      }}
    >
      <Wrapper>
        <Title>Parity</Title>
        <CloseIcon onClick={onCloseModal} />
        <List>
          {list.map((item) => (
            <Item key={item}>
              <ItemName>{item}</ItemName>
              <Parity type={item} disabled />
            </Item>
          ))}
        </List>
      </Wrapper>
    </Modal>
  );
};

export default ParityModal;
