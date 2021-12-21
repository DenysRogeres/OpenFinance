import { GlobalStyled } from './styles/global';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import Modal from 'react-modal';
import { useState } from 'react';
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsProvider } from './TransactionsContext';

export function App() {
  Modal.setAppElement('#root');

  const [isNewTransacationModalOpen, setNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
      setNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
      setNewTransactionModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <GlobalStyled/>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <NewTransactionModal
        isOpen={isNewTransacationModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <Dashboard/>
    </TransactionsProvider>
  );
}

