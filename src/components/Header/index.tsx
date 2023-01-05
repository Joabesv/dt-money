import { HeaderContainer, HeaderContent } from './styles';
import logoImage from '../../assets/logo.svg';

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImage} alt="" />
        <button>Nova transação</button>
      </HeaderContent>
    </HeaderContainer>
  );
}
