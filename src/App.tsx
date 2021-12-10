import { GlobalStyled } from './styles/global';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import Modal from 'react-modal';

export function App() {
  return (
    <>
      <GlobalStyled/>
      <Header/>
      <Modal 
          isOpen={isNewTransacationModalOpen}
          onRequestClose={handleCloseNewTransactionModal}
      >
          <h2>Cdastrar transação</h2>
      </Modal>
      <Dashboard/>
    </>
  );
}

