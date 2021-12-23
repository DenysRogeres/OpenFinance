import Modal from 'react-modal';
import { FormEvent, useState, useContext } from 'react';
import { useTransactions } from '../../hooks/useTransactions';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

import { Container, RadioBox, TransactionTypeContainer } from './styles';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
    const { createTransaction } = useTransactions();

    const [type, setType] = useState('deposit');
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');

    async function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();

        await createTransaction({
            title,
            amount,
            category,
            type
        })

        setType('deposit');
        setTitle('');
        setAmount(0);
        setCategory('');

        onRequestClose();
    }

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
        <Container onSubmit={handleCreateNewTransaction}>
          <h2>Cadastrar transação</h2>
              <input type="text" placeholder='Título' 
                value={title} 
                onChange={event => setTitle(event.target.value)}
                />
              <input type="number" placeholder='Valor' 
                value={amount}
                onChange={event => setAmount(Number(event.target.value))}
                />
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
              <input type="text" placeholder='Categoria' 
                value={category}
                onChange={event => setCategory(event.target.value)}
                />
              <button type="submit">Cadastrar</button>
        </Container>
        </Modal>
    )
}