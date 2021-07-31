import { GlobalStyle } from './styles/global';
import { Header } from './components/Header'
import { Dashboard } from './components/Dashboard';
import Modal from 'react-modal';
import { useState } from 'react';

export function App() {
  const [isNewTransactionModalOpen, setNewTransactionModalOpen] = useState(false);
    
    function handleOpenTransactionModal() {
        setNewTransactionModalOpen(true);
    }

    function handleCloseTransactionModal() {
        setNewTransactionModalOpen(false);
    }

  return (
    <div className="App">
      <GlobalStyle />
      <Header onNewTransactionModal = {handleOpenTransactionModal}/>

      <Modal 
        
        isOpen = {isNewTransactionModalOpen}
        onRequestClose = {handleCloseTransactionModal}
        >
        <h2>Cadastrar transaão</h2>
      </Modal>

      <Dashboard />
    </div>
  );
}


