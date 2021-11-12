import http from '@framework/utils/http';
import { useQuery } from 'react-query';
import { API_ENDPOINTS } from '@framework/utils/api-endpoints';

export const fetchOrder = async (_id) => {
  const { data } = await http.get(`${API_ENDPOINTS.ORDERS}/${_id}`);
  return data.data;
};

export const useOrderQuery = (id) => {
  return useQuery([API_ENDPOINTS.ORDERS, id], () => fetchOrder(id));
};
