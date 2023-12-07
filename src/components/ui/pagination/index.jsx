import { usePagination } from '../../../hooks/usePagination.js';
import { PaginationList, PaginationItem, PaginationLink } from './styled.js';

export const Pagination = ({totalPages, currentPage, changePage}) => {
  let pagesArray = usePagination(totalPages);

  return (
    <PaginationList>
      <PaginationItem disabled={currentPage === 1}>
        <PaginationLink onClick={() => currentPage > 1 && changePage(currentPage - 1)} disabled={currentPage === 1}>
          Назад
        </PaginationLink>
      </PaginationItem>
      {pagesArray.map(page => 
        <PaginationItem key={page} >
          <PaginationLink onClick={() => changePage(page)} isActive={currentPage === page}>
            {page}
          </PaginationLink>
        </PaginationItem>
      )}
      <PaginationItem disabled={currentPage === totalPages}>
        <PaginationLink onClick={() => currentPage < totalPages && changePage(currentPage + 1)} disabled={currentPage === totalPages}>
          Вперед
        </PaginationLink>
      </PaginationItem>
    </PaginationList>
  )
}
