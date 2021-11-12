import { API_ENDPOINTS } from '@framework/utils/api-endpoints';
import http from '@framework/utils/http';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';

async function createOrder(data) {
  return http.post(API_ENDPOINTS.CREATE_ORDER, data);
}

export const useOrderMutation = () => {
  return useMutation((data) => createOrder(data), {
    onSuccess: ({ data }) => {
      toast.success('Thank you. Your order has been received.');
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
