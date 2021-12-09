import { Container } from "./styles";
import { useEffect } from "react";
import { api } from "../../services/api";

export function TransactionTable() {
    useEffect(() => {
        api('/transactions')
        .then(response => console.log(response.data))
    }, []);

    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento</td>
                        <td className="deposit">R$ 1000</td>
                        <td>Programação</td>
                        <td>20/02/2021</td>
                    </tr>
                    <tr>
                        <td>Desenvolvimento</td>
                        <td className="withdraw">R$ -1000</td>
                        <td>Programação</td>
                        <td>20/02/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}