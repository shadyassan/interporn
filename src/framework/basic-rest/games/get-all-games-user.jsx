import { useInfiniteQuery } from 'react-query';
import { API_ENDPOINTS } from '@framework/utils/api-endpoints';
import { fetchUserGames } from './games.query';

export const useUserGamesQuery = (options = { limit: 6, page: 1 }) => {
  return useInfiniteQuery([API_ENDPOINTS.USER_GAMES, options], fetchUserGames, {
    getNextPageParam: ({ pagination }) => {
      return pagination.current_page === pagination.total_pages
        ? false
        : pagination?.links?.next
        ? pagination?.links?.next.replace('http', 'https')
        : false;
    },
  });
};
