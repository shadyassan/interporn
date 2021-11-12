import http from '@framework/utils/http';
import { API_ENDPOINTS } from '@framework/utils/api-endpoints';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';

async function changeEmail(input) {
  return http.post(API_ENDPOINTS.CHANGE_EMAIL, input);
}

export const useChangeEmailMutation = () => {
  return useMutation((input) => changeEmail(input), {
    onSuccess: (data) => {
      toast.success('Email changed');
    },
    onError: (data) => {
      toast.error('Email changed failed');
    },
  });
};
