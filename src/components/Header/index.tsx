import {
  Root as DialogRoot,
  Trigger as DialogTrigger,
  Portal as DialogPortal,
  Overlay as DialogOverlay,
  Content as DialogContent,
  Title as DialogTitle,
  Close as DialogClose,
} from '@radix-ui/react-dialog';
import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles';
import logoImage from '../../assets/logo.svg';

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImage} alt="" />

        <DialogRoot>
          <DialogTrigger asChild>
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </DialogTrigger>
          <DialogPortal>
            <DialogOverlay />

            <DialogContent>
              <DialogTitle>Nova Transação</DialogTitle>
              <DialogClose />
            </DialogContent>
          </DialogPortal>
        </DialogRoot>
      </HeaderContent>
    </HeaderContainer>
  );
}
