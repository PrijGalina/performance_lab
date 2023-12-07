import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { ProductsService } from '../../api';
import { ProductList } from '../../components/product-list';
import { changeTotalLoaded } from '../../redux/slices/main/mainSlice.js';
import { selectProducts } from '../../redux/slices/products/productsSelectors.js';
import { loadProducts } from '../../redux/slices/products/productsSlice.js';
import { useFetching } from '../../hooks/useFetching.js';
import { useSortedAndPagination } from '../../hooks/useSortedAndPagination.js';

export const Electronics = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const sortedAndPaginationProducts = useSortedAndPagination(products);

  const [fetchElectronics, isElectronicsLoading, electronicsError] = useFetching(async () => {
    const response = await ProductsService.getElectronics();
    dispatch(loadProducts(response.data.record));
    dispatch(changeTotalLoaded(response.data.record.length));
  });

  useEffect(() => {
    fetchElectronics();
  }, [])

  return React.useMemo(() => {
    return (
      <>
        {
          isElectronicsLoading && "loading"
        }
        {
          sortedAndPaginationProducts.length > 0 && <ProductList data={sortedAndPaginationProducts}/>
        }
      </>
    )
  },[sortedAndPaginationProducts, isElectronicsLoading])
}