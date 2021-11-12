import http from '@framework/utils/http';
import { useQuery } from 'react-query';
import { API_ENDPOINTS } from '@framework/utils/api-endpoints';

const fetchGames = async ({ queryKey }) => {
  const [_key, params] = queryKey;
  const {
    data: { data },
  } = await http.get(API_ENDPOINTS.POPULAR_GAMES, {
    params: { limit: 4, orderBy: 'views', sortedBy: 'desc', ...params },
  });

  return data;
};

export const usePopularGamesQuery = (options) => {
  return useQuery([API_ENDPOINTS.POPULAR_GAMES, options], fetchGames);
};
