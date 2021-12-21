import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';

import { Container } from './styles';
import React, { useContext } from 'react';
import { TransactionsContext } from '../../TransactionsContext';



export function Summary() {
    const data = useContext(TransactionsContext);
    console.log(data)
   
    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="" />
                </header>
                <strong>R$1000,00</strong>
            </div>

            <div>
                <header>
                    <p>Entradas</p>
                    <img src={outcomeImg} alt="" />
                </header>
                <strong>R$1000,00</strong>
            </div>

            <div className="highlight-background">
                <header>
                    <p>Entradas</p>
                    <img src={totalImg} alt="" />
                </header>
                <strong>R$1000,00</strong>
            </div>
        </Container>
    )
}