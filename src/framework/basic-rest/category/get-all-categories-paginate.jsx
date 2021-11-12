import http from '@framework/utils/http';
import { useInfiniteQuery } from 'react-query';
import { API_ENDPOINTS } from '@framework/utils/api-endpoints';

export const fetchCategories = async ({ queryKey, pageParam }) => {
  const params = queryKey[1];
  let fetchedData = {};

  if (pageParam) {
    const response = await http.get(pageParam);
    fetchedData = response.data;
  } else {
    const response = await http.get(API_ENDPOINTS.CATEGORIES, { params });
    fetchedData = response.data;
  }

  const {
    data,
    meta: { pagination },
  } = fetchedData;

  return {
    data,
    pagination,
  };
};

export const useCategoriesQuery = (options = { limit: 5, page: 1 }) => {
  return useInfiniteQuery(
    [API_ENDPOINTS.CATEGORIES, options],
    fetchCategories,
    {
      getNextPageParam: ({ pagination }) => {
        return pagination.current_page === pagination.total_pages
          ? false
          : pagination?.links?.next
          ? pagination?.links?.next.replace('http', 'https')
          : false;
      },
    }
  );
};
