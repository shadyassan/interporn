import { API_ENDPOINTS } from '@framework/utils/api-endpoints';
import http from '@framework/utils/http';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';

async function changePassword(input) {
  return http.post(API_ENDPOINTS.CHANGE_PASSWORD, input);
}

export const useChangePasswordMutation = () => {
  return useMutation((input) => changePassword(input), {
    onSuccess: (data) => {
      toast.success('Password changed');
    },
    onError: (data) => {
      toast.error('Password changed failed');
    },
  });
};
