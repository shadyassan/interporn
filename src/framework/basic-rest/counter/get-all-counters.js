import http from '@framework/utils/http';
import { useQuery } from 'react-query';
import { API_ENDPOINTS } from '@framework/utils/api-endpoints';
import { counter } from 'data';

export const fetchCounters = async ({ queryKey }) => {
  const [_key, params] = queryKey;
  return counter;
  // const {
  //   data: { data },
  // } = await http.get(API_ENDPOINTS.COUNTER, { params });
  // return data;
};

export const useCountersQuery = (options) => {
  return useQuery([API_ENDPOINTS.COUNTER, options], fetchCounters);
};
