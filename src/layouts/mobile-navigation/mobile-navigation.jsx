import React from 'react';
import dynamic from 'next/dynamic';
import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { useUI } from 'contexts/ui.context';
import { Drawer } from 'components/common/drawer/drawer';
import Link from 'components/nav-link/link';

import MenuIcon from 'components/icons/MenuIcon';
import SearchIcon from 'components/icons/SearchIcon';
import HomeIcon from 'components/icons/HomeIcon';

const MobileMenu = dynamic(import('layouts/header/mobile-menu/mobile-menu'));

const MobileBottomWrapper = styled.div`
  position: fixed;
  z-index: 10;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 15px 30px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.body.bg};
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
  align-items: center;
  justify-content: space-between;
  display: none;

  @media (max-width: 767px) {
    display: flex;
  }
`;

const MobileButton = styled.button`
  outline: none;
  margin: 0;
  padding: 0;
  background-color: transparent;
  border: none;
  color: ${themeGet('colors.text.medium')};
`;

const MobileNavigation = () => {
  const {
    openSidebar,
    closeSidebar,
    displaySidebar,
    setDrawerView,
    openSearch,
    openModal,
  } = useUI();

  const handleMobileMenu = () => {
    setDrawerView('MOBILE_MENU');
    return openSidebar();
  };

  const openSearchHandler = () => {
    openSearch();
    openModal();
  };

  return (
    <>
      <MobileBottomWrapper>
        <MobileButton onClick={handleMobileMenu}>
          <MenuIcon />
        </MobileButton>
        <MobileButton>
          <Link href="/">
            <HomeIcon />
          </Link>
        </MobileButton>
        <MobileButton onClick={openSearchHandler}>
          <SearchIcon />
        </MobileButton>
      </MobileBottomWrapper>
      <Drawer
        placement="left"
        open={displaySidebar}
        onClose={closeSidebar}
        handler={false}
        showMask={true}
        level={null}>
        <MobileMenu />
      </Drawer>
    </>
  );
};

export default MobileNavigation;
