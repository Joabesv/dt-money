import { useState } from 'react';
import Modal from 'react-modal';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';
import { NewTransactionModal } from './components/NewTransactionModal/';
import { TransactionsProvider } from './TransactionsContext';

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  const toggleNewTransactionModal = () => {
    setIsNewTransactionModalOpen(!isNewTransactionModalOpen);
  };

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={toggleNewTransactionModal} />

      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={toggleNewTransactionModal}
      />

      <GlobalStyle />
    </TransactionsProvider>
  );
}
