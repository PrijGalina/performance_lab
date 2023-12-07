import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { ProductsService } from '../../api';
import { ProductList } from '../../components/product-list';
import { changeTotalLoaded } from '../../redux/slices/main/mainSlice.js';
import { selectProducts } from '../../redux/slices/products/productsSelectors.js';
import { loadProducts } from '../../redux/slices/products/productsSlice.js';
import { useSortedAndPagination } from '../../hooks/useSortedAndPagination.js';
import { useFetching } from '../../hooks/useFetching.js';


export const Cloth = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const sortedAndPaginationProducts = useSortedAndPagination(products);

  const [fetchCloth, isClothLoading, clothError] = useFetching(async () => {
    const response = await ProductsService.getCloth();
    dispatch(loadProducts(response.data.record));
    dispatch(changeTotalLoaded(response.data.record.length));
  });

  useEffect(() => {
    fetchCloth();
  }, [])

  return React.useMemo(() => {
    return (
      <>
        {
          isClothLoading && "loading"
        }
        {
          sortedAndPaginationProducts.length > 0 && <ProductList data={sortedAndPaginationProducts}/>
        }
      </>
    )
  },[isClothLoading, sortedAndPaginationProducts]);
}