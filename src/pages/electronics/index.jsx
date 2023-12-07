import { useEffect, useState } from 'react'
import ProductsService from '../../api';
import { useFetching } from '../../hooks/useFetching.js';
import { ProductList } from '../../components/product-list';
import { useSorted } from '../../hooks/useSorted.js';
import { PRODUCTS_ON_PAGE } from '../../constants';

export const Electronics = () => {
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(PRODUCTS_ON_PAGE);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const [fetchElectronics, isElectronicsLoading, electronicsError] = useFetching(async (id) => {
    const response = await ProductsService.getElectronics();
    const startIndex = (page - 1) * limit;
    const paginatedData = [...response.data.record].slice(startIndex, startIndex + limit);
    setTotalPages(Math.ceil(response.data.record.length / limit));
    setProducts(paginatedData);
  });

  let sort_param = "price";
  let sort_value = "asc";

  const sortedProducts = useSorted(products, sort_param, sort_value);

  useEffect(() => {
    fetchElectronics();
  }, [page])

  return (
    <>
      {
        isElectronicsLoading && "loading"
      }
      {
        products.length > 0 && <ProductList data={sortedProducts}  changePage={setPage} page={page} totalPages={totalPages}/>
      }
    </>
  )
}