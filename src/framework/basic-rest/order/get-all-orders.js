import http from '@framework/utils/http';
import { useQuery } from 'react-query';
import { API_ENDPOINTS } from '@framework/utils/api-endpoints';

export const fetchOrders = async ({ queryKey }) => {
  const [_key, _params] = queryKey;
  const {
    data: { data },
  } = await http.get(API_ENDPOINTS.ORDERS);
  return data;
};

export const useOrdersQuery = (options) => {
  return useQuery([API_ENDPOINTS.ORDERS, options], fetchOrders);
};
