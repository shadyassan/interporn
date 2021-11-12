import React from 'react';
import { useRouter } from 'next/router';
import { MENU_ITEMS } from 'site-settings/site-navigation';
import cx from 'classnames';
import { useUI } from 'contexts/ui.context';
import Logo from 'layouts/logo/logo';
import LogoImage from 'assets/images/logo.svg';
import CloseIcon from 'components/icons/CloseIcon';

import {
  LogoWrap,
  MobileMenuWrap,
  MainMenu,
  MenuItem,
  CloseButton,
} from './mobile-menu.style';

const MobileMenu = () => {
  const { closeSidebar } = useUI();
  const router = useRouter();

  const isCurrentPath = (href) => router.pathname === href;
  const handleOnClick = ({ href }) => {
    router.push(href);
    closeSidebar();
  };
  return (
    <MobileMenuWrap>
      <LogoWrap>
        <Logo imageUrl={LogoImage.src} showIcon={false} />
        <CloseButton onClick={closeSidebar}>
          <CloseIcon />
        </CloseButton>
      </LogoWrap>

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
    </MobileMenuWrap>
  );
};

export default MobileMenu;
