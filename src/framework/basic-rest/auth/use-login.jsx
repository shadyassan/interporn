import Cookies from 'js-cookie';
import { API_ENDPOINTS } from '@framework/utils/api-endpoints';
import http from '@framework/utils/http';
import { useUI } from 'contexts/ui.context';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';

async function login(input) {
  return http.post(API_ENDPOINTS.LOGIN, input);
}

export const useLoginMutation = () => {
  const { authorize, closeModal } = useUI();
  return useMutation((input) => login(input), {
    onSuccess: ({ data }) => {
      if (data.access_token) {
        Cookies.set('inter_access_token', data.access_token);
        authorize();
        closeModal();
      }
    },
    onError: (error) => {
      if (error.response?.data?.message) {
        toast.error(error.response.data.message);
      }
    },
  });
};
