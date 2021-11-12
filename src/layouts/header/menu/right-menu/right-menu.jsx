import dynamic from 'next/dynamic';
import Menu from './main-menu/menu';
import Search from 'features/search/search';

import { RightMenuWrapper, MenuSearch, AuthMenuBox } from './right-menu.style';

const AuthMenu = dynamic(() => import('../auth-menu'), { ssr: false });

const RightMenu = ({ handler, isAuthenticated, onJoin, onLogout }) => {
  return (
    <RightMenuWrapper>
      <MenuSearch>
        <Menu />
        <Search />
      </MenuSearch>
      <AuthMenuBox>
        <AuthMenu
          handler={handler}
          onJoin={onJoin}
          onLogout={onLogout}
          isAuthenticated={isAuthenticated}
        />
      </AuthMenuBox>
    </RightMenuWrapper>
  );
};

export default RightMenu;
