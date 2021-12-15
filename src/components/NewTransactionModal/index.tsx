import Modal from 'react-modal';
import { Container, RadioBox, TransactionTypeContainer } from './styles';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { useState } from 'react';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {

    const [type, setType] = useState('deposit');

    return(
        <Modal 
          isOpen={isOpen}
          onRequestClose={onRequestClose}
          overlayClassName="react-modal-overlay"
          className="react-modal-content"
         >
        <div>
            <img src={closeImg} alt="Fechar" onClick={onRequestClose} className="react-modal-close"/>
        </div>
        <Container>
          <h2>Cadastrar transação</h2>

          <form>
              <input type="text" placeholder='Título'/>
              <input type="number" placeholder='Valor'/>
              <TransactionTypeContainer>
                <RadioBox 
                    type="button"
                    isActive={type === 'deposit'} 
                    activeColor={'green'}
                    onClick={() => {setType('deposit')}}
                >
                    <img src={incomeImg} alt="Entrada"/>
                    <span>Entrada</span>
                </RadioBox>
                <RadioBox 
                    type="button"
                    isActive={type === 'withdraw'}
                    activeColor={'red'}
                    onClick={() => {setType('withdraw')}}
                >
                    <img src={outcomeImg} alt="Saída"/>
                    <span>Saída</span>
                </RadioBox>
              </TransactionTypeContainer>
              <input type="text" placeholder='Categoria'/>
              <button type="submit">Cadastrar</button>
          </form>

        </Container>
        </Modal>
    )
}