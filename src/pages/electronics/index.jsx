import React from 'react'
import { useSelector } from 'react-redux';
import { ProductList } from '../../components/product-list';
import { getData } from '../../redux/slices/data/dataSelectors.js';
import { useSortedAndPagination } from '../../hooks/useSortedAndPagination.js';

export const Electronics = () => {
  const products = useSelector(getData);
  const sortedAndPaginationProducts = useSortedAndPagination(products);

  return React.useMemo(() => {
    return (
      <>
        {
          sortedAndPaginationProducts.length > 0 && <ProductList data={sortedAndPaginationProducts}/>
        }
      </>
    )
  },[sortedAndPaginationProducts])
}