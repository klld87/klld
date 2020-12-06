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
  const { open, onCloseModal } = props;

  const [amount, setAmount] = React.useState(1);

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
              <FormItemText onClick={() => setAmount(amount - 1)}>
                -
              </FormItemText>
              <FormItemText>{amount}</FormItemText>
              <FormItemText onClick={() => setAmount(amount + 1)}>
                +
              </FormItemText>
            </FormItemRow>
          </FormItem>
          <FormItem>
            <FormItemRow>
              <FormItemText>Get it!</FormItemText>
            </FormItemRow>
          </FormItem>
        </Form>
        <Footer>
          <FooterText>The maximum amount one wallet can claim is 10</FooterText>
        </Footer>
      </Wrapper>
    </Modal>
  );
};

export default EnterAmountModal;
