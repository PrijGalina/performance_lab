import {useMemo} from 'react';
import { SORT_TYPES } from '../constants';
import { useSelector } from 'react-redux';
import { selectLimit, selectNumPage, selectSortParam, selectSortValue } from '../redux/slices/main/mainSelectors';

export const useSorted = (products, param, value) => {
  const sorted = useMemo(() => {
    if(products.length === 0){
      return []
    }

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
  const param = useSelector(selectSortParam);
  const value = useSelector(selectSortValue);
  const pageNumber = useSelector(selectNumPage);
  const sortedProducts = useSorted(products, param, value);
  const limit = useSelector (selectLimit); 
  const startIndex = (pageNumber - 1) * limit;
  const sortedAndPaginatedData = useMemo(() => [...sortedProducts].slice(startIndex, startIndex + limit),[sortedProducts, limit, startIndex]);
  return sortedAndPaginatedData;
}