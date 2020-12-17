import * as React from 'react';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

// Styles
import {
  Wrapper,
  Title,
  CloseIcon,
  Form,
  FormItem,
  FormItemRow,
  Footer,
  FooterText,
  FormItemText,
} from './styles';

const EnterAmountModal = (props) => {
  const { open, onCloseModal, onSend, limit } = props;

  const [amount, setAmount] = React.useState(1);
  const maxAmount = limit || 10;

  const increment = () => {
    if (amount < maxAmount) {
      setAmount(amount + 1);
    }
  };

  const decrement = () => {
    if (amount > 1) {
      setAmount(amount - 1);
    }
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
        <Title>Enter the amount </Title>
        <CloseIcon onClick={onCloseModal} />
        <Form>
          <FormItem>
            <FormItemRow>
              <FormItemText onClick={decrement}>-</FormItemText>
              <FormItemText>{amount}</FormItemText>
              <FormItemText onClick={increment}>+</FormItemText>
            </FormItemRow>
          </FormItem>
          <FormItem isButton onClick={() => onSend(amount)}>
            <FormItemRow>
              <FormItemText>Get it!</FormItemText>
            </FormItemRow>
          </FormItem>
        </Form>
        <Footer>
          <FooterText>
            The maximum amount one wallet can claim is {maxAmount}
          </FooterText>
        </Footer>
      </Wrapper>
    </Modal>
  );
};

export default EnterAmountModal;
