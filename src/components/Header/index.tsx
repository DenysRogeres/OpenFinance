import { useState } from 'react';
import logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';
import Modal from 'react-modal';

export function Header() {
    const [isNewTransacationModalOpen, setNewTransactionModalOpen] = useState(false);

    function handleOpenNewTransactionModal() {
        setNewTransactionModalOpen(true);
    }

    function handleCloseNewTransactionModal() {
        setNewTransactionModalOpen(false);
    }

    return(
        <Container>
            <Content>
                <img src={logoImg} alt="Logo dt money" />
                <button type="button" onClick={handleOpenNewTransactionModal}>
                    Nova transação
                </button>
            </Content>
        </Container>
    );
}