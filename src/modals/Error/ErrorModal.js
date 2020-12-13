import * as React from 'react';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

// Styles
import { Wrapper, Message, CloseIcon } from './styles';

const ErrorModal = (props) => {
  const { open, onCloseModal, errorMessage } = props;

  return (
    <Modal
      open={open}
      onClose={onCloseModal}
      center
      showCloseIcon={false}
      classNames={{
        modal: 'enterAmountModal',
      }}
    >
      <Wrapper>
        <CloseIcon onClick={onCloseModal} />
        <Message>
          {errorMessage === 'execution reverted: 10 NFT per wallet'
            ? 'You have reached the limit of 10 NFTz for this flavor'
            : 'Failed transaction. Please, retry'}
        </Message>
      </Wrapper>
    </Modal>
  );
};

export default ErrorModal;
