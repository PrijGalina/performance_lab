import {useMemo} from 'react';
import { SORT_PARAM, SORT_VALUE } from '../constants';

export const useSorted = (products, param, value) => {
  const sortedPosts = useMemo(() => {
    switch(param){
      case SORT_PARAM[0].value: //by-price
        switch(value){
          case SORT_VALUE[0].type: //asc
            return [...products].sort((a, b) => a[param] - b[param]);
          case SORT_VALUE[1].type: //desc
            return [...products].sort((a, b) => b[param] - a[param]);
          default:
            break;
        }
        break;
      case SORT_PARAM[1].value: //by-name
      case SORT_PARAM[2].value: //by-vendor-code
        switch(value){
          case SORT_VALUE[0].type: //asc
            return [...products].sort((a, b) => a[param].localeCompare(b[param]));
          case SORT_VALUE[1].type: //desc
            return [...products].sort((a, b) => b[param].localeCompare(a[param]));
          default:
            break;
        }
        break;
      default:
        break;
    }

    return products
  }, [param, products, value]); 

  return sortedPosts;
}