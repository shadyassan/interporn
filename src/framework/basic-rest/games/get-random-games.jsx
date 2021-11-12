import http from '@framework/utils/http';
import { useQuery } from 'react-query';
import { API_ENDPOINTS } from '@framework/utils/api-endpoints';

const fetchGames = async ({ queryKey }) => {
  const [_key, params] = queryKey;
  const {
    data: { data },
  } = await http.get(API_ENDPOINTS.RANDOM_GAMES, { params });

  return data;
};

export const useRandomGamesQuery = (options) => {
  return useQuery([API_ENDPOINTS.RANDOM_GAMES, options], fetchGames);
};
