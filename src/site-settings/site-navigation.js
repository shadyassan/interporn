export const HOME_PAGE = '/';
export const CATALOG_PAGE = '/catalog';
export const CONTACT_PAGE = '/contact';
export const CART_PAGE = '/cart';
export const CHECKOUT_PAGE = '/checkout';
export const PROFILE_PAGE = '/my-account';
export const MY_VIDEO_PAGE = '/my-account/my-video';
export const YOUR_ORDERS_PAGE = '/my-account/orders';
export const GAME_PAGE = '/game';

export const HOME_MENU_ITEM = {
  id: 'nav.home',
  defaultMessage: 'Home',
  href: HOME_PAGE,
};

export const VIDEO_MENU_ITEM = {
  id: 'nav.video',
  defaultMessage: 'Video',
  href: CATALOG_PAGE,
};

export const CONTACT_MENU_ITEM = {
  id: 'nav.contact',
  defaultMessage: 'Contact',
  href: CONTACT_PAGE,
};

export const ORDERS_MENU_ITEM = {
  id: 'nav.order',
  href: YOUR_ORDERS_PAGE,
  defaultMessage: 'Orders',
};

export const PROFILE_MENU_ITEM = {
  id: 'nav.settings',
  defaultMessage: 'Settings',
  href: PROFILE_PAGE,
};

export const MY_VIDEO_MENU_ITEM = {
  id: 'nav.myvideo',
  defaultMessage: 'My video',
  href: MY_VIDEO_PAGE,
};

export const CART_MENU_ITEM = {
  id: 'nav.cart',
  defaultMessage: 'Cart',
  href: CART_PAGE,
};

export const CHECKOUT_MENU_ITEM = {
  id: 'nav.checkout',
  defaultMessage: 'Checkout',
  href: CHECKOUT_PAGE,
};

export const AUTHORIZED_MENU_ITEMS = [
  PROFILE_MENU_ITEM,
  MY_VIDEO_MENU_ITEM,
  CART_MENU_ITEM,
];

export const MENU_ITEMS = [HOME_MENU_ITEM, VIDEO_MENU_ITEM, CONTACT_MENU_ITEM];

export const ACCOUNT_MENU = [
  PROFILE_MENU_ITEM,
  MY_VIDEO_MENU_ITEM,
  ORDERS_MENU_ITEM,
];
