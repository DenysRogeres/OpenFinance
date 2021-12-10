import { GlobalStyled } from './styles/global';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import Modal from 'react-modal';
import { useState } from 'react';

export function App() {

  const [isNewTransacationModalOpen, setNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
      setNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
      setNewTransactionModalOpen(false);
  }

  return (
    <>
      <GlobalStyled/>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
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

