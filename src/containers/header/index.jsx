import { HeaderContainer, CartCounter } from './styled';
import { Navigation } from '../../components/ui/navigation';
import { Logotype } from '../../components/ui/logo';
import { CartIcon } from '../../components/ui/cart-icon';
import { useSelector } from 'react-redux';
import { getData } from '../../redux/slices/cart/cartSelectors.js';

export const Header = () => {
  const cart = useSelector(getData);
  const cartCounter = cart.length;

  return (
    <HeaderContainer>
      <Logotype/>
      <Navigation/>
      <CartCounter>
        {cartCounter}
        <CartIcon/>
      </CartCounter>
    </HeaderContainer>
  )
}