import http from '@framework/utils/http';
import { API_ENDPOINTS } from '@framework/utils/api-endpoints';
import { useQuery } from 'react-query';

async function getCustomer() {
  return http.get(API_ENDPOINTS.GET_CUSTOMER);
}

export const useGetCustomer = (options) => {
  return useQuery([API_ENDPOINTS.GET_CUSTOMER, options], getCustomer);
};
