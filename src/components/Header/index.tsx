import { Root as DialogRoot, Trigger as DialogTrigger } from '@radix-ui/react-dialog';
import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles';
import logoImage from '../../assets/logo.svg';
import { NewTransactionModal } from '../NewTransactionModal';

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImage} alt="" />

        <DialogRoot>
          <DialogTrigger asChild>
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </DialogTrigger>
          <NewTransactionModal />
        </DialogRoot>
      </HeaderContent>
    </HeaderContainer>
  );
}
