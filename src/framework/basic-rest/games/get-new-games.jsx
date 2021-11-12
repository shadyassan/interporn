import http from '@framework/utils/http';
import { useQuery } from 'react-query';
import { API_ENDPOINTS } from '@framework/utils/api-endpoints';

const fetchGames = async ({ queryKey }) => {
  const [_key, params] = queryKey;
  const {
    data: { data },
  } = await http.get(API_ENDPOINTS.NEW_GAMES, {
    params: { limit: 4, orderBy: 'created_at', sortedBy: 'desc', ...params },
  });

  return data;
};

export const useNewGamesQuery = (options) => {
  return useQuery([API_ENDPOINTS.NEW_GAMES, options], fetchGames);
};
