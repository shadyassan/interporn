import http from '@framework/utils/http';
import { API_ENDPOINTS } from '@framework/utils/api-endpoints';

export const fetchGames = async ({ queryKey, pageParam }) => {
  const params = queryKey[1];
  let fetchedData = {};

  if (pageParam) {
    const response = await http.get(pageParam);
    fetchedData = response.data;
  } else {
    const response = await http.get(
      params?.category
        ? API_ENDPOINTS.CATEGORIES + `/${params.category}`
        : API_ENDPOINTS.GAMES,
      {
        params: { limit: 12, ...params },
      }
    );
    fetchedData = response.data;
  }

  const {
    data,
    meta: { pagination },
  } = fetchedData;

  return {
    data,
    pagination,
  };
};

export const fetchUserGames = async ({ queryKey, pageParam }) => {
  const params = queryKey[1];
  let fetchedData = {};

  if (pageParam) {
    const response = await http.get(pageParam);
    fetchedData = response.data;
  } else {
    const response = await http.get(API_ENDPOINTS.USER_GAMES, {
      params: { limit: 6, ...params },
    });
    fetchedData = response.data;
  }

  const {
    data,
    meta: { pagination },
  } = fetchedData;

  return {
    data,
    pagination,
  };
};

export const fetchGame = async (id) => {
  const {
    data: { data },
  } = await http.get(API_ENDPOINTS.GAMES + `/${id}`);
  return data;
};

export const fetchClip = async (game_id, clip_id) => {
  const {
    data: { data },
  } = await http.get(API_ENDPOINTS.GAMES + `/${game_id}/clips/${clip_id}`);
  return data;
};
