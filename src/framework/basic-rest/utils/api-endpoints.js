const suffix = '/v1';

export const API_ENDPOINTS = {
  LOGIN: `${suffix}/clients/web/login`,
  REGISTER: `${suffix}/register`,
  CHANGE_EMAIL: `${suffix}/user/change-email`,
  CHANGE_PASSWORD: `${suffix}/change/password`,
  FORGET_PASSWORD: '/forget-password' /* not */,
  GET_CUSTOMER: `${suffix}/current/user`,
  UPDATE_CUSTOMER: `${suffix}/current/user/update`,
  CATEGORIES: `${suffix}/categories`,
  GAMES: `${suffix}/games`,
  NEW_GAMES: `${suffix}/games`,
  POPULAR_GAMES: `${suffix}/games`,
  USER_GAMES: `${suffix}/games/current/user`,
  RANDOM_GAMES: `${suffix}/random/games`,
  COUNTER: `${suffix}/counter`,
  ORDERS: `${suffix}/user/orders`,
  CREATE_ORDER: `${suffix}/orders`,
  CONTACTS: `${suffix}/contacts`,
};
