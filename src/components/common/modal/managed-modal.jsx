import { useUI } from 'contexts/ui.context';
import Modal from './modal';
import dynamic from 'next/dynamic';

const AuthenticationForm = dynamic(() =>
  import('features/authentication-form')
);

const PaymentForm = dynamic(() =>
  import('components/checkout/payment-form/payment-form')
);

const SearchForm = dynamic(() =>
  import('components/search-modal/search-modal')
);

const ManagedModal = () => {
  const { displayModal, closeModal, modalView } = useUI();

  return (
    <Modal open={displayModal} onClose={closeModal}>
      {modalView === 'SIGNIN_VIEW' && <AuthenticationForm view="SIGNIN_VIEW" />}
      {modalView === 'SIGNUP_VIEW' && <AuthenticationForm view="SIGNUP_VIEW" />}
      {modalView === 'FORGOTPASS_VIEW' && (
        <AuthenticationForm view="FORGOTPASS_VIEW" />
      )}
      {modalView === 'PAYMENT_VIEW' && <PaymentForm />}
      {modalView === 'SEARCH_VIEW' && <SearchForm />}
    </Modal>
  );
};

export default ManagedModal;
