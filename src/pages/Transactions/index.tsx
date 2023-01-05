import { Header } from '../../components/Header';
import { Summary } from '../../components/Summary';
import { SearchForm } from './Components/SearchForm/';
import { TransactionsContainer, TransactionsTable, PriceHighlight } from './styles';

export function Transactions() {
  return (
    <>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Web Freelancing</td>
              <td>
                <PriceHighlight variant="income">R$ 12.000,00</PriceHighlight>
              </td>
              <td>Venda</td>
              <td>13/04/2022</td>
            </tr>
            <tr>
              <td width="50%">Rent</td>
              <td>
                <PriceHighlight variant="outcome">- R$ 1.400,00</PriceHighlight>
              </td>
              <td>Monthly</td>
              <td>10/04/2022</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </>
  );
}