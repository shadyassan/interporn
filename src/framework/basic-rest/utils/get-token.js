import Cookies from 'js-cookie';

export const getToken = () => {
  if (typeof window === undefined) {
    return null;
  }
  return Cookies.get('inter_access_token');
};
