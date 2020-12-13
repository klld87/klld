import * as React from 'react';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

// Styles
import { Wrapper, Message, CloseIcon } from './styles';

const ErrorModal = (props) => {
  const { open, onCloseModal, errorMessage } = props;

  const getMessage = () => {
    if (errorMessage === 'execution reverted: 10 NFT per wallet') {
      return 'You have reached the limit of 10 NFTz for this flavor';
    } else if (errorMessage === 'execution reverted: 1 NFT per wallet') {
      return 'You have reached the limit of 1 NFT for this flavor';
    }
    return 'Failed transaction. Please, retry';
  };

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
        <Message>{getMessage()}</Message>
      </Wrapper>
    </Modal>
  );
};

export default ErrorModal;
