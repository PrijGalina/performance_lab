import {useMemo} from 'react';
import { SORT_TYPES, QUANTITY_PER_PAGE } from '../constants';
import { useSelector } from 'react-redux';
import { getNumPage, getSortParam, getSortValue } from '../redux/slices/main/mainSelectors';

export const useSorted = (products, param, value) => {
  const sorted = useMemo(() => {
    if(products.length === 0) return [];
    switch(param){
      case SORT_TYPES.ByPrice:
        switch(value){
          case SORT_TYPES.ByAsc:
            return [...products].sort((a, b) => a[param] - b[param]);
          case SORT_TYPES.ByDesc:
            return [...products].sort((a, b) => b[param] - a[param]);
          default:
            return [...products].sort((a, b) => a[param] - b[param]);
        }
      case SORT_TYPES.ByTitle:
      case SORT_TYPES.ByVendorCode:
        switch(value){
          case SORT_TYPES.ByAsc:
            return [...products].sort((a, b) => a[param].localeCompare(b[param]));
          case SORT_TYPES.ByDesc:
            return [...products].sort((a, b) => b[param].localeCompare(a[param]));
          default:
            return [...products].sort((a, b) => a[param].localeCompare(b[param]));
        }
      default:
        return [...products].sort((a, b) => a[param] - b[param]);
    }
  }, [products, param, value]); 
  return sorted;
}

export const useSortedAndPagination = (products) => {
  const param = useSelector(getSortParam);
  const value = useSelector(getSortValue);
  const pageNumber = useSelector(getNumPage);
  const sortedProducts = useSorted(products, param, value);
  const startIndex = (pageNumber - 1) * QUANTITY_PER_PAGE;
  const sortedAndPaginatedData = useMemo(() => [...sortedProducts].slice(startIndex, startIndex + QUANTITY_PER_PAGE),[sortedProducts, QUANTITY_PER_PAGE, startIndex]);
  return sortedAndPaginatedData;
}