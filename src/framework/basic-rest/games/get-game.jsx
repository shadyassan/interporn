import { useQuery } from 'react-query';
import { API_ENDPOINTS } from '@framework/utils/api-endpoints';
import { fetchGame } from './games.query';

export const useGameQuery = (id) => {
  return useQuery([API_ENDPOINTS.GAMES, id], () => fetchGame(id));
};
