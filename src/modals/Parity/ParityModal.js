import * as React from 'react';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

const ParityModal = (props) => {
  const { open, onCloseModal } = props;

  return (
    <Modal
      open={open}
      onClose={onCloseModal}
      center
      showCloseIcon={false}
      className="parityModal"
    >
      <p>LOL</p>
    </Modal>
  );
};

export default ParityModal;
