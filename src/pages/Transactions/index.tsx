import { useContext } from 'react';
import { Header } from '../../components/Header';
import { Summary } from '../../components/Summary';
import { TransactionsContext } from '../../contexts/TransactionsContext';
import { SearchForm } from './Components/SearchForm/';
import { TransactionsContainer, TransactionsTable, PriceHighlight } from './styles';

export function Transactions() {
  const { transactions } = useContext(TransactionsContext);

  return (
    <>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {transactions.map(({ id, category, type, price, description, createdAt }) => {
              return (
                <tr key={id}>
                  <td width="50%">{category}</td>
                  <td>
                    <PriceHighlight variant={type}>{price}</PriceHighlight>
                  </td>
                  <td>{description}</td>
                  <td>{createdAt}</td>
                </tr>
              );
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </>
  );
}
