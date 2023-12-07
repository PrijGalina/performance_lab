import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { ProductsService } from '../../api';
import { ProductList } from '../../components/product-list';
import { changeTotalLoaded } from '../../redux/slices/main/mainSlice.js';
import { selectProducts } from '../../redux/slices/products/productsSelectors.js';
import { loadProducts } from '../../redux/slices/products/productsSlice.js';
import { useFetching } from '../../hooks/useFetching.js';
import { useSortedAndPagination } from '../../hooks/useSortedAndPagination.js';

export const Food = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const sortedAndPaginationProducts = useSortedAndPagination(products);

  const [fetchFood, isFoodLoading, foodError] = useFetching(async () => {
    const response = await ProductsService.getFood();
    dispatch(loadProducts(response.data.record));
    dispatch(changeTotalLoaded(response.data.record.length));
  });

  useEffect(() => {
    fetchFood(); 
  },[])

  return React.useMemo(() => {
    return (
      <>
        {
          isFoodLoading && "loading"
        }
        {
           sortedAndPaginationProducts.length > 0 && <ProductList data={sortedAndPaginationProducts}/>
        }
      </>
    )
    
  }, [sortedAndPaginationProducts, isFoodLoading]);
 
}