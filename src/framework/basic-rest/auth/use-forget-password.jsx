import http from '@framework/utils/http';
import { API_ENDPOINTS } from '@framework/utils/api-endpoints';
import { useMutation } from 'react-query';

async function forgetPassword() {
  // return http.post(API_ENDPOINTS.LOGIN, input);
  return {
    ok: true,
    message: 'Forget password Successful!',
  };
}
export const useForgetPasswordMutation = () => {
  return useMutation(() => forgetPassword(), {
    onSuccess: (_data) => {},
    onError: (data) => {
      console.log(data, 'forget password error response');
    },
  });
};
