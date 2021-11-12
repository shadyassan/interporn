import styled from 'styled-components';
import NavLink from 'components/nav-link/nav-link';
import { AUTHORIZED_MENU_ITEMS } from 'site-settings/site-navigation';

const MenuWrapper = styled.div`
  .menu-item {
    padding: 3px 0;
    .label {
      font-size: ${(props) => props.theme.fontSizes['sm']}px;
    }
  }
`;

export const AuthorizedMenu = ({ onLogout }) => {
  return (
    <MenuWrapper>
      {AUTHORIZED_MENU_ITEMS.map((item, idx) => (
        <NavLink
          key={idx}
          className="menu-item"
          href={item.href}
          label={item.defaultMessage}
        />
      ))}
      <div className="menu-item" onClick={onLogout}>
        <a>
          <span className="label">Logout</span>
        </a>
      </div>
    </MenuWrapper>
  );
};
