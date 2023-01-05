import { createContext, ReactNode, useEffect, useState } from 'react';

interface Transaction {
  id: number;
  description: string;
  type: 'income' | 'outcome';
  price: number;
  category: string;
  createdAt: string;
}

interface TransactionContextType {
  transactions: Transaction[];
}

interface TransactionsProviderProps {
  children: ReactNode;
}

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export const TransactionsContext = createContext({} as TransactionContextType);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  async function loadTransactions() {
    const url: string = import.meta.env.VITE_SERVER_URL;
    const response = await fetch(`${url}/transactions`);
    const data = await response.json();
    setTransactions(data);
  }

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    loadTransactions();
  }, []);

  return <TransactionsContext.Provider value={{ transactions }}>{children}</TransactionsContext.Provider>;
}
