import { memo } from 'react';
import Router, { useRouter } from 'next/router';
import { MENU_ITEMS } from 'site-settings/site-navigation';
import cx from 'classnames';
import { MenuBox, MainMenu, MenuItem } from './menu.style';

const Menu = () => {
  const router = useRouter();

  const isCurrentPath = (href) => router.pathname === href;
  const handleOnClick = ({ href }) => {
    Router.push(href);
  };

  return (
    <MenuBox>
      <MainMenu>
        {MENU_ITEMS.map((item) => (
          <MenuItem
            className={cx({
              ['current-page']: isCurrentPath(item.href),
            })}
            key={item.id}
            onClick={() => handleOnClick(item)}>
            {item.defaultMessage}
          </MenuItem>
        ))}
      </MainMenu>
    </MenuBox>
  );
};

export default Menu;
