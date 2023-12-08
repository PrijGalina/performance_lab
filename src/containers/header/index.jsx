import { HeaderContainer } from './styled';
import { Navigation } from '../../components/ui/navigation';
import { Logotype } from '../../components/ui/logo';
import { CartIcon } from '../../components/ui/cart-icon';

export const Header = () => {
  return (
    <HeaderContainer>
      <Logotype/>
      <Navigation/>
      <CartIcon/>
    </HeaderContainer>
  )
}