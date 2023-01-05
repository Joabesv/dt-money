import { Portal as DialogPortal, Title as DialogTitle } from '@radix-ui/react-dialog';
import { X, ArrowCircleUp, ArrowCircleDown } from 'phosphor-react';
import { ClosedButton, Content, Overlay, TransactionType, TransactionTypeButton } from './styles';

export function NewTransactionModal() {
  return (
    <>
      <DialogPortal>
        <Overlay />

        <Content>
          <DialogTitle>Nova Transação</DialogTitle>

          <ClosedButton>
            <X size={24} />
          </ClosedButton>

          <form>
            <input type="text" placeholder="Descrição" required />
            <input type="number" placeholder="Preço" required />
            <input type="text" placeholder="Categoria" required />

            <TransactionType>
              <TransactionTypeButton variant="income">
                <ArrowCircleUp size={24} />
                Entrada
              </TransactionTypeButton>

              <TransactionTypeButton variant="outcome">
                <ArrowCircleDown size={24} />
                Saída
              </TransactionTypeButton>
            </TransactionType>

            <button type="submit">Cadastrar</button>
          </form>
        </Content>
      </DialogPortal>
    </>
  );
}
