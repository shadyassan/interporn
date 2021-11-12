import http from '@framework/utils/http';
import { useMutation } from 'react-query';
import { API_ENDPOINTS } from '@framework/utils/api-endpoints';
import { toast } from 'react-toastify';

async function sendContactForm(input) {
  const {
    data: { data },
  } = await http.post(API_ENDPOINTS.CONTACTS, input);
  return data;
}

export const useContactFormMutation = () => {
  return useMutation((input) => sendContactForm(input), {
    onSuccess: (data) => {
      if (data?.id) {
        toast.success('Thank you for contacting us.');
      }
    },
    onError: (e) => {
      toast.error(e.message);
    },
  });
};
