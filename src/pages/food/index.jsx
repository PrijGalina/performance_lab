import { useEffect, useState } from 'react'
import ProductsService from '../../api';
import { useFetching } from '../../hooks/useFetching.js';
import { useSorted } from '../../hooks/useSorted.js';
import { ProductList } from '../../components/product-list';
import { PRODUCTS_ON_PAGE } from '../../constants';

export const Food = () => {
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(PRODUCTS_ON_PAGE);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const [fetchFood, isFoodLoading, foodError] = useFetching(async (id) => {
    const response = await ProductsService.getFood();
    const startIndex = (page - 1) * limit;
    const paginatedData = [...response.data.record].slice(startIndex, startIndex + limit);
    setTotalPages(Math.ceil(response.data.record.length / limit));
    setProducts(paginatedData);
  });

  let sort_param = "vendor_code";
  let sort_value = "desc";
 
  const sortedProducts = useSorted(products, sort_param, sort_value);

  useEffect(() => {
    fetchFood();
  }, [page])

  return (
    <>
      {
        isFoodLoading && "loading"
      }
      {
        products.length > 0 && <ProductList data={sortedProducts} changePage={setPage} page={page} totalPages={totalPages}/>
      }
    </>
  )
}