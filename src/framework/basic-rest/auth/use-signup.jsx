import Cookies from 'js-cookie';
import http from '@framework/utils/http';
import { API_ENDPOINTS } from '@framework/utils/api-endpoints';
import { useUI } from 'contexts/ui.context';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { isArray } from 'lodash-es';

async function signUp(input) {
  return http.post(API_ENDPOINTS.REGISTER, input);
}

export const useSignUpMutation = () => {
  const { authorize, closeModal } = useUI();
  return useMutation((input) => signUp(input), {
    onSuccess: ({ data }) => {
      if (data.access_token) {
        Cookies.set('inter_access_token', data.access_token);
        authorize();
        closeModal();
      }
    },
    onError: (error) => {
      if (error.response) {
        let errors = '';
        if (Object.keys(error.response?.data?.errors).length > 0) {
          Object.keys(error.response?.data?.errors).map((key) => {
            if (key) {
              if (isArray(error.response.data.errors[key])) {
                error.response.data.errors[key].map((textErr) => {
                  errors += textErr;
                });
              }
            }
          });
          if (errors !== '') {
            toast.error(errors);
          }
        }
      }
    },
  });
};
