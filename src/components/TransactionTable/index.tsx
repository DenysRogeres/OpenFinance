import { useEffect } from "react"
import { Container } from "./styles"

export function TransactionTable() {

    useEffect(() => {
        fetch('http://localhost:3000/api/transacitons')
        .then(response => response.json())
        .then(data => console.log(data))
    }, []);

    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th className="income">Preço</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento de site</td>
                        <td className="income">R$ 12.000,00</td>
                        <td>Venda</td>
                        <td>13/04/2021</td>
                    </tr>
                    <tr>
                        <td>Hamburger</td>
                        <td className="outcome">- R$ 59,00</td>
                        <td>Alimentação</td>
                        <td>10/04/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}