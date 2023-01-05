import { Portal as DialogPortal, Title as DialogTitle } from '@radix-ui/react-dialog';
import { X } from 'phosphor-react';
import { ClosedButton, Content, Overlay } from './styles';

export function NewTransactionModal() {
  return (
    <>
      <DialogPortal>
        <Overlay />

        <Content>
          <DialogTitle>Nova Transação</DialogTitle>

          <ClosedButton>
            <X />
          </ClosedButton>

          <form>
            <input type="text" placeholder="Descrição" required />
            <input type="number" placeholder="Preço" required />
            <input type="text" placeholder="Categoria" required />

            <button type="submit">Cadastrar</button>
          </form>
        </Content>
      </DialogPortal>
    </>
  );
}
