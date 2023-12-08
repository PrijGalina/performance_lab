import { useSelector, useDispatch } from 'react-redux';
import { getSidebarVisibility, getData } from '../../redux/slices/cart/cartSelectors.js';
import { resetData, setSidebarVisibility } from '../../redux/slices/cart/cartSlice.js';
import { CloseIcon } from '../../components/ui/close-icon';
import { 
  SidebarContainer, 
  CartList, 
  CartItem, 
  CartTitle, 
  CartItemNum, 
  CartItemTitle, 
  CartItemPrice,
  TotalContainer,
  TotalPrice,
  TotalTitle,
  BtnContainer,
  ByuBtn,
  InfoContainer,
} from './styled';

export const Sidebar = () => {
  const dispatch = useDispatch();
  const currentVisibility = useSelector(getSidebarVisibility);
  const cartData = useSelector(getData);
  const disabledBtn = cartData.length === 0 ? true : false;
  const pricesArr = [];

  const handleResetClick = () => {
    if (cartData.length === 0) {
      dispatch(setSidebarVisibility(false));
      return;
    }
    dispatch(resetData());
    dispatch(setSidebarVisibility(false));
  };

  const calculationTotalPrice = (array) => {
    return array.reduce((acc, value) =>  {
      return acc += Number(value);
    },0).toFixed(2);
  }

  return (
    <SidebarContainer $visible={currentVisibility}>
      <InfoContainer $visible={currentVisibility}>
        <CartTitle key="cart-title">
          In your cart:
          <CloseIcon/>
        </CartTitle>
        <CartList key="cart-list">
          {
            cartData.map((item, index) => {
              pricesArr.push(item.price);
              return (
                <CartItem key={item.id}>
                  <CartItemNum>
                    {index + 1}.
                  </CartItemNum>
                  <CartItemTitle>
                    {item.title}
                  </CartItemTitle>
                  <CartItemPrice>
                    {item.price} €
                  </CartItemPrice>
                </CartItem>
              )
            })
          }
        </CartList>
      </InfoContainer>  
      <TotalContainer $visible={currentVisibility}>
        <TotalTitle>Total price:</TotalTitle>
        <TotalPrice>{calculationTotalPrice(pricesArr)} €</TotalPrice>
      </TotalContainer>
      <BtnContainer $visible={currentVisibility}>
        <ByuBtn $position="left" onClick={handleResetClick} $isDisabled={disabledBtn}>Reset</ByuBtn>
        <ByuBtn $position="right" $isDisabled={disabledBtn}>Buy</ByuBtn>
      </BtnContainer>
    </SidebarContainer>
  )
}