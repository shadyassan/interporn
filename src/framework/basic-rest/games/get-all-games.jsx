import http from '@framework/utils/http';
import { useInfiniteQuery } from 'react-query';
import { API_ENDPOINTS } from '@framework/utils/api-endpoints';
import { fetchGames } from './games.query';

export const useGamesQuery = (options = { limit: 12, page: 1, ...rest }) => {
  return useInfiniteQuery([API_ENDPOINTS.GAMES, options], fetchGames, {
    getNextPageParam: ({ pagination }) => {
      return pagination.current_page === pagination.total_pages
        ? false
        : pagination?.links?.next
        ? pagination?.links?.next.replace('http', 'https')
        : false;
    },
  });
};
