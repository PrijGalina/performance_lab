import { 
  ProductListContainer, 
  ProductItem, 
  ProductTop, 
  ProductInfo, 
  ProductImage, 
  ProductOverlay, 
  ProductButton, 
  ProductTitle, 
  ProductPrice, 
  ProductArticles 
} from './styled';
import { Pagination } from '../ui/pagination';
import { useDispatch, useSelector } from 'react-redux';
import { setData } from '../../redux/slices/cart/cartSlice.js';
import { getData } from '../../redux/slices/cart/cartSelectors.js';

function containsObject(arr, obj) {
  return arr.some(item => JSON.stringify(item) === JSON.stringify(obj));
}

export const ProductList = ({data}) => {
  const dispatch = useDispatch();
  let cart = useSelector(getData);

  const handleToCartClick = (item) => {
    dispatch(setData(item));
  }

  const isAlreadyInCartFunc = (product) => {
    return containsObject(cart, product);
  }

  return (
    <>
      <ProductListContainer>
        {
          data.map((product) => {
            const isAlreadyInCart = isAlreadyInCartFunc(product);
            return (
              <ProductItem key={product.id}>
                <ProductTop $isAlreadyInCart={isAlreadyInCart}>
                  <ProductImage src={product.img} width="300" height="190" alt={product.title}/>
                  <ProductOverlay>
                    <ProductButton type="button" aria-label={`Add ${product.title} in cart`} onClick={() => handleToCartClick(product)} $isAlreadyInCart={isAlreadyInCart}>
                      {isAlreadyInCart ? 'In the cart' : 'Add to cart'}
                    </ProductButton>
                  </ProductOverlay>
                </ProductTop>
                <ProductInfo>
                  <ProductTitle>{product.title}</ProductTitle>
                  <ProductArticles>{product.vendor_code}</ProductArticles>
                  <ProductPrice>{product.price} €</ProductPrice>
                </ProductInfo>
              </ProductItem>
            )
          })
        }
      </ProductListContainer>
      <Pagination/> 
    </>
  )
}