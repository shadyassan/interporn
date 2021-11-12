import { API_ENDPOINTS } from '@framework/utils/api-endpoints';
import http from '@framework/utils/http';
import { useQuery } from 'react-query';

async function fetchMe() {
  return http.get(API_ENDPOINTS.GET_CUSTOMER);
}

export const useCustomerQuery = (options) => {
  return useQuery([API_ENDPOINTS.GET_CUSTOMER, options], fetchMe);
};

const useUser = () => {
  const { data, isLoading, error } = useCustomerQuery();
  return { me: data?.data?.data, loading: isLoading, error };
};

export default useUser;
