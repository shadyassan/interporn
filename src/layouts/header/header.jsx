import { useRef, useCallback } from 'react';
import Cookies from 'js-cookie';
import Router from 'next/router';
import HeaderWrapper from './header.style';
import Logo from 'layouts/logo/logo';
import LogoImage from 'assets/images/logo.svg';
import { useUI } from 'contexts/ui.context';
import RightMenu from './menu/right-menu/right-menu';
import UserIcon from 'components/icons/UserIcon';
import { useActiveScroll } from 'utils/add-active-scroll';

const Header = ({ className = '' }) => {
  const siteHeaderRef = useRef();
  useActiveScroll(siteHeaderRef);

  const {
    unauthorize,
    setDrawerView,
    openSidebar,
    isAuthenticated,
    setModalView,
    openModal,
  } = useUI();

  const handleLogout = useCallback(() => {
    Cookies.remove('inter_access_token');
    unauthorize();
    Router.push('/');
  }, []);

  const handleMobileMenu = useCallback(() => {
    setDrawerView('MOBILE_MENU');
    return openSidebar();
  }, []);

  const handleJoin = useCallback((view) => {
    setModalView(view);
    openModal();
  }, []);

  return (
    <HeaderWrapper ref={siteHeaderRef} className={className}>
      <Logo handler={handleMobileMenu} imageUrl={LogoImage.src} />
      <RightMenu
        onLogout={handleLogout}
        onJoin={handleJoin}
        isAuthenticated={isAuthenticated}
        handler={<UserIcon color="#757EA0" />}
      />
    </HeaderWrapper>
  );
};

export default Header;
