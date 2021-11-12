import http from '@framework/utils/http';
import { useQuery } from 'react-query';
import { API_ENDPOINTS } from '@framework/utils/api-endpoints';

export const fetchCategories = async ({ queryKey }) => {
  const [_key, params] = queryKey;
  const {
    data: { data },
  } = await http.get(API_ENDPOINTS.CATEGORIES, {
    params,
  });
  return data;
};

export const useCategoriesQuery = (options) => {
  return useQuery([API_ENDPOINTS.CATEGORIES, options], fetchCategories);
};
