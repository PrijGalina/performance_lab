import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setNumberPage } from '../../../redux/slices/main/mainSlice.js';
import { getNumPage, getQuantityOfItem } from '../../../redux/slices/main/mainSelectors.js';
import { usePagination } from '../../../hooks/usePagination.js';
import { PaginationList, PaginationItem, PaginationLink } from './styled.js';
import { PAGINATION_CLICK_TYPE, QUANTITY_PER_PAGE } from '../../../constants';

export const Pagination = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector(getNumPage);
  const quantityOfItem = useSelector(getQuantityOfItem);
  const totalPages = Math.ceil(quantityOfItem/QUANTITY_PER_PAGE);
  const pagesArray = usePagination(totalPages);

  const handleClickPage = (typeClick, page = 1) => {
    switch (typeClick) {
      case PAGINATION_CLICK_TYPE.Forward:
        currentPage < totalPages && dispatch(setNumberPage(currentPage + 1));
        break;
      case PAGINATION_CLICK_TYPE.Specific:
        currentPage !== page && dispatch(setNumberPage(page));
        break;
      case PAGINATION_CLICK_TYPE.Back:
        currentPage > 1 && dispatch(setNumberPage(currentPage - 1));
        break;
      default:
        break;
    }
  };
  
  return React.useMemo(() => {
    return (
      <PaginationList>
        <PaginationItem $isDisabled={currentPage === 1}>
          <PaginationLink onClick={() => handleClickPage(PAGINATION_CLICK_TYPE.Back)} $isDisabled={currentPage === 1}>
            Prev
          </PaginationLink>
        </PaginationItem>
        {pagesArray.map(page => 
          <PaginationItem key={page} >
            <PaginationLink onClick={() => handleClickPage(PAGINATION_CLICK_TYPE.Specific, page)} $isActive={currentPage === page}>
              {page}
            </PaginationLink>
          </PaginationItem>
        )}
        <PaginationItem $isDisabled={currentPage === totalPages}>
          <PaginationLink onClick={() => currentPage < totalPages && handleClickPage(PAGINATION_CLICK_TYPE.Forward)} $isDisabled={currentPage === totalPages}>
            Next
          </PaginationLink>
        </PaginationItem>
      </PaginationList>
    )
  },[pagesArray, currentPage]);
};
