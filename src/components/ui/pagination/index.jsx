import React from 'react';
import { usePagination } from '../../../hooks/usePagination.js';
import { PaginationList, PaginationItem, PaginationLink } from './styled.js';
import { useSelector, useDispatch } from 'react-redux';
import { changeNumberPage } from '../../../redux/slices/main/mainSlice.js';
import { selectLimit, selectNumPage, selectTotalLoaded } from '../../../redux/slices/main/mainSelectors.js';
import { PAGINATION_CLICK_TYPE } from '../../../constants';

export const Pagination = () => {
  let dispatch = useDispatch();
  let currentPage = useSelector(selectNumPage);
  let totalLoaded = useSelector(selectTotalLoaded);
  let limit = useSelector(selectLimit);
  let totalPages = Math.ceil(totalLoaded/limit);

  let handleClickPage = (typeClick, page = 1) => {
    switch (typeClick) {
      case PAGINATION_CLICK_TYPE.Forward:
        currentPage < totalPages && dispatch(changeNumberPage(currentPage + 1));
        break;
      case PAGINATION_CLICK_TYPE.Specific:
        currentPage !== page && dispatch(changeNumberPage(page));
        break;
      case PAGINATION_CLICK_TYPE.Back:
        currentPage > 1 && dispatch(changeNumberPage(currentPage - 1));
        break;
      default:
        break;
    }
  };

  let pagesArray = usePagination(totalPages);

  return React.useMemo(() => {
    return (
      <PaginationList>
        <PaginationItem $isDisabled={currentPage === 1}>
          <PaginationLink onClick={() => handleClickPage(PAGINATION_CLICK_TYPE.Back)} $isDisabled={currentPage === 1}>
            Назад
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
            Вперед
          </PaginationLink>
        </PaginationItem>
      </PaginationList>
    )
  },[pagesArray, currentPage]);
};
