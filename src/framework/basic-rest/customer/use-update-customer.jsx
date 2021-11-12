import { API_ENDPOINTS } from '@framework/utils/api-endpoints';
import http from '@framework/utils/http';
import { useMutation } from 'react-query';

async function updateUser(input) {
  return http.post(API_ENDPOINTS.UPDATE_CUSTOMER, input);
}

export const useUpdateUserMutation = () => {
  return useMutation((input) => updateUser(input), {
    onSuccess: (data) => {
      console.log(data, 'UpdateUser success response');
    },
    onError: (data) => {
      console.log(data, 'UpdateUser error response');
    },
  });
};
