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

export const ProductList = ({data}) => {
  return (
    <>
      <ProductListContainer>
        {
          data.map((product) => {
            return (
              <ProductItem key={product.id}>
                <ProductTop>
                  <ProductImage src={product.img} width="300" height="190" alt={product.title}/>
                  <ProductOverlay>
                    <ProductButton type="button" aria-label={`Add ${product.title} in cart`}>Add to cart</ProductButton>
                  </ProductOverlay>
                </ProductTop>
                <ProductInfo>
                  <ProductTitle>{product.title}</ProductTitle>
                  <ProductArticles>{product.vendor_code}</ProductArticles>
                  <ProductPrice>{product.price}€</ProductPrice>
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